"""Checks the syllabus files of the NET / JRF corner (data/net/*.txt).

Usage:  python tools/check_net.py

Each file has an English part (@en) and, for UGC NET, a Hindi part (@hi). A part is a list of units
('# Unit-1: Title'); a unit holds sub-headings ('## ...') and items ('- ...'); a line starting with
'> ' is a closing note. The script prints the number of units and items of each part, flags a Hindi
unit whose number of items differs from the English one, and fails on a line it cannot read.

A subject that has notes also has data/net/<subject>.json (its units and chapters) and one notes file
per chapter in data/net/<subject>/. For these the script checks that every chapter has its file, that
the English and the Hindi part have the same structure, and that every note ends in references.
A subject with "langs": ["en"] is in English only. Formulas are LaTeX between $ signs; the script
checks that every line has an even number of them.
"""
import json
import re
import sys
from pathlib import Path

folder = Path(__file__).resolve().parent.parent / 'data' / 'net'
problems = 0
for path in sorted(folder.glob('*.txt')):
    parts = {}
    cur = None
    for n, raw in enumerate(path.read_text(encoding='utf-8').splitlines(), 1):
        line = raw.strip()
        if not line:
            continue
        m = re.match(r'^@(en|hi)$', line)
        if m:
            cur = parts.setdefault(m.group(1), [])
        elif cur is None:
            print(f'{path.name}:{n}: text before @en'); problems += 1
        elif line.startswith('# '):
            if ': ' not in line:
                print(f'{path.name}:{n}: unit heading without ": "'); problems += 1
            cur.append({'title': line[2:], 'items': 0, 'heads': 0})
        elif line.startswith('> '):
            pass
        elif not cur:
            print(f'{path.name}:{n}: text before the first unit'); problems += 1
        elif line.startswith('## '):
            cur[-1]['heads'] += 1
        elif line.startswith('- '):
            cur[-1]['items'] += 1
        else:
            print(f'{path.name}:{n}: line is not a heading, an item or a note: {line[:50]}'); problems += 1
    if 'en' not in parts:
        print(f'{path.name}: no @en part'); problems += 1
        continue
    if path.name.startswith('ugc-') and 'hi' not in parts:
        print(f'{path.name}: a UGC NET syllabus needs an @hi part'); problems += 1
    summary = ', '.join(f"{lang}: {len(units)} units, {sum(u['items'] for u in units)} items" for lang, units in parts.items())
    print(f'{path.name}: {summary}')
    if 'hi' in parts:
        if len(parts['hi']) != len(parts['en']):
            print('   the two languages have a different number of units'); problems += 1
        for i, (en, hi) in enumerate(zip(parts['en'], parts['hi']), 1):
            if en['items'] != hi['items']:
                print(f"   note: unit {i} has {en['items']} items in English and {hi['items']} in Hindi")

# ---- Subjects that have notes: data/net/<subject>.json and data/net/<subject>/<chapter id>.txt ----
# The notes use the format of the book companion (see parseNotes in app.js), with reference lines
# "& source | link" at the end. English and Hindi must have the same structure.
MARKS = ['# ', '## ', '> ', '- ', '|', '~ ', '? ', '! ', '& ']


def shape(text):
    """The sequence of line kinds of one language part, and its problems."""
    kinds, bad = [], []
    width = None
    for raw in text.splitlines():
        line = raw.strip()
        if not line:
            width = None
            continue
        kind = next((m.strip() for m in MARKS if line.startswith(m)), 'p')
        kinds.append(kind)
        if kind == '|':
            cells = len(line.strip('|').split('|'))
            if width is not None and cells != width:
                bad.append(f'table row with {cells} cells in a table of {width}: {line[:40]}')
            width = cells
        else:
            width = None
        if kind in ('~', '?') and ' :: ' not in line:
            bad.append(f'no " :: " in: {line[:40]}')
        if kind == '&' and ' | ' in line and not line.split(' | ', 1)[1].startswith('https://'):
            bad.append(f'reference link is not https: {line[:60]}')
        if kind == '!' and not re.match(r'^! (remember|trick|exam|recap) \| .+', line):
            bad.append(f'unknown box: {line[:40]}')
        if '==' in line or '__' in line:
            bad.append(f'only **bold** is allowed: {line[:40]}')
        if line.count('$') % 2:
            bad.append(f'a formula is not closed (odd number of $): {line[:50]}')
    return kinds, bad


for path in sorted(folder.glob('*.json')):
    subject = json.loads(path.read_text(encoding='utf-8'))
    seen = set()
    chapters = 0
    wanted = subject.get('langs', ['en', 'hi'])     # a subject may be in English only ("langs": ["en"])
    words = {w: 0 for w in wanted}
    for unit in subject['units']:
        for key in ('id', 'icon', *wanted):
            if not unit.get(key):
                print(f"{path.name}: unit {unit.get('id')} has no {key}"); problems += 1
        for part in unit.get('parts', []):
            for c in part['chapters']:
                chapters += 1
                if c['id'] in seen:
                    print(f"{path.name}: chapter id {c['id']} is used twice"); problems += 1
                seen.add(c['id'])
                if any(not c.get(w) for w in wanted):
                    print(f"{path.name}: chapter {c['id']} needs a name in: {', '.join(wanted)}"); problems += 1
                notes = folder / path.stem / f"{c['id']}.txt"
                if not notes.exists():
                    print(f'{path.name}: no notes file for {c["id"]}'); problems += 1
                    continue
                parts = re.split(r'^@(en|hi)\s*$', notes.read_text(encoding='utf-8'), flags=re.M)
                langs = {parts[i]: parts[i + 1] for i in range(1, len(parts), 2)}
                if set(langs) != set(wanted):
                    print(f"{notes.name}: needs exactly these parts: {', '.join('@' + w for w in wanted)}"); problems += 1
                    continue
                shapes = {}
                for lang, text in langs.items():
                    kinds, bad = shape(text)
                    shapes[lang] = kinds
                    words[lang] += len(text.split())
                    for b in bad:
                        print(f'{notes.name} ({lang}): {b}'); problems += 1
                    if kinds[:1] != ['#']:
                        print(f'{notes.name} ({lang}): the first line must be the title'); problems += 1
                    if '&' not in kinds:
                        print(f'{notes.name} ({lang}): no references'); problems += 1
                if 'hi' in shapes and shapes['en'] != shapes['hi']:
                    at = next((i for i, (a, b) in enumerate(zip(shapes['en'], shapes['hi'])) if a != b), min(len(shapes['en']), len(shapes['hi'])))
                    print(f"{notes.name}: English and Hindi differ in structure at line-item {at + 1} ({len(shapes['en'])} and {len(shapes['hi'])} items)"); problems += 1
    extra = sorted(f.stem for f in (folder / path.stem).glob('*.txt') if f.stem not in seen) if (folder / path.stem).is_dir() else []
    if extra:
        print(f'{path.name}: notes files that no chapter uses: {extra}'); problems += 1
    print(f"{path.name}: {len(subject['units'])} units, {chapters} chapters with notes; words " + ', '.join(f'{w} {n}' for w, n in words.items()))
print(f'{problems} problems')
sys.exit(1 if problems else 0)
