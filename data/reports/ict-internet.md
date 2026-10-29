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
