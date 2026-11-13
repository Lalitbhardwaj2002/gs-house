"""Prints questions compactly in both languages, for proof-reading.

Usage:  python tools/show.py data/hist-ivc.json 003 017 041     (chosen question numbers)
        python tools/show.py data/hist-ivc.json all
"""
import json
import sys
from pathlib import Path

path = Path(sys.argv[1])
want = set(sys.argv[2:])
for q in json.loads(path.read_text(encoding='utf-8'))['questions']:
    num = q['id'][-3:]
    if 'all' not in want and num not in want:
        continue
    print(f"### {q['id']} [{q['level']}] answer={'ABCD'[q['answer']]} (index {q['answer']})")
    for lang in ('en', 'hi'):
        b = q[lang]
        print(f"  {lang}.q: {b['q']}")
        for i, (opt, note) in enumerate(zip(b['options'], b['notes'])):
            print(f"    {'ABCD'[i]}) {opt}   // {note}")
        print(f"  {lang}.explanation: {b['explanation']}")
        print(f"  {lang}.path: {' > '.join(b['path'])}")
        print(f"  {lang}.facts: {' | '.join(b['facts'])}")
    print(f"  refs: {json.dumps(q['refs'], ensure_ascii=False)}")
    print()
