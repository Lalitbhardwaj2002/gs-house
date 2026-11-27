"""Checks the GK mock sets for UP TGT / PGT (data/gkm/<set>.json) and writes data/gkm/index.json.

Usage:  python tools/build_gkm.py
A set file is {"set": {"id", "level", "title", "minutes", "negative"}, "questions": [...]}; a question has the
GK quiz's own format (see docs/WRITER_BRIEF.md and docs/example-question.json) with the id "gkm/<set>-NNN",
the set's level (TGT or PGT) and "section", the syllabus section it belongs to (a TGT/PGT section of
sections.js), under which the results count it. Every question is checked with the GK quiz's validator rules,
and no English question may repeat one in another set or in the GK quiz (data/<section>.json).
The index lists each set (TGT first) for the practice pages of UP TGT and PGT Mathematics.
"""
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('gsvalidate', ROOT / 'tools' / 'validate.py')
V = importlib.util.module_from_spec(spec)
spec.loader.exec_module(V)
folder = ROOT / 'data' / 'gkm'

seen = {}
for f in sorted((ROOT / 'data').glob('*.json')):
    if f.name != 'index.json':
        for q in json.loads(f.read_text(encoding='utf-8'))['questions']:
            seen.setdefault(V.norm(q['en']['q']), q['id'])

errors, sets = [], []
files = sorted(f for f in folder.glob('*.json') if f.name != 'index.json')
for f in files:
    data = json.loads(f.read_text(encoding='utf-8'))
    head = data.get('set', {})
    sid = f.stem
    if head.get('id') != sid:
        errors.append(f'{f.name}: set id should be "{sid}"')
    level = head.get('level')
    if level not in ('TGT', 'PGT'):
        errors.append(f'{f.name}: level must be TGT or PGT')
    for key in ('title', 'minutes', 'negative'):
        if key not in head:
            errors.append(f'{f.name}: set.{key} missing')
    qs = data.get('questions', [])
    answers = [0, 0, 0, 0]
    for i, q in enumerate(qs, 1):
        e = []
        if q.get('id') != f'gkm/{sid}-{i:03d}':
            e.append(f'id should be gkm/{sid}-{i:03d}')
        if q.get('level') != level:
            e.append(f'level should be {level}, the level of the set')
        if 'tgt' not in V.TRACKS.get(q.get('section'), []):
            e.append('section must be a TGT/PGT section of sections.js')
        if not isinstance(q.get('answer'), int) or not 0 <= q['answer'] <= 3:
            e.append('answer must be 0-3')
        else:
            answers[q['answer']] += 1
        for lang in ('en', 'hi'):
            V.check_lang(q, lang, e)
        V.check_refs(q, e)
        key = V.norm(q.get('en', {}).get('q', ''))
        if key in seen:
            e.append(f'same English question as {seen[key]}')
        seen[key] = q.get('id')
        errors += [f'{q.get("id", f"{sid} #{i}")}: {x}' for x in e]
    if qs and max(answers) > 0.4 * len(qs):
        errors.append(f'{f.name}: correct answers bunch up, A-D = {answers}')
    sets.append({'id': sid, 'level': level, 'title': head.get('title', sid), 'n': len(qs),
                 'minutes': head.get('minutes', 15), 'negative': head.get('negative', 0)})

if errors:
    print('\n'.join(errors[:80]))
    sys.exit(f'{len(errors)} error(s); data/gkm/index.json not written')
order = {'TGT': 0, 'PGT': 1}
sets.sort(key=lambda x: (order.get(x['level'], 2), [int(n) if n.isdigit() else n for n in re.split(r'(\d+)', x['id'])]))
(folder / 'index.json').write_text(json.dumps({'sets': sets}, ensure_ascii=False, indent=1), encoding='utf-8', newline='\n')
print(f'data/gkm/index.json: {len(sets)} sets, {sum(x["n"] for x in sets)} questions')
