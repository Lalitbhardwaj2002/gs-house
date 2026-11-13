# ict-internet: checker report

The draft had 40 questions (the cap). All **40 were kept**: 16 were corrected and none deleted. The ids are unchanged (ict-internet-001 to -040). I solved every question blind, and every answer key was confirmed. Answers are spread A–D = 10/10/10/10. Levels: TGT 14, PGT 16, Higher 10.

## References checked
- **URLs**: I opened every distinct URL.
  - **All 19 RFC links work** (rfc-editor.org /rfc/rfcN redirects to /info/rfcN). I downloaded each RFC and checked the cited facts:
    - IPv4 is 32 bits (RFC 791) and IPv6 is 128 bits in x:x:x:x:x:x:x:x form (RFC 4291).
    - The private ranges are in RFC 1918.
    - The ports are HTTP 80 / HTTPS 443 (RFC 9110), FTP 21 (RFC 959), SMTP 25 (RFC 5321), POP3 110 (RFC 1939) and IMAP 143 (RFC 9051).
    - The TCP/IP layers (link / internet / transport / application) are in RFC 1122.
    - UDP gives no delivery guarantee (RFC 768).
    - Bcc and addr-spec are covered in RFC 5322.
  - **These links also work and support their facts**: ISOC Brief History, IEEE 802.11 and NIST SP 800-63B.
- **Dead or unsupported URLs, replaced or removed**:
  - **CERN "birth-web" and "short-history-web"** (404): replaced with the live pages home.cern/science/computing/the-birth-of-the-web/ and .../short-history-web/ (Q2, Q11, Q12, Q14, Q20).
  - **webfoundation.org history** (504): replaced with W3C's Berners-Lee biography, which confirms URIs, HTTP and HTML, the first client and server in 1990, and W3C in 1994 (Q14).
  - **ernet.in** (certificate error): removed from Q4. Special Topics p. 88 confirms that VSNL started public Internet service on 15 August 1995.
  - **cert-in.org.in home page**: it is an empty frameset, and IndiaCode returned 403 or timed out. They were replaced with:
    - the PIB CERT-In backgrounder (2026), which confirms MeitY and s.70B
    - the PRS copy of the IT Act, which confirms 66C identity theft, 66D cheating by personation, 66F cyber terrorism, 67 obscene material, 70B CERT-In, and in force from 17 October 2000 (Q37, Q38)
  - **ISOC page in Q29**: removed, because it dates Tomlinson's e-mail software to 1972. It was replaced with NCERT Class 12 CS Ch. 10 (its timeline gives 1971) and the Centre for Computing History (1971).
- **NCERT chapters**: I downloaded and read lecs110/111/112 and kecs111.
  - **Confirmed**: Class 12 CS Ch. 10 Computer Networks, Ch. 11 Data Communication and Ch. 12 Security Aspects, and Class 11 CS Ch. 11 Societal Impact.
  - **Removed**: Ch. 11 from Q17 (it has no TCP/IP layer model) and Ch. 10 from Q19 (it does not cover browsers or search engines).
- **Special Topics**: I opened pp. 60, 62, 63, 64, 68 and 88–92. All the facts cited from them are confirmed.

## Corrected
- **Q3**: The stem had a hint ("for co-designing TCP/IP"). It now uses the exam form "Who among the following is regarded as the 'Father of the Internet'?" in both languages.
- **Q4**: Dead ERNET ref removed.
- **Q2, Q11, Q12, Q14, Q20**: CERN or Web Foundation URLs replaced.
- **Q17, Q19**: Wrong NCERT refs removed.
- **Q18**: The Assertion said "live video streaming". Much live streaming runs over HTTP/TCP, so the Assertion now says "real-time applications such as VoIP calls and online gaming".
- **Q19**: The Opera note gave a disputable "1995" release year. It now reads "originally developed in Norway".
- **Q23**: Stem reframed as "Which one of the following devices …?"
- **Q25**: Stem changed to "is/are correct" (Hindi "कौन-सा/से सही है/हैं").
- **Q29**: Refs fixed (see above).
- **Q36**: The correct option was much longer than the others (a length hint). It was shortened.
- **Q37**:
  - Statement 3 ("under Home Ministry") contradicted statement 1 and made the question trivial. It is replaced with "established under the DPDP Act, 2023" (false).
  - The unverified "operational since 2004" and "6-hour reporting" claims were removed. The second was replaced with the 24x7 help-desk fact (CERT-In RFC 2350 profile).
  - Refs replaced.
- **Q38**: The IndiaCode ref was replaced with the PRS copy of the IT Act. Section 66A appears only as a fact noting that it was struck down in *Shreya Singhal v. Union of India* (2015). It is not presented as current law.

## Deleted
None.

## Check of 12 November 2026 (single-question rework)

Checked 24 questions (006 008 009 011 012 013 014 016 017 018 020 022 023 024 025 027 028 033 034 035 037 038 039 040); all answer keys confirmed.

Corrected:
- ict-internet-012: path started with 'Computer & ICT'; aligned to 'ICT' like the rest of the section (EN and HI).

Replaced: none. Note: the PIB CERT-In PDF cited in 037 could not be read as text; the fact is also supported by the IT Act reference.

## Check of 13 November 2026 (10 new questions on past-paper topics, 041–050)

Checked: 041–050 (10). Overlap check against 001–040 done.

Corrected:
- 042, 049: facts listed web browsers (gives away 019); reworded.
- 043: explanation, note B and facts said which part of the address is the user name and which the domain (answer of 031); reworded to the format rules only.
- 046: notes B and C defined cookies (answer of 021) and the firewall (answer of 035); reworded.
- 020 (old): explanation named Google Chrome as a browser (answer of 049); reworded.
- 040 (old): explanation defined spam (answer of 044); reworded.

Replaced (same id, level and path stem):
- 045 (IMAP keeps mail on the server): stated in 016's explanation and note D. Now: co-founder of Hotmail (Sabeer Bhatia, 1996).
- 050 (purpose of CC): duplicated 030 (BCC) and its notes gave 030 away. Now: standard that lets e-mail carry attachments (MIME).

Not verified: nothing outstanding.

## Check of 13 November 2026 (60 more questions for the quiz)

Checked: 051–058 (8). Overlap check against the whole bank (data/*.json) done. Facts of 055 (HTTP 403/404/503), 056 (ICANN, 1998, Los Angeles; W3C 1994) and 057 confirmed.

Corrected:
- 058: option C 'Digital divide' and its note defined the digital divide, the answer of ict-applications-003. Option C is now 'Digital wallet' (EN and HI).

Replaced (same id, level, path and answer letter):
- 051 (Bluetooth links a phone and headset): stated in the explanation of 028. Now: origin of the name Bluetooth (King Harald Bluetooth; name suggested by Jim Kardach of Intel in 1997). Source: Bluetooth SIG, 'bluetooth-origin' page.
- 052 (5G launched 1 October 2022): the same question as sci-tech-007. Now: full form of LTE (Long-Term Evolution); India's first 4G service Airtel, Kolkata, April 2012. Source: Airtel press release of 10 April 2012; 3GPP.
- 053 (MAC address, 48 bits): stated in the facts of 026. Now: loopback address 127.0.0.1. Source: RFC 1122, RFC 4291.
- 054 (blog): defined in a note of edtech-040. Now: vlog (video blog).

Facts I could not confirm online: none.
