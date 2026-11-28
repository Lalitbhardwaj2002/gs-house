"""Seals and opens the diamond papers (data/gem/<level>.txt), the most expected full paper of each level.

Usage:
  python tools/gem.py seal <paper.json> <level>   checks the paper and writes data/gem/<level>.txt
  python tools/gem.py open <level> <out.json>     writes the paper back as JSON (keep it outside the repository)

A paper is {"paper": {"id", "level", "title", "minutes", "negative"}, "questions": [...]}: 120 questions as in
the exam, Q1-30 general knowledge in the GK quiz's format ("gkm/gem-<level>-NNN", with "section") and Q31-120
mathematics in the maths papers' format ("mq/gem-<level>-NNN", "math": true, "topic"). The sealed file is the
JSON's UTF-8 bytes XOR-ed with a mulberry32 stream and written as base64, so the questions cannot be read in
the repository or found by a search; app.js (loadGem) opens it when the diamond on the practice page is used.
The plain paper is kept outside the repository.
"""
import base64
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SEED = 0x47534844   # the same as GEM_SEED in app.js
M = 0xFFFFFFFF


def stream(n):
    a, out = SEED, bytearray(n)
    for i in range(n):
        a = (a + 0x6D2B79F5) & M
        t = ((a ^ (a >> 15)) * (1 | a)) & M
        t = ((t + (((t ^ (t >> 7)) * (61 | t)) & M)) & M) ^ t
        out[i] = (t ^ (t >> 14)) & 255
    return out


def xor(data):
    return bytes(b ^ k for b, k in zip(data, stream(len(data))))


def check(paper, level):
    spec = importlib.util.spec_from_file_location('gsvalidate', ROOT / 'tools' / 'validate.py')
    V = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(V)
    topics = json.loads((ROOT / 'data' / 'mq' / 'index.json').read_text('utf-8')).get('topics', {})
    head, qs, errors = paper.get('paper', {}), paper.get('questions', []), []

    def key_of(q):   # the stem with its right option: a stock stem ("Which of the following is true?") alone is no repeat
        en = q.get('en', {})
        opts, a = en.get('options', []), q.get('answer')
        return V.norm(en.get('q', '')) + '|' + (V.norm(opts[a]) if isinstance(a, int) and 0 <= a < len(opts) else '')
    lv = level.upper()
    if head.get('id') != f'gem-{level}' or head.get('level') != lv:
        errors.append(f'paper id should be gem-{level} and level {lv}')
    for key in ('title', 'minutes', 'negative'):
        if key not in head:
            errors.append(f'paper.{key} missing')
    if len(qs) != 120:
        errors.append(f'{len(qs)} questions; a full paper has 120')
    seen = {}
    for f in sorted((ROOT / 'data').glob('*.json')) + sorted((ROOT / 'data' / 'gkm').glob('*.json')) + sorted((ROOT / 'data' / 'mq').glob('*.json')):
        if f.name != 'index.json':
            for q in json.loads(f.read_text('utf-8')).get('questions', []):
                seen.setdefault(key_of(q), q['id'])
    for i, q in enumerate(qs, 1):
        e = []
        gk = i <= 30
        want = f'{"gkm" if gk else "mq"}/gem-{level}-{i:03d}'
        if q.get('id') != want:
            e.append(f'id should be {want}')
        if q.get('level') != lv:
            e.append(f'level should be {lv}')
        if not isinstance(q.get('answer'), int) or not 0 <= q['answer'] <= 3:
            e.append('answer must be 0-3')
        if gk:
            if 'tgt' not in V.TRACKS.get(q.get('section'), []):
                e.append('section must be a TGT/PGT section of sections.js')
            for lang in ('en', 'hi'):
                V.check_lang(q, lang, e)
            V.check_refs(q, e)
        else:
            en = q.get('en', {})
            if not q.get('math') or q.get('topic') not in topics:
                e.append('a maths question needs "math": true and a topic of data/mq/index.json')
            opts = en.get('options', [])
            if len(opts) != 4 or len({re.sub(r'\s+', '', o) for o in opts}) != 4:
                e.append('four different options')
            for field in [en.get('q', ''), en.get('explanation', '')] + opts:
                if field.count('$') % 2:
                    e.append('odd number of $ in a field')
                    break
            if not en.get('explanation'):
                e.append('solution missing')
        key = key_of(q)
        if key in seen:
            e.append(f'same English question and answer as {seen[key]}')
        seen[key] = q.get('id')
        errors += [f'Q{i} {q.get("id")}: {x}' for x in e]
    return errors


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    if len(sys.argv) != 4 or sys.argv[1] not in ('seal', 'open'):
        sys.exit(__doc__)
    if sys.argv[1] == 'seal':
        src, level = Path(sys.argv[2]), sys.argv[3].lower()
        paper = json.loads(src.read_text('utf-8'))
        errors = check(paper, level)
        if errors:
            print('\n'.join(errors[:80]))
            sys.exit(f'{len(errors)} error(s); not sealed')
        raw = json.dumps(paper, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
        out = ROOT / 'data' / 'gem' / f'{level}.txt'
        out.parent.mkdir(exist_ok=True)
        out.write_text(base64.b64encode(xor(raw)).decode('ascii') + '\n', 'ascii', newline='\n')
        print(f'{out.relative_to(ROOT).as_posix()}: {len(paper["questions"])} questions sealed')
    else:
        level, dst = sys.argv[2].lower(), Path(sys.argv[3])
        raw = xor(base64.b64decode((ROOT / 'data' / 'gem' / f'{level}.txt').read_text('ascii')))
        dst.write_text(json.dumps(json.loads(raw.decode('utf-8')), ensure_ascii=False, indent=1), 'utf-8')
        print(f'{dst}: opened')


if __name__ == '__main__':
    main()
