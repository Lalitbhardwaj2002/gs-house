# NET / JRF corner: syllabus files

## Check of 14 November 2026

Method: the English PDFs were extracted with `pdftotext -layout` and every unit title, sub-heading and item of the file was matched against the PDF text by script (both ways: no file text missing from the PDF, no PDF text missing from the file), then read through. The Hindi PDFs (scans) were read page by page and compared by eye. After the edits `tools/check_net.py` ends with `0 problems`.

### ugc-paper1.txt

Compared: `Paper-I_English.pdf` pages 1-4, `Paper-I_Hindi.pdf` pages 1-4.

Corrected:
- English closing note: it said "Five questions, each carrying 2 marks, are to be set ... a passage followed by an equal number of questions and weightage is set for visually impaired candidates"; it now has the PDF wording "Five questions each carrying 2 marks are to be set from each Module ... a passage followed by equal number of questions and weightage be set for visually impaired candidates".

Left as it is:
- Hindi unit 1 "शिक्षण सहायक प्रणाली : परंपरागत, आधुनिक", unit 5 "लाभ और हानि, ब्याज" and unit 9 "उर्जा के स्रोत : सौर": the scan has no comma (or a comma instead of the colon) here; small punctuation repairs that match the English, harmless.
- Hindi unit 1 "(... संज्ञानात्मक), व्यक्तिगत भिन्नताएँ": the scan leaves the bracket open; the writer's closing bracket is a fair repair.

### ugc-political-science.txt

Compared: `Political Science_English.pdf` pages 1-6, `Political Science_Hindi.pdf` pages 1-7.

No change needed. Units, item order and all name lists (unit 2: 16 thinkers, unit 3: 20 thinkers) match in both languages; ष for श is repaired consistently.

Left as it is:
- English unit 1: the PDF prints "Concepts" and "Political Traditions" as small headings with the items under them; the file has them as two items "Concepts: ..." and "Political Traditions: ...". Same content, matches the Hindi PDF layout.
- English unit 3: initials are written uniformly ("M. K. Gandhi", "M. N. Roy", "V. D. Savarkar", "Dr. B. R. Ambedkar", "J. L. Nehru"; the PDF has "M.K Gandhi", "M.N.Roy", "V D Savarkar", "Dr. B.R.Ambedkar", "J L Nehru"). Cosmetic only.
- English unit 7: the PDF reads "Colonialism heritage and the contribution Indian National Movement"; the file has "Colonial heritage and the contribution of the Indian National Movement". A repair of an evident misprint (the Hindi says औपनिवेशिक विरासत); kept.
- English "Gujaral" → "Gujral", "nations-states" → "nation-states", "Management by Objectives- Peter Drucker" → colon: kept as misprint repairs.
- Hindi unit IX: the scan runs "लोक प्रशासन : ... लोक तथा निजी प्रशासन उपागम : प्रणाली सिद्धान्त ..." together in one paragraph; the file has two items as in the English. This looks like a lost line break in the scan rather than a deliberate merge (two separate "topic :" entries), so the split was kept.
- Hindi unit X: "नागरितकता" (unit I), "समितिया", "ओर", "आई. टी. ई." are scan misprints and were already repaired.

### ugc-commerce.txt

Compared: `Commerce_English.pdf` pages 1-6, `Commerce_Hindi.pdf` pages 1-7.

Corrected (all Hindi):
- Unit VII title and four items: "बैकिंग" (no anusvara) said 6 times; now "बैंकिंग" as in the scan (title, "भारत में बैंकिंग क्षेत्र", "गैर-बैंकिंग", "बैंकिंग तथा अन्य", "इण्टरनेट बैंकिंग", "मोबाइल बैंकिंग").
- Unit IX, Negotiable Instruments: "प्रकाम्य लिखतों के प्रकार" now "प्रक्राम्य लिखतों के प्रकार" (scan).
- Unit V: "द्विपक्षीय, पॉंसों तथा सामान्य वितरण" now "पाँसों" (chandrabindu, as in the scan).
- Unit V, hypothesis testing: "मैन-व्हिटनी यू टेस्ट, क्रुस्कल-वालिस" now "मैन व्हिटने यू टेस्ट, कृस्कल-वालिस". The scan prints "मैं व्हिटने" and "कृस्कल"; मैं → मैन is kept as a misprint repair, but the writer's own respelling of the names is undone.

Left as it is:
- English: "Verification ad valuation" → "and", "poisson" → "Poisson": misprint repairs, kept.
- Hindi unit I: the scan seems to read "(मुद्रिक एवं वित्तीय नीतियां)"; the file has "मौद्रिक" (as the scan itself has in unit VII). Evident misprint, kept; the scan is small here and the reading is not certain.
- Hindi unit IX "कंपनी अधिनयम" → "अधिनियम" and "सूचना प्रौद्योगिकी की अधिनियम" → "सूचना प्रौद्योगिकी अधिनियम", unit V "प्रायिकता था" → "तथा": misprint repairs, kept.
- Hindi unit VII "सरकारी प्रतिभूति बाजार": the scan may read "प्रतिभूर्ति"; not certain at this resolution, standard spelling kept.

### ugc-education.txt

Compared: `Education_English.pdf` pages 1-8, `Education_Hindi.pdf` pages 1-7.

Corrected (Hindi):
- Unit 8 c), last clause: it said "ई-शिक्षार्थियों तथा ई-अध्यापक के लिए आचारनीतिक मुद्दे - अध्यापन, अधिगम तथा शोध।" (reworded after the English, with "अधिगम" added); it now has the scan wording "ई-शिक्षार्थियों तथा ई-अध्यापक-अध्यापन तथा शोध के लिए आचारनीतिक-मुद्दे।".
- Unit 8 b): "डिक तथा केयरी मॉडल, मैसन का" now "डिक तथा केयरी मॉडल मैसन का" (no comma, as in both PDFs).

Left as it is:
- English: "Organinsational" → "Organisational", "Programme of Action of Action" → "Programme of Action": repairs, kept.
- Hindi unit 3 b): the scan prints "स्टर्नवर्ग"; the file has "स्टर्नबर्ग" (Sternberg). Misprint repair like "Chester Bernard"; kept.
- Hindi unit 3 d): "इक्लेक्टिक" added where the scan breaks off ("गैर-निदेशात्मक एवं)"); kept as briefed.
- Hindi unit 6 d): the scan has no opening bracket after "केस अध्ययन"; the writer's "केस अध्ययन (अभिकल्प के घटक, ..." is a fair repair.
- Hindi unit 7 a): Malcolm Knowles is printed in the scan as something like "माक्लय नोल्ज" (garbled, hard to read); the file has "मैल्कम नोल्ज". Kept; the scan cannot be read letter by letter here.
- Hindi unit 8 c) "ओपेन एजूकेशन रिसोर्सेज" and unit 9 c) "सी के प्रह्लाद": the scan may read "एजुकेशन" and "प्रहलाद"; at the available resolution the matra / conjunct cannot be told for certain, so left.
- Hindi unit 10 b) "दोषग्रस्तता (इंपेयरमेंट)": the scan may read "इपेयरमेंट"; not certain, left.
- Hindi unit 9 b) "त्रि-आयमी" → "त्रि-आयामी", unit 9 d) "आई एम क्यू ए ए एच ई" → "आई एन ...", unit 7 d) "अत:क्रिया" → "अंत:क्रिया": repairs, kept.

### csir-mathematics.txt

Compared: `20201221140054469mathmeticascience_syllbus.pdf` pages 1-4.

Corrected:
- Closing note: it said "Note: This is the common syllabus for Part B and Part C. All students are expected ... additional questions from Units II and III. Students in statistics are expected to answer additional questions from Unit IV." It now has the PDF wording: "All students are expected to answer questions from Unit I. Students in mathematics are expected to answer additional question from Unit II and III. Students in statistics are expected to answer additional question from Unit IV." (the first sentence was not part of the note; "Students with in statistics" is repaired to "Students in statistics").

Left as it is:
- The PDF units are headed only "UNIT – 1" to "UNIT – 4", without titles. The file's titles ("Analysis and Linear Algebra", "Complex Analysis, Algebra and Topology", "Differential Equations, Numerical Analysis and Mechanics", "Statistics") are built from the PDF's own sub-headings, because the file format needs a title. Unit 4 has no sub-heading in the PDF; "Statistics" is taken from the closing note.
- Unit 4: "2K factorial experiments" — the PDF prints 2 with a small K (2 to the power K). Plain "2K" kept, as no superscript is available in the format.

### csir-life-sciences.txt

Compared: `20260121115025355Merged_Syllabus_CSIR-DBT_21Jan2026.pdf` pages 1-16.

No change needed. All 14 units, every lettered section (A-J / A-L) and all items are present and in order; nothing extra.

Left as it is:
- Unit 14 I: the PDF prints "X2 test"; the file has "χ² test" (chi-square). Evident misprint repair, kept.
- Unit titles use "-" where the contents page has "–" ("System Physiology – Plant"). Cosmetic.
- Unit 1 sections A-J are single items ("- A. ...") rather than "## A." headings, since each has no separate text under it; unit 7 E, G, I, J, K, where the PDF prints heading and text on one line, are split into "## heading" + item. Both are consistent with the format.
