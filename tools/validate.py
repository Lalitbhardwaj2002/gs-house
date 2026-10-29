"""Checks GS House question files.

Usage:  python tools/validate.py data/hist-ivc.json [more files or folders ...]
        python tools/validate.py data            (every section file, plus cross-section duplicates)

Exit code 1 if any file has errors. Warnings don't fail the run.
"""
import json
import re
import sys
from pathlib import Path

LEVELS = {'TGT', 'PGT', 'Higher'}
BOOK_PAGES = {'special-topics': (1, 265), 'fatman': (1, 402)}
DEVANAGARI = re.compile(r'[ऀ-ॿ]')
LANG_FIELDS = ('q', 'options', 'explanation', 'notes', 'path', 'facts')


def norm(text):
    return re.sub(r'[^0-9a-zऀ-ॿ]+', ' ', text.lower()).strip()


def check_lang(q, lang, errors):
    block = q.get(lang)
    if not isinstance(block, dict):
        errors.append(f'missing "{lang}" block')
        return
    for key in LANG_FIELDS:
        if key not in block:
            errors.append(f'{lang}.{key} missing')
    text = block.get('q', '')
    if not isinstance(text, str) or not 10 <= len(text) <= 900:
        errors.append(f'{lang}.q must be 10–900 characters')
    opts = block.get('options', [])
    if not isinstance(opts, list) or len(opts) != 4 or not all(isinstance(o, str) and o.strip() for o in opts):
        errors.append(f'{lang}.options must be 4 non-empty strings')
    else:
        if len({norm(o) for o in opts}) != 4:
            errors.append(f'{lang}.options are not all different')
        if any(len(o) > 160 for o in opts):
            errors.append(f'{lang}.options longer than 160 characters')
        if any(re.match(r'^\s*\(?[a-dA-D]\)[\s.]', o) for o in opts):
            errors.append(f'{lang}.options must not start with (a)/(b) labels; the game adds A–D')
    expl = block.get('explanation', '')
    if not isinstance(expl, str) or not 30 <= len(expl) <= 900:
        errors.append(f'{lang}.explanation must be 30–900 characters')
    notes = block.get('notes', [])
    if not isinstance(notes, list) or len(notes) != 4 or not all(isinstance(n, str) and len(n) >= 8 for n in notes):
        errors.append(f'{lang}.notes must be 4 strings (one per option, A–D)')
    path = block.get('path', [])
    if not isinstance(path, list) or not 2 <= len(path) <= 5 or not all(isinstance(p, str) and p.strip() for p in path):
        errors.append(f'{lang}.path must have 2–5 steps')
    facts = block.get('facts', [])
    if not isinstance(facts, list) or not 1 <= len(facts) <= 4 or not all(isinstance(f, str) and len(f) >= 8 for f in facts):
        errors.append(f'{lang}.facts must have 1–4 items')
    joined = ' '.join([text, expl] + (notes if isinstance(notes, list) else []))
    if lang == 'hi' and not DEVANAGARI.search(joined):
        errors.append('hi block has no Hindi (Devanagari) text')
    if lang == 'en' and DEVANAGARI.search(text + expl):
        errors.append('en question/explanation contains Devanagari')


def check_refs(q, errors):
    refs = q.get('refs')
    if not isinstance(refs, list) or not refs:
        errors.append('refs must list at least one reference')
        return
    for r in refs:
        if not isinstance(r, dict):
            errors.append('each ref must be an object')
        elif 'book' in r:
            lo, hi = BOOK_PAGES.get(r['book'], (None, None))
            if lo is None:
                errors.append(f'unknown book "{r["book"]}" (use special-topics or fatman)')
            elif not isinstance(r.get('page'), int) or not lo <= r['page'] <= hi:
                errors.append(f'{r["book"]} page must be a whole number {lo}–{hi}')
        elif not isinstance(r.get('source'), str) or len(r['source']) < 4:
            errors.append('a non-book ref needs a "source" description')
        elif 'url' in r and not str(r['url']).startswith('http'):
            errors.append('ref url must start with http')


def check_file(path, seen):
    errors, warnings = [], []
    try:
        data = json.loads(Path(path).read_text(encoding='utf-8'))
    except Exception as e:  # noqa: BLE001 - report any parse problem
        return [f'cannot read JSON: {e}'], [], 0
    section = Path(path).stem
    if data.get('section') != section:
        errors.append(f'"section" should be "{section}"')
    questions = data.get('questions')
    if not isinstance(questions, list) or not questions:
        return errors + ['"questions" must be a non-empty list'], warnings, 0
    ids, answers, levels = set(), [0, 0, 0, 0], {}
    for i, q in enumerate(questions):
        qerr = []
        qid = q.get('id', f'#{i + 1}')
        if not re.fullmatch(rf'{re.escape(section)}-\d{{3}}', str(qid)):
            qerr.append(f'id should look like {section}-001')
        if qid in ids:
            qerr.append('duplicate id')
        ids.add(qid)
        if q.get('level') not in LEVELS:
            qerr.append('level must be TGT, PGT or Higher')
        levels[q.get('level')] = levels.get(q.get('level'), 0) + 1
        if not isinstance(q.get('answer'), int) or not 0 <= q['answer'] <= 3:
            qerr.append('answer must be 0, 1, 2 or 3')
        else:
            answers[q['answer']] += 1
        for lang in ('en', 'hi'):
            check_lang(q, lang, qerr)
        check_refs(q, qerr)
        en = q.get('en', {}) if isinstance(q.get('en'), dict) else {}
        key = norm(en.get('q', ''))
        if key:
            if key in seen:
                qerr.append(f'same English question as {seen[key]}')
            else:
                seen[key] = qid
        errors += [f'{qid}: {e}' for e in qerr]
    n = len(questions)
    if n >= 12 and max(answers) > 0.4 * n:
        warnings.append(f'correct answers bunch up: A–D = {answers}')
    allabove = sum(1 for q in questions if isinstance(q.get('en'), dict)
                   and any('all of the above' in o.lower() for o in q['en'].get('options', [])))
    if allabove > max(2, 0.06 * n):
        warnings.append(f'"All of the above" used {allabove} times')
    return errors, warnings, n, answers, levels


def main(args):
    files = []
    for a in args or ['data']:
        p = Path(a)
        files += sorted(x for x in p.glob('*.json') if x.name != 'index.json') if p.is_dir() else [p]
    seen, failed, total = {}, False, 0
    for f in files:
        result = check_file(f, seen)
        errors, warnings, n = result[0], result[1], result[2]
        total += n
        extra = f' | A–D {result[3]} | levels {result[4]}' if len(result) > 3 else ''
        print(f'{"FAIL" if errors else "ok  "} {f.name}: {n} questions{extra}')
        for e in errors[:40]:
            print(f'   error: {e}')
        if len(errors) > 40:
            print(f'   … {len(errors) - 40} more errors')
        for w in warnings:
            print(f'   warning: {w}')
        failed |= bool(errors)
    print(f'TOTAL {total} questions in {len(files)} file(s)')
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main(sys.argv[1:])
