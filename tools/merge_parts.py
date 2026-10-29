"""Joins a section written in parts into one file and numbers the questions.

Usage:  python tools/merge_parts.py data/draft/hist-ivc
Reads data/draft/hist-ivc.part1.json, .part2.json, … (each {"section": ..., "questions": [...]}),
writes data/draft/hist-ivc.json with ids hist-ivc-001, -002, … and deletes the part files.
"""
import json
import sys
from pathlib import Path

base = Path(sys.argv[1])
section = base.name
parts = sorted(base.parent.glob(f'{section}.part*.json'), key=lambda p: int(p.stem.split('part')[-1]))
if not parts:
    sys.exit(f'no part files like {section}.part1.json in {base.parent}')
questions = []
for p in parts:
    questions += json.loads(p.read_text(encoding='utf-8'))['questions']
for i, q in enumerate(questions, 1):
    q['id'] = f'{section}-{i:03d}'
out = base.parent / f'{section}.json'
out.write_text(json.dumps({'section': section, 'questions': questions}, ensure_ascii=False, indent=1), encoding='utf-8')
for p in parts:
    p.unlink()
print(f'wrote {out.name}: {len(questions)} questions from {len(parts)} parts')
