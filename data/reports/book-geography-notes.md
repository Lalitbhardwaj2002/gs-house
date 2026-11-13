# Geography notes (gc-geo-01 to gc-geo-11): fact check of 13 November 2026

Method: every statement in the eleven chapters was read in both the English and the Hindi part. Stable textbook facts were checked against NCERT geography usage and the keyed answers in the geo-*.json question files. Changeable facts were checked by web search, using official or primary sources where they could be reached: ORGI, Census of India, IBM, MNRE, FSI, PCA and NASA. Where only secondary reports of official data were available, the log says so. Every correction was made in both language parts, and the structure of each file was kept as it was. tools/check_book.py reports 0 problems. All eleven files were found with CRLF line ends, including the four that were not edited, and they were left that way.

## Corrections

### gc-geo-05
| Was | Now | Source |
| --- | --- | --- |
| Alluvial soil: "rich in potash, poor in nitrogen" | "rich in potash, poor in phosphorus" (Hindi: फॉस्फोरस की कमी) | NCERT Class 11, *India: Physical Environment*, ch. 6 (https://ncert.nic.in/textbook.php?kegy2=6-7); agrees with question geo-soil-forest-007 |
| Hindi only: "की टेनेसी घाटी प्राधिकरण के नमूने पर बनी" | "के टेनेसी घाटी प्राधिकरण के नमूने पर बना" (gender agreement) | Hindi grammar |

### gc-geo-06
| Was | Now | Source |
| --- | --- | --- |
| Hindi only: Pavagada written "पावागढ़" (that is Pavagadh hill in Gujarat) | "पावगडा" | Pavagada Solar Park, Tumakuru district, Karnataka |

### gc-geo-07
| Was | Now | Source |
| --- | --- | --- |
| Rice: leading State "West Bengal and Uttar Pradesh" | "Uttar Pradesh (2024–25)"; remember: "West Bengal led for years" | DA&FW 2024-25 estimates as reported by secondary sites: UP about 20.8 Mt, Telangana about 17.5 Mt, West Bengal about 16.0 Mt (https://ricenewstoday.com/uttar-pradesh-to-odisha-top-5-rice-producing-states-in-india-2025/, https://mapsforupsc.com/largest-rice-producing-states-in-india/). The official state table was not reached; see "Not verified". |
| Cotton: "Gujarat and Maharashtra" | "Maharashtra and Gujarat" | CAI, July 2025 estimate for 2024-25: Maharashtra 90, Gujarat 77.5 lakh bales (https://www.alchempro.com/news/cotton-news/cai-revises-india-s-24-25-cotton-production-estimate-to-311-4-l-bales-303921-newsdetails.htm) |
| Soybean: "Madhya Pradesh"; "An oilseed and a pulse" | "Madhya Pradesh and Maharashtra"; "An oilseed; MP is the 'Soya State'" | Government 2024-25 advance estimates put Maharashtra first, while SOPA puts MP first (https://informistmedia.com/CommodityWire/20854/Seasonal-Production-SOPA-pegs-kharif-soybean-output-6-37-up-on-year-at-12-6-mln-tn-on-high-yield). In India soybean is counted as an oilseed, not a pulse. |

### gc-geo-08
| Was | Now | Source |
| --- | --- | --- |
| "The next one counts the people in February 2027; it is the first digital census and will also record caste." | Houselisting April–September 2026; population count in February 2027; reference date 1 March 2027 (1 October 2026 in Ladakh and snow-bound areas); first digital census; records caste | Gazette notification of 16 June 2025 (https://www.deccanherald.com/india/centre-issues-notification-for-16th-census-3587712); houselisting notification of January 2026 (https://www.business-standard.com/india-news/census-2027-centre-notifies-first-phase-house-listing-april-1-126010701331_1.html) |
| "India's fertility rate has fallen to about 2.0" | "India's total fertility rate is 1.9 (Sample Registration System, 2024)" | ORGI, SRS Statistical Report 2024, released May 2026 (https://visionias.in/current-affairs/news-today/2026-05-22/society/sample-registration-system-srs-statistical-report-2024-released) |

### gc-geo-09
| Was | Now | Source |
| --- | --- | --- |
| Neptune "Farthest and coldest"; Uranus "Lies on its side" | Uranus "Lies on its side; coldest atmosphere"; Neptune "Farthest from the Sun; fiercest winds" | NASA, Uranus facts: Uranus has the lowest atmospheric temperature recorded on any planet, about 49 K (https://science.nasa.gov/uranus/facts/) |

### gc-geo-10
| Was | Now | Source |
| --- | --- | --- |
| Hindi only: "जहाँ गर्म और ठंडी धारा मिलती हैं" | "धाराएँ मिलती हैं" (number agreement) | Hindi grammar |

### gc-geo-11
| Was | Now | Source |
| --- | --- | --- |
| Trick: "Suez cuts the road ..." (the Hindi said "shortens") | "Suez shortens the route ...; Panama shortens the route ..." | Brings the English into line with the Hindi |

gc-geo-01, 02, 03 and 04 needed no correction.

## Verified and left unchanged
- gc-geo-01: coastline about 11,099 km (11,098.81 km, re-measured 2023-24; also used in geo-physio-055). Westernmost point Guhar Moti, easternmost Kibithu, northernmost Indira Col. Longest border Bangladesh, shortest Afghanistan. The States on each neighbour's border are correct. Uttar Pradesh touches 8 States (Uttarakhand, Himachal Pradesh, Haryana, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar) and Delhi. Land frontier "about 15,200 km" kept as the NCERT figure; MHA gives 15,106.7 km.
- gc-geo-03: India's position is still that the Indus Waters Treaty is in abeyance (MEA, March and June 2026: https://www.newsonair.gov.in/india-says-indus-waters-treaty-to-remain-in-abeyance-until-pakistan-ends-support-to-terrorism). Pakistan disputes this, and a Court of Arbitration award reported for 31 August 2026 says the treaty remains in force; India rejects that court. The note's wording states India's position and was kept. Kunchikal as highest waterfall (standard exam key), Ganga 2,525 km and Godavari 1,465 km were also kept.
- gc-geo-04: IMD normal dates of 1 June (Kerala), about 11 June (Mumbai) and 8 July (whole country), from the 2020 revision of normal onset and withdrawal dates. The WMO/ESCAP panel has 13 countries.
- gc-geo-05: ISFR 2023 (released December 2024) is still the latest; no ISFR 2025 has been released (https://www.business-standard.com/india-news/india-forest-cover-increase-dense-moderate-report-environment-125092600616_1.html). Forest and tree cover is 25.17 per cent, Madhya Pradesh has the largest forest area and West Bengal the most mangroves, all matching questions geo-soil-forest-004 and 010. Tehri (about 260 m) is the highest dam (geo-rivers-050). Hirakud is on the Mahanadi in Odisha.
- gc-geo-06: Madhya Pradesh leads in manganese (IBM yearbooks: https://ibm.gov.in/writereaddata/files/17125770456613da1576db0Manganese_Ore_2022.pdf). Wind: Gujarat (about 16–17 GW) then Tamil Nadu (about 12.3 GW), MNRE data for June and September 2026 (https://indianmasterminds.com/news/government/india-installed-wind-power-capacity-57443-mw-june-2026-218824/). Non-fossil sources passed 50 per cent of installed capacity in June 2025, while coal still gives most generation. ISA headquarters Gurugram. Targets of 500 GW non-fossil capacity by 2030 and net zero by 2070. The list of nuclear stations and their States is correct.
- gc-geo-07: Konkan Railway "Roha to Mangaluru" (strictly Thokur, near Mangaluru) was kept to match question geo-agri-transport-013. Chenab bridge, JNPT, Kamarajar, Visakhapatnam and Deendayal facts were kept. Wheat and sugarcane are UP, groundnut Gujarat, tea Assam, coffee Karnataka, rubber Kerala. First cotton mill Bombay 1854; first jute mill Rishra 1855.
- gc-geo-08: Census 2011 figures; 121.08 crore matches question geo-population-008. Bhil is the largest tribe; Madhya Pradesh has the largest ST population and Mizoram the highest share among States.
- gc-geo-09: Saturn has the most known moons (293 as of mid-2026; Jupiter 115; NASA APOD, 11 August 2026: https://apod.nasa.gov/apod/ap260811.html).
- gc-geo-11: all records, straits, canal years (Suez 1869, Panama 1914, Kiel 1895), grasslands and nicknames were checked and are correct.

## Not verified
- Rice 2024-25 State ranking: only secondary reports of the DA&FW estimates were reached, not the official state-wise table, so the ranking can change with the final figures.
- Mica (Andhra Pradesh), copper (Madhya Pradesh), gold (Karnataka) and zinc–lead (Rajasthan) as leading States: these are standard keys and were not checked against the latest IBM state table. "Thorium | Kerala" was kept because it is the standard exam key and agrees with geo-resources-015, but by IBM data Andhra Pradesh holds the largest monazite resources.
- The Court of Arbitration award of 31 August 2026 is known only from press reports.

## Conflicts with questions
None found.
