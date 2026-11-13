"""Structure check of the book companion (data/book). Run from the repo root:

    python tools/check_book.py

For every chapter in data/book/book.json:
  - the notes file exists and has an @en and an @hi part
  - both parts have the same sequence of line kinds and the same cell counts
  - table rows in one table have equal cell counts; timeline and card rows have two cells
  - box kinds are known; bold and highlight marks are balanced
  - the chapter's quiz pool has at least 10 questions
It prints, for every topic, "chapter:pool size/words of English notes", then the totals of the
bank, then the problems (which must be none) and the notes (things to look at, not errors).
"""
import json, re, sys, os, glob

repo = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
book = json.load(open(os.path.join(repo, 'data', 'book', 'book.json'), encoding='utf-8'))
bank = {}
for f in glob.glob(os.path.join(repo, 'data', '*.json')):
    name = os.path.basename(f)[:-5]
    if name == 'index':
        continue
    data = json.load(open(f, encoding='utf-8'))
    bank[name] = data if isinstance(data, list) else data.get('questions', [])

KINDS = {'trick', 'exam', 'recap', 'remember'}
problems = []
notes = []


def shape(text, where):
    out = []
    table = None
    for n, raw in enumerate(text.split('\n'), 1):
        line = raw.strip()
        if not line:
            table = None
            out.append('blank')
            continue
        for mark in ('**', '=='):
            if line.count(mark) % 2:
                problems.append(f'{where}:{n} unbalanced {mark}')
        m = re.match(r'^!\s*(\w+)\s*\|\s*(.+)$', line)
        if m:
            if m.group(1) not in KINDS:
                problems.append(f'{where}:{n} unknown box {m.group(1)}')
            out.append('box:' + m.group(1)); table = None
        elif line.startswith('## '):
            out.append('h'); table = None
        elif line.startswith('# '):
            out.append('title'); table = None
        elif line.startswith('> '):
            out.append('lead'); table = None
        elif line.startswith('- '):
            out.append('li'); table = None
        elif line.startswith('|'):
            cells = [c.strip() for c in re.sub(r'^\||\|$', '', line).split('|')]
            if any(not c for c in cells):
                notes.append(f'{where}:{n} empty table cell')
            if table is not None and table != len(cells):
                problems.append(f'{where}:{n} table row has {len(cells)} cells, expected {table}')
            table = len(cells)
            out.append(f'row{len(cells)}')
        elif line.startswith('~ ') or line.startswith('? '):
            cells = [c.strip() for c in line[2:].split('::')]
            if len(cells) != 2 or not all(cells):
                problems.append(f'{where}:{n} needs "a :: b"')
            out.append('time' if line[0] == '~' else 'card'); table = None
        else:
            if re.match(r'^[#>\-~?!|]', line):
                problems.append(f'{where}:{n} looks like a mark without a space: {line[:30]}')
            out.append('p'); table = None
    while out and out[-1] == 'blank':
        out.pop()
    return out


def pool_count(ch):
    seen = set()
    for item in ch.get('pool', []):
        sec, p1 = item[0], item[1]
        p2 = item[2] if len(item) > 2 else None
        if sec not in bank:
            problems.append(f"{ch['id']} pool names unknown section {sec}")
            continue
        for q in bank[sec]:
            if ch.get('levels') != 'all' and q['level'] == 'Higher':
                continue
            path = q['en']['path']
            if len(path) > 1 and path[1] == p1 and (not p2 or (len(path) > 2 and path[2] in p2)):
                seen.add(q['id'])
    return len(seen)


chapters = 0
words = {}
for unit in book['units']:
    for topic in unit['topics']:
        row = []
        for ch in topic.get('chapters', []):
            chapters += 1
            path = os.path.join(repo, 'data', 'book', ch['id'] + '.txt')
            if not os.path.exists(path):
                problems.append(f"{ch['id']} has no notes file")
                continue
            text = open(path, encoding='utf-8').read()
            if '\r' in text:
                problems.append(f"{ch['id']} has CR line ends")
            parts = re.split(r'^@(en|hi)\s*$', text, flags=re.M)
            got = {parts[i]: parts[i + 1] for i in range(1, len(parts) - 1, 2)}
            if set(got) != {'en', 'hi'}:
                problems.append(f"{ch['id']} parts are {sorted(got)}")
                continue
            en = shape(got['en'].strip('\n'), ch['id'] + ' en')
            hi = shape(got['hi'].strip('\n'), ch['id'] + ' hi')
            if en != hi:
                for i, (a, b) in enumerate(zip(en, hi)):
                    if a != b:
                        problems.append(f"{ch['id']} en/hi differ at line {i + 1}: {a} vs {b}")
                        break
                else:
                    problems.append(f"{ch['id']} en has {len(en)} lines, hi has {len(hi)}")
            for need in ('title', 'lead', 'box:recap', 'card'):
                if need not in en:
                    problems.append(f"{ch['id']} has no {need}")
            for need in ('box:trick', 'box:exam'):
                if need not in en:
                    notes.append(f"{ch['id']} has no {need}")
            title = [l for l in got['en'].split('\n') if l.startswith('# ')]
            if title and title[0][2:].strip() != ch['en']:
                problems.append(f"{ch['id']} title differs: file '{title[0][2:].strip()}' vs book.json '{ch['en']}'")
            htitle = [l for l in got['hi'].split('\n') if l.startswith('# ')]
            if htitle and htitle[0][2:].strip() != ch['hi']:
                problems.append(f"{ch['id']} hindi title differs: file '{htitle[0][2:].strip()}' vs book.json '{ch['hi']}'")
            n = pool_count(ch)
            if n < 10:
                problems.append(f"{ch['id']} pool has only {n} questions")
            row.append(f"{ch['id'].split('-')[-1]}:{n}/{len(got['en'].split())}w")
        if row:
            words[topic['id']] = row

for t, row in words.items():
    print(t, ' '.join(row))
levels = {}
total = 0
for sec, qs in bank.items():
    for q in qs:
        levels[q['level']] = levels.get(q['level'], 0) + 1
        total += 1
print(f'chapters {chapters}; sections {len(bank)}; questions {total}; levels {levels}')
print(f'{len(problems)} problems')
for p in problems:
    print('  ' + p)
print(f'{len(notes)} notes')
for p in notes:
    print('  ' + p)
sys.exit(1 if problems else 0)
