"""Prepares the two reference books for question writers (run once on your own computer).

Usage:  python tools/prep_refs.py "<path to Special Topics 2.0 PDF>" "<path to Parmar SSC Fatman PDF>"
Needs:  pip install pymupdf

Writes (inside refs/, which is git-ignored — the books are copyrighted, never commit or publish them):
  refs/special_topics.txt   the Special Topics text, with "===== SPECIAL TOPICS PDF PAGE n =====" before each page
  refs/fatman/p001.jpg …    every Fatman page as an image (the book is scanned, so it has no text layer)
"""
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

special_pdf, fatman_pdf = sys.argv[1], sys.argv[2]
refs = Path(__file__).resolve().parent.parent / 'refs'
(refs / 'fatman').mkdir(parents=True, exist_ok=True)

junk = re.compile(r'(Success AIM STUDY|Succe$|^Su$|PLEASE VISIT & SUBSCRIBE MY YOUTUBE CHANNEL- SUCCESS AIM STUDY)')
special = fitz.open(special_pdf)
with open(refs / 'special_topics.txt', 'w', encoding='utf-8') as out:
    for i, page in enumerate(special):
        lines = [line.strip() for line in page.get_text().splitlines()]
        lines = [line for line in lines if line and not junk.search(line)]
        out.write(f'\n===== SPECIAL TOPICS PDF PAGE {i + 1} =====\n' + '\n'.join(lines) + '\n')

fatman = fitz.open(fatman_pdf)
for i, page in enumerate(fatman):
    page.get_pixmap(dpi=100).save(str(refs / 'fatman' / f'p{i + 1:03d}.jpg'), jpg_quality=72)

print(f'Special Topics: {special.page_count} pages -> refs/special_topics.txt')
print(f'Fatman: {fatman.page_count} page images -> refs/fatman/')
