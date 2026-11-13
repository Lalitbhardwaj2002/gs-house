"""Checks the syllabus files of the NET / JRF corner (data/net/*.txt).

Usage:  python tools/check_net.py

Each file has an English part (@en) and, for UGC NET, a Hindi part (@hi). A part is a list of units
('# Unit-1: Title'); a unit holds sub-headings ('## ...') and items ('- ...'); a line starting with
'> ' is a closing note. The script prints the number of units and items of each part, flags a Hindi
unit whose number of items differs from the English one, and fails on a line it cannot read.
"""
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
print(f'{problems} problems')
sys.exit(1 if problems else 0)
