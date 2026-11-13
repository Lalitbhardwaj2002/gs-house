# Question targets (owner's decision, 29 Oct 2026)

> **Status, 13 November 2026: complete.** All 73 syllabus sections have questions, and a 74th section, `misc-gk` (40 questions,
> outside both syllabi, written for the book companion), was added. Another 56 questions were added to nine sections for
> the science, technology, environment and health chapters of the book companion, and 74 more to five sections
> (`hist-1857`, `hist-nm2`, `hist-mughal`, `culture`, `geo-earth`) for the history, freedom movement and geography chapters:
> and 49 more to `ca-national`, `ca-awards` and `ca-sports` for the current-affairs chapters:
> 2,478 in total (1,134 TGT, 873 PGT, 471 Higher).
> All 48 sections that were planned at 6 questions now have 20 each (level mix: both tags 8 TGT / 7 PGT / 5 Higher;
> TGT-only 11 TGT / 9 PGT; Higher-only 20 Higher; answers 5/5/5/5 over A–D). The table below shows the earlier plan.
> The owner's new rules are in force: every question is one short single-line question, and the level of a question
> follows the section's tag (tgt-only → TGT/PGT, higher-only → Higher, both → a mix). `tools/validate.py` enforces both.
> The level mixes written below for small sections are superseded by that rule.

The owner capped the whole game at **under 1,500 questions** to fit his remaining usage limit.
Only the ICT and Teaching/Research/Data ("logical") sections get 40 each; every other remaining
section gets about 6 high-yield questions.

| Status | Sections | Questions |
|---|---|---|
| Finished (55–58 each) | pol-making, pol-rights, pol-dpsp, sci-physics, sci-chemistry, sci-biology, geo-physio, geo-rivers, geo-climate, hist-ivc, hist-vedic, hist-buddhism, hist-gupta, health-hormones | ≈784 |
| Finished, capped at 42 | hist-maurya, pol-executive | 84 |
| **40 each** | ict-computer, ict-internet, ict-applications, ict-terms, edtech, tra-teaching, tra-evaluation, tra-research, tra-data | 360 |
| **6 each** | the other 48 sections (history, polity, economy, geography, science/env, health, tra-ugc, current affairs) | ≈294 |
| **Total** | | **≈1,480** |

## Small sections (6 questions)
- Pick the **six most exam-relevant facts** of the section (the ones most often asked in UP TGT/PGT, UPPSC and Assistant Professor papers), spread over the scope.
- Level mix 2 TGT, 2 PGT, 2 Higher (for sections tagged only "higher": 1 TGT, 2 PGT, 3 Higher).
- Correct answers: use each of positions 0–3 at least once.
- One file per section: `data/draft/<id>.json` (no part files needed), ids `<id>-001` … `-006`.
- Read at most 2–3 Fatman page images per section.

## Groups (one writer agent, then one checker agent, per group)
| Group | Sections |
|---|---|
| H1 | hist-sultanate, hist-mughal, hist-bhakti |
| H2 | hist-british, hist-1857, hist-nm1, hist-nm2, culture |
| P1 | pol-parliament, pol-judiciary, pol-state, pol-local |
| P2 | pol-election, pol-bodies, pol-amend, pol-education |
| E1 | eco-basics, eco-planning, eco-banking, eco-capital |
| E2 | eco-budget, eco-poverty, eco-agri-industry, eco-trade |
| G1 | geo-universe, geo-earth, geo-soil-forest, geo-resources |
| G2 | geo-agri-transport, geo-population, geo-up |
| S1 | sci-space, sci-tech, env-ecology, env-people, env-global |
| M1 | health-vitamins, health-deficiency, health-diseases, health-enzymes |
| A1 | edtech, tra-ugc |
| C1 | ca-up, ca-national, ca-intl, ca-people |
| C2 | ca-sports, ca-awards, ca-science |
