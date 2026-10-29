"""Writes data/index.json: how many checked questions each section has, by level.

Usage:  python tools/build_index.py
Only finished sections (data/<id>.json, not data/draft/) are counted. The game reads this file
to show question counts and to hide sections that have no questions yet.
"""
import json
from pathlib import Path

data = Path(__file__).resolve().parent.parent / 'data'
index = {'sections': {}}
for f in sorted(data.glob('*.json')):
    if f.name == 'index.json':
        continue
    questions = json.loads(f.read_text(encoding='utf-8'))['questions']
    counts = {'total': len(questions), 'TGT': 0, 'PGT': 0, 'Higher': 0}
    for q in questions:
        counts[q['level']] = counts.get(q['level'], 0) + 1
    index['sections'][f.stem] = counts
(data / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding='utf-8')
total = sum(c['total'] for c in index['sections'].values())
print(f'data/index.json: {len(index["sections"])} sections, {total} questions')
