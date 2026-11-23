"""Checks the solved past papers of UP TGT / PGT Mathematics (data/mq/<paper>.json) and writes
data/mq/index.json, which the practice pages read: each paper with its question numbers, the
numbers of each notes topic, and the title of every topic.

A paper file is {"paper": {...}, "questions": [...]}:
  paper: id, title, exam, date, level ("TGT" or "PGT"), minutes (the exam's length), negative (0,
         0.25 or 0.33), source (where the paper was found), optional note; kind "expected" for a mock
         written for a coming exam (default "past").
  question: id "mq/<paper>-NNN", level, math: true, answer (0-3), key (the board's key, 0-3 or null),
            topic (a notes page id, tp-CC-SS), src {paper, n, label, from (an expected paper's question
            asked before: the earlier paper, e.g. "UP TGT 2003")},
            en {q, options[4], explanation, notes[4], path[], facts[]}.
Formulas are LaTeX between $ signs. Run from the repository root: python tools/build_mq.py
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
MQ = ROOT / 'data' / 'mq'
TIMERS = [30, 45, 60, 90]

# Titles of the notes topics, from the two maths subjects.
topics = {}
for f in ('tgt-mathematics.json', 'pgt-mathematics.json'):
    d = json.loads((ROOT / 'data' / 'net' / f).read_text('utf-8'))
    for u in d['units'] + d.get('extras', []):
        for p in u.get('parts', []):
            for c in p['chapters']:
                topics.setdefault(c['id'], c['en'])

problems = []
def bad(where, msg):
    problems.append(f'{where}: {msg}')

def dollars_ok(s):
    return s.replace('\\$', '').count('$') % 2 == 0

papers = []
for f in sorted(MQ.glob('*.json')):
    if f.name == 'index.json':
        continue
    d = json.loads(f.read_text('utf-8'))
    p = d.get('paper', {})
    pid = f.stem
    if p.get('id') != pid:
        bad(f.name, f'paper id {p.get("id")!r} is not the file name')
    for k in ('title', 'exam', 'date', 'level', 'minutes', 'source'):
        if not p.get(k):
            bad(f.name, f'paper has no {k}')
    if p.get('kind', 'past') not in ('past', 'expected'):
        bad(f.name, 'kind must be past or expected')
    if p.get('level') not in ('TGT', 'PGT'):
        bad(f.name, 'level must be TGT or PGT')
    if p.get('negative') not in (0, 0.25, 0.33):
        bad(f.name, 'negative must be 0, 0.25 or 0.33')
    qs = d.get('questions', [])
    ns, by_topic, seen, asked = [], {}, set(), 0
    for q in qs:
        where = f'{f.name} {q.get("id")}'
        m = re.fullmatch(rf'mq/{re.escape(pid)}-(\d{{3}})', q.get('id', ''))
        if not m:
            bad(where, 'id must be mq/<paper>-NNN'); continue
        n = int(m.group(1))
        if n in seen:
            bad(where, 'duplicate id')
        seen.add(n)
        en = q.get('en', {})
        if q.get('math') is not True: bad(where, 'math must be true')
        if q.get('level') != p.get('level'): bad(where, 'level differs from the paper')
        if q.get('answer') not in (0, 1, 2, 3): bad(where, 'answer must be 0-3')
        if q.get('key') not in (None, 0, 1, 2, 3): bad(where, 'key must be 0-3 or null')
        if q.get('topic') not in topics: bad(where, f'unknown topic {q.get("topic")}')
        src = q.get('src', {})
        if src.get('paper') != pid or src.get('n') != n or not src.get('label'): bad(where, 'src must name the paper, number and label')
        if not en.get('q'): bad(where, 'no question')
        opts = en.get('options', [])
        if len(opts) != 4 or not all(isinstance(o, str) and o.strip() for o in opts): bad(where, 'needs four options')
        if len(set(o.strip() for o in opts)) != len(opts): bad(where, 'two options are the same')
        if not en.get('explanation'): bad(where, 'no solution')
        if len(en.get('notes', [])) != 4: bad(where, 'notes must have four entries (empty allowed)')
        for k, v in [('q', en.get('q', ''))] + [(f'option {i + 1}', o) for i, o in enumerate(opts)] + [('solution', en.get('explanation', ''))] + [('fact', x) for x in en.get('facts', [])]:
            if not dollars_ok(v): bad(where, f'odd number of $ in the {k}')
        if 'from' in src and not (isinstance(src['from'], str) and src['from'].strip()): bad(where, 'src.from must name the earlier paper')
        ns.append(n)
        asked += 'from' in src
        by_topic.setdefault(q.get('topic'), []).append(n)
    if ns != sorted(ns):
        bad(f.name, 'questions are not in the order of their numbers')
    per_q = (p.get('minutes', 0) * 60) / max(1, len(ns))
    timer = min(TIMERS, key=lambda t: abs(t - per_q))
    entry = {
        'id': pid, 'kind': p.get('kind', 'past'), 'title': p.get('title'), 'exam': p.get('exam'), 'date': p.get('date'), 'level': p.get('level'),
        'minutes': p.get('minutes'), 'negative': p.get('negative', 0), 'timer': timer,
        'ns': ns, 'topics': {k: v for k, v in sorted(by_topic.items())},
    }
    if entry['kind'] == 'expected':
        entry['asked'] = asked   # questions taken from earlier papers
    papers.append(entry)

# Order on the practice page: by level, then UP exams before DSSSB, newest first.
EXAMS = ['UP TGT', 'UP LT Grade', 'UP PGT', 'UP GIC Lecturer', 'DSSSB TGT', 'DSSSB PGT']
def year(p):
    m = re.search(r'\d{4}', p['date'] or '')
    return int(m.group(0)) if m else 0
papers.sort(key=lambda p: (p['level'] != 'TGT', p['kind'] != 'expected', EXAMS.index(p['exam']) if p['exam'] in EXAMS else 99, -year(p), p['id']))
used = sorted({t for p in papers for t in p['topics']})
index = {'papers': papers, 'topics': {t: topics[t] for t in used if t in topics}}
(MQ / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=1) + '\n', 'utf-8', newline='\n')
total = sum(len(p['ns']) for p in papers)
print(f'data/mq/index.json: {len(papers)} papers, {total} questions, {len(used)} topics')
for line in problems:
    print('PROBLEM', line)
print(f'{len(problems)} problems')
sys.exit(1 if problems else 0)
