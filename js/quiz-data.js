// ── Quiz Question Bank ────────────────────────────────────────
// 200+ questions across 10 categories

const QUIZ_CATEGORIES = [
  { id:'tpc', label:'Texas Penal Code', icon:'⚖️', color:'badge-gold', count:0 },
  { id:'ccp', label:'Code of Criminal Procedure', icon:'📜', color:'badge-blue', count:0 },
  { id:'uof', label:'Use of Force', icon:'🛡️', color:'badge-red', count:0 },
  { id:'traffic', label:'Texas Traffic Laws', icon:'🚗', color:'badge-green', count:0 },
  { id:'4th', label:'Search & Seizure', icon:'🔍', color:'badge-purple', count:0 },
  { id:'ethics', label:'Ethics & Conduct', icon:'⭐', color:'badge-amber', count:0 },
  { id:'tcole_q', label:'TCOLE Standards', icon:'📋', color:'badge-blue', count:0 },
  { id:'domestic', label:'Domestic Violence', icon:'🏠', color:'badge-red', count:0 },
  { id:'weapons', label:'Weapons Laws', icon:'🔫', color:'badge-purple', count:0 },
  { id:'general', label:'General Knowledge', icon:'🎓', color:'badge-green', count:0 },
];

const ALL_QUESTIONS = [
  // ── TEXAS PENAL CODE ─────────────────────────────────────────
  { id:1, cat:'tpc', difficulty:'Basic',
    question:'Under the Texas Penal Code, what are the four "mental states" (culpable mental states) that define criminal responsibility?',
    choices:['Intentional, Knowing, Reckless, Criminal Negligence','Deliberate, Premeditated, Reckless, Accidental','Willful, Knowing, Careless, Negligent','Intent, Motive, Opportunity, Means'],
    correct:0, law:'TPC § 6.02',
    explain:'The four culpable mental states under TPC § 6.02 are: INTENTIONAL (conscious objective to cause result), KNOWING (aware that conduct is reasonably certain to cause result), RECKLESS (consciously disregards a substantial and unjustifiable risk), and CRIMINAL NEGLIGENCE (should be aware of a substantial risk but is not).',
    layman:'Think of it this way: intentional = "I meant to do it." Knowing = "I knew this would happen." Reckless = "I knew it was risky but did it anyway." Criminal negligence = "I should have known better but was oblivious."' },

  { id:2, cat:'tpc', difficulty:'Basic',
    question:'What is the classification of a Class A Misdemeanor under the Texas Penal Code?',
    choices:['Fine up to $500, no jail time','Confinement up to 180 days, fine up to $2,000','Confinement up to 1 year in county jail, fine up to $4,000','State jail felony — up to 2 years in state jail'],
    correct:2, law:'TPC § 12.21',
    explain:'Class A Misdemeanor (TPC § 12.21): Confinement in county jail for up to 1 YEAR, or a fine not to exceed $4,000, or both. Examples: assault causing bodily injury (first offense), DWI (first offense), theft of $750–$2,499.',
    layman:'Class A misdemeanors are the most serious misdemeanors in Texas. A year in county jail and up to $4,000 fine is real consequences. Compare to Class B (up to 180 days / $2,000) and Class C (fine only, up to $500).' },

  { id:3, cat:'tpc', difficulty:'Intermediate',
    question:'Under TPC § 22.01, which of the following constitutes "Assault" in Texas?',
    choices:['Intentionally causing bodily injury to another person','Threatening someone without physical contact','Offensive physical contact without consent','All of the above are forms of assault under TPC § 22.01'],
    correct:3, law:'TPC § 22.01(a)',
    explain:'TPC § 22.01(a) defines three types of assault: (1) INTENTIONALLY/KNOWINGLY/RECKLESSLY causing BODILY INJURY; (2) INTENTIONALLY/KNOWINGLY THREATENING another with IMMINENT BODILY INJURY; (3) INTENTIONALLY/KNOWINGLY causing PHYSICAL CONTACT that is provocative or offensive. All three are assault.',
    layman:'You don\'t have to touch someone to commit assault in Texas. Threatening someone with words or gestures ("I\'m going to kill you" with a raised fist) can be assault. Touching someone in a sexual/offensive way without consent is assault. The classic punch counts too.' },

  { id:4, cat:'tpc', difficulty:'Intermediate',
    question:'A suspect causes "serious bodily injury" to a victim using a deadly weapon. What charge is appropriate?',
    choices:['Assault (Class A Misdemeanor)','Aggravated Assault (Second-Degree Felony)','Aggravated Assault (First-Degree Felony if against a public servant)','Both B and C may apply depending on the victim'],
    correct:3, law:'TPC § 22.02',
    explain:'Aggravated Assault (TPC § 22.02) is a SECOND-DEGREE FELONY when a person causes serious bodily injury or uses or exhibits a deadly weapon. However, it becomes a FIRST-DEGREE FELONY when committed against a public servant (peace officer, judge, etc.) in the lawful discharge of their duties, or by a public servant misusing their authority.',
    layman:'Serious injury OR a weapon = Aggravated Assault (2nd degree felony = 2–20 years). If you stab a police officer while they\'re doing their job = 1st degree felony = 5–99 years. The law takes violence against public servants much more seriously.' },

  { id:5, cat:'tpc', difficulty:'Intermediate',
    question:'What is the Texas Penal Code definition of "Deadly Weapon"?',
    choices:['Any firearm','Any knife with a blade over 5.5 inches','A firearm, or anything designed, made, or adapted for the purpose of inflicting death or serious bodily injury, or in the manner of its use or intended use is capable of causing death or serious bodily injury','Any item that could potentially cause harm'],
    correct:2, law:'TPC § 1.07(a)(17)',
    explain:'Under TPC § 1.07(a)(17), "deadly weapon" means: (A) a FIREARM or anything designed, made, or adapted for purpose of inflicting death or serious bodily injury; OR (B) anything that IN THE MANNER OF ITS USE OR INTENDED USE is capable of causing death or serious bodily injury. A car, baseball bat, or hands can be deadly weapons depending on how used.',
    layman:'Almost anything can be a deadly weapon depending on how it\'s used. A car? Yes. Bare hands? Yes, if used to strangle someone. The law looks at the capability AND the way the object was used, not just the type of object.' },

  { id:6, cat:'tpc', difficulty:'Advanced',
    question:'What distinguishes Murder (TPC § 19.02) from Capital Murder (TPC § 19.03)?',
    choices:['Capital Murder only applies if a firearm was used','Capital Murder involves specific aggravating circumstances such as killing a peace officer, killing during certain felonies, or killing multiple persons','Capital Murder requires premeditation; Murder does not','Capital Murder is when the victim is under 18'],
    correct:1, law:'TPC § 19.02–19.03',
    explain:'Murder (TPC § 19.02) = intentionally/knowingly causing death, or causing death in the course of a dangerous felony. Capital Murder (TPC § 19.03) adds specific aggravators: killing a PEACE OFFICER or FIREMAN on duty; killing during kidnapping/burglary/robbery/aggravated sexual assault/arson; killing for remuneration (hired hit); killing more than one person; killing a person under 10; killing a correctional employee.',
    layman:'Murder = killing someone intentionally. Capital Murder = murder PLUS a special circumstance that makes it worse. Only Capital Murder can result in the death penalty in Texas. Examples: killing a cop, killing multiple people, or killing during a robbery.' },

  { id:7, cat:'tpc', difficulty:'Basic',
    question:'Under TPC § 49.04, a person commits DWI (Driving While Intoxicated) if they operate a motor vehicle in a public place while:',
    choices:['Their BAC is at least 0.08%','They have lost their normal use of mental or physical faculties by reason of alcohol or drugs','Their BAC is at least 0.08% OR they have lost normal use of mental or physical faculties','Only if they are visibly impaired'],
    correct:2, law:'TPC § 49.04, § 49.01',
    explain:'TPC § 49.01 defines "intoxicated" as EITHER: (A) not having normal use of mental or physical faculties by reason of alcohol, controlled substance, drug, or combination — OR — (B) having a BAC of 0.08% or more. A person with a BAC of only 0.07% CAN still be convicted of DWI if their faculties are impaired.',
    layman:'DWI is not just about the number. Even if your blood alcohol is under 0.08, if you\'re clearly impaired (stumbling, slurred speech, can\'t follow commands), you can still be arrested and convicted for DWI in Texas. Two separate ways to be "intoxicated."' },

  { id:8, cat:'tpc', difficulty:'Intermediate',
    question:'Under TPC § 29.02, what is required to elevate a Theft to a Robbery?',
    choices:['The theft must exceed $1,500 in value','While committing theft, intentionally/knowingly/recklessly causes bodily injury, or intentionally/knowingly threatens or places another in fear of imminent injury','The offender must be armed with a weapon','The offender must have a prior criminal record'],
    correct:1, law:'TPC § 29.02',
    explain:'Robbery (TPC § 29.02) occurs when a person, in the course of committing theft AND with intent to obtain or maintain control of property: (1) intentionally/knowingly/recklessly causes BODILY INJURY to another; OR (2) intentionally/knowingly THREATENS or PLACES another in fear of imminent bodily injury or death. No weapon required for simple Robbery.',
    layman:'Theft = taking property. Robbery = taking property + violence or threats. If you push someone to grab their phone, that\'s robbery, even if no weapon was used. Aggravated Robbery (§ 29.03) requires a deadly weapon or causing serious bodily injury.' },

  { id:9, cat:'tpc', difficulty:'Intermediate',
    question:'What offense is committed when a person knowingly enters a habitation without the effective consent of the owner with intent to commit a felony, theft, or assault?',
    choices:['Criminal Trespass (Class B Misdemeanor)','Burglary of a Habitation (First-Degree Felony)','Breaking and Entering (Second-Degree Felony)','Aggravated Trespass (Third-Degree Felony)'],
    correct:1, law:'TPC § 30.02(c)(2)',
    explain:'Burglary of a Habitation (TPC § 30.02) is a FIRST-DEGREE FELONY when a person enters a habitation (a place adapted for use as a residence) without consent with intent to commit a felony, theft, or assault; or enters and actually commits/attempts those acts. Compare: Burglary of a Building (not habitation) = Second-Degree Felony.',
    layman:'Breaking into someone\'s home with intent to steal or harm = 1st degree felony in Texas (5–99 years or life). Breaking into a business = 2nd degree felony. The law protects homes more severely because people live there and have an expectation of safety.' },

  { id:10, cat:'tpc', difficulty:'Intermediate',
    question:'TPC § 38.04 makes it a crime to evade arrest or detention. When does Evading Arrest become a Felony?',
    choices:['Evading arrest is always a misdemeanor','It becomes a State Jail Felony if the person has a prior conviction for evading arrest, or uses a vehicle during the flight','It becomes a First-Degree Felony if any person is injured','It becomes a Felony only if the person was driving over 100 mph'],
    correct:1, law:'TPC § 38.04',
    explain:'Evading Arrest (TPC § 38.04): CLASSES: Class A Misdemeanor (basic). State Jail Felony if: (A) prior conviction for evading; OR (B) uses a vehicle to flee. Third-Degree Felony if officer or another person suffers serious bodily injury. Second-Degree Felony if officer or another person dies.',
    layman:'Running on foot = Class A misdemeanor. Jumping in your car and leading police on a chase = State Jail Felony. If someone gets seriously hurt during the chase = 3rd degree felony. If someone dies = 2nd degree felony. The stakes go up fast when you decide to run.' },

  // ── CODE OF CRIMINAL PROCEDURE ──────────────────────────────
  { id:20, cat:'ccp', difficulty:'Basic',
    question:'Under CCP Art. 14.01(b), when may a peace officer arrest a person without a warrant?',
    choices:['Only when the officer personally witnesses the crime','When the offense is a felony and the officer has probable cause','When a public offense is committed in the officer\'s presence or view, or when the officer has probable cause for a felony','Officers in Texas always need a warrant to arrest'],
    correct:2, law:'CCP Art. 14.01(b)',
    explain:'CCP Art. 14.01(b): A peace officer may arrest an offender WITHOUT A WARRANT for any offense committed in the officer\'s presence or view. For felonies not committed in view, the officer needs probable cause. Art. 14.03 gives additional authority for suspicious circumstances.',
    layman:'If you see it happen = you can arrest on the spot. If you didn\'t see it happen = you generally need a warrant, UNLESS it\'s a felony and you have probable cause, or a few other specific exceptions. Most DV cases fall under the special family violence arrest authority.' },

  { id:21, cat:'ccp', difficulty:'Intermediate',
    question:'Under CCP Art. 15.17, how long does an officer have to take an arrested person before a magistrate?',
    choices:['12 hours','24 hours','48 hours','72 hours'],
    correct:2, law:'CCP Art. 15.17',
    explain:'CCP Art. 15.17 requires that a person arrested (with or without a warrant) must be taken before a magistrate WITHOUT UNNECESSARY DELAY, but in no case later than 48 HOURS after arrest. The magistrate informs the person of the charges, rights, right to counsel, right to remain silent, and sets bail.',
    layman:'After arresting someone, you have 48 hours to get them in front of a judge for their "magistration" — where they\'re formally told what they\'re charged with and their rights. Keeping someone longer without this is a constitutional violation.' },

  { id:22, cat:'ccp', difficulty:'Intermediate',
    question:'Under CCP Art. 38.22, when is an oral statement made by a defendant admissible in a Texas criminal prosecution?',
    choices:['Any statement made to law enforcement is admissible','Only if the statement is in writing and signed by the defendant','An oral statement is admissible if: the defendant received required warnings, knowingly and voluntarily waived rights, AND the statement contains facts or circumstances that were unknown to police and found to be true','Oral statements are never admissible in Texas courts'],
    correct:2, law:'CCP Art. 38.22',
    explain:'CCP Art. 38.22 governs statements. WRITTEN statements require full Miranda-type warnings and waiver. ORAL statements not recorded are generally NOT admissible UNLESS they contain facts not previously known to police that lead to discovery of evidence (the "leads to evidence" exception). Properly recorded statements with complete warnings ARE admissible.',
    layman:'In Texas, it\'s harder than you think to use what a suspect says against them in court. Unless you followed the exact proper warning procedures AND recorded it properly, the statement may be thrown out. This is why body cameras and in-car cameras are so important.' },

  { id:23, cat:'ccp', difficulty:'Advanced',
    question:'What does CCP Art. 18.02 authorize officers to search for and seize?',
    choices:['Only evidence of the specific crime listed in the warrant','Items specifically described in the warrant plus items in plain view during the search','Property acquired through theft; weapons used in commission of a crime; controlled substances; evidence of any offense; contraband','Officers can seize anything found during any lawful search'],
    correct:2, law:'CCP Art. 18.02',
    explain:'CCP Art. 18.02 lists the items that may be searched for and seized with a warrant: (1) property acquired by theft; (2) property used or intended to be used in commission of a crime; (3) weapons used in commission of a crime; (4) persons; (5) controlled substances; (6) obscene material; (7) contraband; (8) evidence of any offense. The warrant must describe with particularity the items sought.',
    layman:'Texas requires warrants to be specific about what you\'re looking for. You can\'t just say "search the house" — you need to say "search for stolen electronics described as X, Y, Z." However, if you\'re lawfully executing a warrant and you see something in plain view that\'s clearly evidence of another crime, you can seize that too.' },

  { id:24, cat:'ccp', difficulty:'Intermediate',
    question:'A suspect invokes their right to counsel during custodial interrogation. What must happen?',
    choices:['Officers may continue questioning if they believe the suspect will eventually confess','All questioning must immediately cease until an attorney is present or the suspect reinitiates contact','Officers may ask one more question to clarify what the suspect wants','Officers may continue questioning after a 30-minute break'],
    correct:1, law:'Miranda v. Arizona; CCP Art. 38.22',
    explain:'Once a suspect unambiguously invokes the right to counsel (Edwards v. Arizona, 1981), ALL interrogation must CEASE IMMEDIATELY. Police may not resume questioning until (1) an attorney is present, or (2) the suspect themselves reinitiates communication. Any statement obtained after invocation is inadmissible.',
    layman:'The words "I want a lawyer" are a magic stop sign. The moment you hear them, questioning stops — period. You can\'t say "just answer this last question." You can\'t wait 30 minutes and try again. Anything said after a valid invocation gets thrown out in court.' },

  // ── USE OF FORCE ──────────────────────────────────────────────
  { id:30, cat:'uof', difficulty:'Intermediate',
    question:'The Supreme Court case Graham v. Connor (1989) established which standard for evaluating police use of force?',
    choices:['The "subjective good faith" standard — if the officer genuinely believed force was needed','The "objective reasonableness" standard — based on what a reasonable officer would do in the same situation','The "minimal force necessary" standard — officers must use the least amount of force possible','The "proportional response" standard — force must exactly match the threat'],
    correct:1, law:'Graham v. Connor, 490 U.S. 386 (1989)',
    explain:'Graham v. Connor established that all claims of excessive force must be analyzed under the OBJECTIVE REASONABLENESS standard of the 4th Amendment. Courts consider: (1) severity of the crime; (2) whether the suspect poses an immediate threat; (3) whether the suspect is actively resisting or fleeing. The officer\'s subjective intent does not matter — would a REASONABLE officer have done the same?',
    layman:'The key question in any use-of-force lawsuit is: what would a REASONABLE officer have done? Not "was the officer scared?" or "did the officer intend to hurt someone?" but "given what any reasonable officer would know in that moment, was this force justified?" The "20/20 hindsight" rule does NOT apply.' },

  { id:31, cat:'uof', difficulty:'Advanced',
    question:'Tennessee v. Garner (1985) restricts the use of deadly force to stop a fleeing felon. When is it permissible?',
    choices:['Whenever a felony suspect is fleeing','Only when the suspect is fleeing a capital crime','When the officer has probable cause to believe the suspect poses a significant threat of death or serious physical injury to the officer or others','Whenever the officer reasonably believes the suspect will re-offend'],
    correct:2, law:'Tennessee v. Garner, 471 U.S. 1 (1985)',
    explain:'Tennessee v. Garner held that deadly force to stop a fleeing felon is only constitutional when: (1) the suspect is fleeing; (2) the officer has PROBABLE CAUSE to believe the suspect has committed a crime involving the infliction or threatened infliction of SERIOUS PHYSICAL HARM; and (3) the warning "Police! Stop or I\'ll shoot!" cannot reasonably be given first. You CANNOT shoot every fleeing felon.',
    layman:'Before 1985, some departments had policies allowing officers to shoot any fleeing felon. The Supreme Court said NO — you can only use deadly force to stop a fleeing person if you have good reason to believe they are dangerous. A person running away from a shoplifting scene = NOT justified. A person running away who just shot someone = different analysis.' },

  { id:32, cat:'uof', difficulty:'Intermediate',
    question:'Under TPC § 9.51(a), a peace officer is justified in using force when:',
    choices:['Any time a suspect is uncooperative','To the degree necessary to make or assist in making an arrest or search, prevent escape, or overcome resistance, IF the arrest is lawful and the officer announces their purpose','Only after verbal commands have failed and a supervisor approves','When officer\'s personal safety is threatened, regardless of whether the arrest is lawful'],
    correct:1, law:'TPC § 9.51(a)',
    explain:'TPC § 9.51(a) justifies peace officer use of force IF: (1) the arrest is lawful; (2) the officer announces purpose of arrest (unless circumstances make this impractical); and (3) force is to the degree the officer reasonably believes necessary to make/assist in the arrest, prevent escape after lawful arrest, or overcome resistance.',
    layman:'You can use force to make a lawful arrest — but the force must fit the situation. You can\'t use force to make an UNLAWFUL arrest. An officer executing an unconstitutional arrest gets no legal protection. Also: you generally have to announce who you are before using force.' },

  { id:33, cat:'uof', difficulty:'Advanced',
    question:'What is the "duty to intervene" for Texas peace officers?',
    choices:['Officers are never required to intervene in another officer\'s use of force','Officers must report all uses of force to a supervisor','An officer who observes another officer using clearly excessive force has a duty to intervene and stop it, and to report the misconduct','Officers must support all force decisions made by fellow officers'],
    correct:2, law:'Texas Occupations Code § 1701.272; TPC § 39.03',
    explain:'Texas Occupations Code § 1701.272 (effective 2021) requires peace officers to intervene to stop or prevent another officer\'s use of excessive force. Officers who fail to intervene may face disciplinary action or criminal liability. This is part of broader police accountability reform. TPC § 39.03 (Official Oppression) also applies.',
    layman:'The "bad apple" excuse doesn\'t fly in Texas anymore. If you SEE another officer beating someone in handcuffs, you are REQUIRED to stop it. Standing by and watching is not an option — it can make you legally liable too. This law was strengthened after high-profile incidents of excessive force.' },

  // ── SEARCH & SEIZURE (4TH AMENDMENT) ─────────────────────────
  { id:40, cat:'4th', difficulty:'Intermediate',
    question:'The "plain view doctrine" allows an officer to seize evidence without a warrant when:',
    choices:['Any time evidence is visible in a public place','The officer is lawfully in the location, the item is in plain view, and the incriminating nature of the item is immediately apparent','The officer can see the item from outside a building and believes it is contraband','Officers need a warrant to seize anything, even if it is in plain view'],
    correct:1, law:'Horton v. California (1990); CCP Art. 18.02',
    explain:'The three requirements of the PLAIN VIEW DOCTRINE: (1) Officer must be LAWFULLY PRESENT at the location; (2) The item must be IN PLAIN VIEW (visible without a search); (3) The incriminating character of the item must be IMMEDIATELY APPARENT (officer must have probable cause to believe it is contraband/evidence). If all three are met, no additional warrant is needed to seize the item.',
    layman:'If you\'re legally in someone\'s house executing a warrant for drugs, and you see a stolen TV right there in the living room, you can seize it without a new warrant. But the officer has to actually be ALLOWED to be there — you can\'t walk into someone\'s home uninvited and then claim "plain view."' },

  { id:41, cat:'4th', difficulty:'Intermediate',
    question:'An officer stops a vehicle for a traffic violation. Can the officer search the passenger compartment without consent?',
    choices:['Yes — any traffic stop automatically allows a search','No — a traffic stop only authorizes the issuance of a citation; a search requires additional justification','Yes, if the officer has reasonable suspicion of any other offense','No — only a warrant authorizes a vehicle search under any circumstances'],
    correct:1, law:'Rodriguez v. United States (2015); Arizona v. Gant (2009)',
    explain:'A traffic stop does NOT automatically authorize a search. However, several exceptions may apply: (1) CONSENT (voluntary); (2) PROBABLE CAUSE to believe vehicle contains contraband (Carroll doctrine); (3) SEARCH INCIDENT TO ARREST of the driver; (4) INVENTORY SEARCH after lawful impound; (5) PLAIN VIEW; (6) EXIGENT CIRCUMSTANCES. Without one of these, no search is permitted.',
    layman:'Being pulled over for speeding does not mean the officer can go through your whole car. You can say no to a consent search. However, if the officer smells marijuana, sees something suspicious, or arrests you, they may gain the right to search under different legal theories. Know your rights — and know when rights legitimately end.' },

  { id:42, cat:'4th', difficulty:'Advanced',
    question:'Under the "automobile exception" (Carroll doctrine), officers may search a vehicle without a warrant if:',
    choices:['The vehicle is on a public road','The officer has reasonable suspicion that contraband may be present','The officer has probable cause to believe the vehicle contains contraband or evidence of a crime','The vehicle has been stopped for more than 10 minutes'],
    correct:2, law:'Carroll v. United States, 267 U.S. 132 (1925)',
    explain:'Carroll v. United States established the AUTOMOBILE EXCEPTION: officers may search a vehicle without a warrant if they have PROBABLE CAUSE to believe it contains contraband or evidence of a crime. The rationale is the inherent mobility of vehicles (the evidence might disappear) and reduced expectation of privacy in vehicles on public roads. PROBABLE CAUSE is required — reasonable suspicion is not enough.',
    layman:'Cars get a different rule than houses. Because a car can drive away, courts allow police to search it immediately if they have PROBABLE CAUSE (a fair probability) that contraband is inside. The smell of marijuana = probable cause in many jurisdictions. Reasonable suspicion alone (like "he seemed nervous") is NOT enough to search a car.' },

  // ── TRAFFIC LAWS ──────────────────────────────────────────────
  { id:50, cat:'traffic', difficulty:'Basic',
    question:'Under the Texas Transportation Code § 545.351, what is the maximum speed limit on a Texas highway unless otherwise posted?',
    choices:['55 mph','65 mph','70 mph','75 mph'],
    correct:2, law:'TTC § 545.351',
    explain:'TTC § 545.351: The prima facie (presumed reasonable) maximum speed on a Texas highway is 70 mph, unless a different limit is posted. Texas also allows up to 85 mph on certain state highways specifically designated for that speed. The key principle is that any speed can be "unreasonable" if conditions warrant slower speeds.',
    layman:'70 mph is the default max on highways — but you must always drive at a REASONABLE and PRUDENT speed for current conditions. Driving 65 mph in a whiteout blizzard could still be "too fast" under the law, even though it\'s under the posted limit.' },

  { id:51, cat:'traffic', difficulty:'Intermediate',
    question:'Under TTC § 544.010, when does a driver have an obligation to stop at a railroad crossing?',
    choices:['Only when a train is visible','When any mechanical or electrical signal warns of an approaching train, when a train is approaching, or when the crossing is blocked by traffic on the other side','Only when there are lights flashing','When a flagman is present'],
    correct:1, law:'TTC § 544.010',
    explain:'TTC § 544.010 requires stopping at railroad crossings when: (1) an electrical or mechanical signal warns of an approaching train; (2) a crossing gate or barrier is lowered or is being lowered; (3) a flagman gives or continues to give a warning signal; (4) a train is APPROACHING from any direction and is within 1,500 feet of the crossing; (5) the train is clearly visible and approaching hazardously.',
    layman:'Do not play chicken with a train. If any signal is warning you — lights, gates, horn — stop before the tracks. The law gives trains the right of way, and any collision with a train is almost always fatal for vehicle occupants.' },

  { id:52, cat:'traffic', difficulty:'Advanced',
    question:'A DWI suspect submits to a breath test and registers 0.079% BAC. Can they still be convicted of DWI under Texas law?',
    choices:['No — 0.079% is below the legal limit and they must be released','Yes — intoxication can be proven by loss of normal faculties even if BAC is below 0.08%','No — without a BAC above 0.08%, there is no offense','Yes, but only if the officer can prove they took additional drugs'],
    correct:1, law:'TPC § 49.01',
    explain:'TPC § 49.01 defines "intoxicated" as EITHER: (A) not having normal use of mental or physical faculties, OR (B) having BAC of 0.08%+. A BAC of 0.079% does not meet prong B, but the person can STILL be convicted if the evidence shows their mental or physical faculties were impaired (slurred speech, failed SFSTs, erratic driving). TWO WAYS to be intoxicated.',
    layman:'0.08 is not a magic number that makes you automatically guilty OR innocent. It\'s just ONE way to prove DWI. A person with a 0.05% BAC who is completely hammered can still be convicted. A person who is clearly impaired but refuses all tests can still be convicted based on observable behavior.' },

  // ── ETHICS & CONDUCT ──────────────────────────────────────────
  { id:60, cat:'ethics', difficulty:'Intermediate',
    question:'An officer discovers a coworker has been falsifying arrest reports. What is the officer\'s legal and ethical obligation?',
    choices:['Do nothing — loyalty to fellow officers is paramount','Confront the coworker privately and give them a chance to correct it','Report the misconduct to a supervisor or internal affairs','Wait to see if anyone else notices before doing anything'],
    correct:2, law:'TPC § 37.10; Texas Occupations Code § 1701.272; Law Enforcement Code of Ethics',
    explain:'The Law Enforcement Code of Ethics requires officers to keep their private life unsullied, and not permit personal feelings or friendship to influence professional conduct. TPC § 37.10 makes falsifying government documents a crime. Texas Occupations Code § 1701.272 requires reporting of certain misconduct. Officers have a DUTY to report, not a choice.',
    layman:'The "blue wall of silence" is not only unethical — it\'s potentially illegal. When you look away while a coworker commits crimes under color of law, you may become complicit. The oath you took was to the law and the constitution, not to fellow officers who break the law.' },

  { id:61, cat:'ethics', difficulty:'Advanced',
    question:'Under TPC § 39.03, a peace officer commits "Official Oppression" when:',
    choices:['They use excessive force while making a legal arrest','They intentionally subject a person to mistreatment, arrest, detention, search, seizure, or dispossession knowing their conduct is unlawful','They fail to make an arrest they are required to make','They issue false citations'],
    correct:1, law:'TPC § 39.03',
    explain:'Official Oppression (TPC § 39.03): A public servant acting under color of his office or employment commits an offense if he intentionally subjects another person to mistreatment, to arrest, detention, search, seizure, dispossession, assessment, or lien that he knows is unlawful. It\'s a Class A Misdemeanor — more serious offenses may elevate the charge.',
    layman:'Using your badge to do something you KNOW is wrong is a crime. Planting evidence = crime. Arresting someone when you know they\'re innocent = crime. The law doesn\'t just hold civilians accountable — officers who abuse their power face criminal charges.' },

  // ── DOMESTIC VIOLENCE ─────────────────────────────────────────
  { id:70, cat:'domestic', difficulty:'Intermediate',
    question:'Under Texas Family Code § 71.004, "family violence" includes which of the following?',
    choices:['Only violence between spouses','Violence between household members who are currently dating only','An act by a family or household member against another that is intended to result in physical harm, bodily injury, assault, or sexual assault, or is a threat that reasonably places the member in fear of imminent physical harm','Only acts resulting in visible physical injury'],
    correct:2, law:'Texas Family Code § 71.004',
    explain:'Family Violence (Texas FC § 71.004) is defined broadly to include: (A) an act by a family or household member against another that is intended to result in physical harm, bodily injury, assault, or sexual assault, or is a THREAT that reasonably places the member in FEAR of imminent physical harm, bodily injury, or assault — EXCLUDING defensive measures to protect oneself; OR (B) abuse by a family member of a child.',
    layman:'Family violence doesn\'t require bruises. Threatening your partner in a way that makes them genuinely afraid = family violence. Grabbing and shoving = family violence. The law covers dating partners, ex-spouses, co-parents, and anyone who lives in the same household.' },

  { id:71, cat:'domestic', difficulty:'Advanced',
    question:'What does TPC § 22.01(b)(2) add to a simple assault charge when strangulation is involved in a domestic violence context?',
    choices:['No enhancement — it is still a Class A Misdemeanor','It enhances the offense from a Class A Misdemeanor to a Third-Degree Felony','It enhances the offense to a Second-Degree Felony if the victim is a public servant','It only becomes a felony if the victim lost consciousness'],
    correct:1, law:'TPC § 22.01(b)(2)',
    explain:'TPC § 22.01(b)(2): Assault is a THIRD-DEGREE FELONY if the offense is committed against a person whose relationship to the offender is described under Family Code § 71.0021 (dating) or § 71.003 (family/household), AND the offense is committed by INTENTIONALLY, KNOWINGLY, OR RECKLESSLY IMPEDING THE NORMAL BREATHING OR CIRCULATION OF THE BLOOD of the person by applying pressure to the person\'s throat or neck or by blocking the person\'s nose or mouth.',
    layman:'Choking your partner is a FELONY in Texas, not just a misdemeanor assault. This is because strangulation is one of the strongest predictors of future homicide in domestic violence cases. Even if the victim says it was minor or brief — if you impeded their breathing, it\'s a felony.' },

  // ── WEAPONS LAWS ──────────────────────────────────────────────
  { id:80, cat:'weapons', difficulty:'Intermediate',
    question:'After September 1, 2021, what does Texas HB 1927 (Constitutional Carry) allow regarding handgun carrying in Texas?',
    choices:['Anyone may carry any weapon, anywhere, without any license or restriction','Texans 21 or older who are not prohibited by law may carry a handgun (openly or concealed) without a License to Carry (LTC)','All age restrictions for carrying firearms are removed','Constitutional Carry allows carrying any firearm, including long guns, without a license'],
    correct:1, law:'HB 1927 (2021); TPC § 46.02',
    explain:'HB 1927 (effective Sep. 1, 2021): A person 21+ who is not otherwise prohibited (by felony conviction, family violence conviction, etc.) may carry a handgun inside or outside a vehicle — openly or concealed — WITHOUT a License to Carry. However: LOCATIONS still matter (licensed premises, courts, polling places, schools, etc. are still prohibited). The LTC program still exists and still has value for reciprocity in other states.',
    layman:'Since September 2021, most law-abiding Texans 21+ can carry a handgun without a permit. BUT: they still can\'t carry in many places (bars, schools, courts, government buildings with proper signs). Constitutional carry doesn\'t mean "carry anywhere." And prohibited persons (felons, family violence convictions) CANNOT carry regardless.' },

  { id:81, cat:'weapons', difficulty:'Advanced',
    question:'Under TPC § 46.04, who is prohibited from possessing a firearm, and for how long?',
    choices:['Only persons currently on probation or parole','Any person convicted of a felony — for life','A person convicted of a felony is prohibited for 5 years after release from supervision/confinement, and after that may possess only at home; certain misdemeanor convictions also apply','Only violent felons are prohibited from possessing firearms'],
    correct:2, law:'TPC § 46.04',
    explain:'TPC § 46.04: A person who has been convicted of a felony commits an offense if they possess a firearm: (A) in the 5 years AFTER their release from supervision (parole/probation/confinement), ANYWHERE; (B) after 5 years, only on the premises where they LIVE is lawful. Additionally: persons convicted of Class A misdemeanor family violence assault are also prohibited from possessing firearms for 5 years.',
    layman:'Under Texas law, a felon is never fully free to carry a gun in public like others. For the first 5 years after getting off supervision = can\'t have a gun at all. After 5 years = can only have a gun in their OWN home. Note: Federal law is stricter — federal law prohibits felons from possessing firearms for LIFE.' },

  // ── TCOLE STANDARDS ───────────────────────────────────────────
  { id:90, cat:'tcole_q', difficulty:'Basic',
    question:'How many training hours are required for the TCOLE Basic Peace Officer Course?',
    choices:['400 hours','500 hours','618 hours','720 hours'],
    correct:2, law:'TCOLE Rule 217.11',
    explain:'The TCOLE Basic Peace Officer Course requires a minimum of 618 hours of training. This covers all required categories including criminal law, constitutional law, use of force, patrol procedures, firearms, emergency vehicle operations, and all other mandated topics. After completing the course, candidates must pass the TCOLE licensing exam.',
    layman:'You need at least 618 hours of police academy training before you can get your Texas peace officer license. That\'s roughly 4+ months of full-time school, not counting physical fitness requirements and additional testing.' },

  { id:91, cat:'tcole_q', difficulty:'Intermediate',
    question:'How often must licensed Texas peace officers complete continuing education to maintain their license?',
    choices:['20 hours every year','40 hours every year','40 hours every 2 years (biennial)','80 hours every 4 years'],
    correct:2, law:'TCOLE Rule 217.11(b)',
    explain:'Licensed peace officers in Texas must complete 40 hours of continuing education every 2 years (biennial period). Certain training is MANDATORY within those 40 hours, including: mental health/crisis intervention, racial profiling, human trafficking, and firearms qualification. Failure to complete results in license suspension.',
    layman:'Even after you\'re a licensed officer, the learning doesn\'t stop. Texas requires 40 hours of continuing education every 2 years — that\'s about 2.5 days of training annually. Some of those hours are required topics you HAVE to cover, regardless of what you choose.' },

  // ── GENERAL KNOWLEDGE ─────────────────────────────────────────
  { id:100, cat:'general', difficulty:'Basic',
    question:'What does "probable cause" mean in the context of Texas law enforcement?',
    choices:['A hunch or gut feeling that something is wrong','A reasonable belief, based on specific facts and circumstances, that a crime has been or is being committed','Absolute certainty that a crime occurred','Reasonable suspicion that a person might commit a crime'],
    correct:1, law:'Illinois v. Gates (1983); Texas Const. Art. I § 9',
    explain:'Probable cause is a REASONABLE BELIEF, based on specific and articulable facts, that (1) a crime has been or is being committed, AND (2) the person or location involved is connected to that crime. It\'s more than reasonable suspicion, but less than certainty. Illinois v. Gates established the "totality of circumstances" test.',
    layman:'Think of probable cause like this: if 12 reasonable people heard all the facts you had, would MOST of them agree there\'s a good reason to think a crime happened? It\'s not certainty — cops aren\'t required to be 100% right. But it must be more than just a feeling or stereotype.' },

  { id:101, cat:'general', difficulty:'Intermediate',
    question:'What are the "Miranda warnings" that must be given to a suspect in custody before interrogation?',
    choices:['Only the right to remain silent and the right to an attorney','Right to remain silent; anything said can be used in court; right to an attorney; if you cannot afford an attorney, one will be appointed','Right to remain silent; right to a phone call; right to bail','You only need to read rights before questioning, not before arrest'],
    correct:1, law:'Miranda v. Arizona, 384 U.S. 436 (1966); CCP Art. 38.22',
    explain:'Miranda v. Arizona (1966) requires that BEFORE custodial interrogation, suspects must be warned: (1) You have the RIGHT TO REMAIN SILENT; (2) ANYTHING YOU SAY CAN AND WILL BE USED AGAINST YOU in court; (3) You have the RIGHT TO AN ATTORNEY; (4) If you cannot afford an attorney, ONE WILL BE APPOINTED for you. These warnings must be given before questioning — not necessarily at the moment of arrest.',
    layman:'Miranda rights kick in when two things happen together: (1) you\'re in CUSTODY (not free to leave), AND (2) you\'re being INTERROGATED (asked questions meant to get evidence). You don\'t need to read Miranda rights at the moment of arrest if you\'re not questioning them yet. But before you start asking questions at the station — the warnings must be given.' },

  { id:102, cat:'general', difficulty:'Advanced',
    question:'What is the "Exclusionary Rule" and what are the main exceptions to it?',
    choices:['Evidence obtained illegally is always admissible if it is real, physical evidence','The Exclusionary Rule requires all illegal evidence be excluded; there are no exceptions in Texas','Evidence obtained in violation of the 4th Amendment is generally inadmissible, but exceptions include good faith, inevitable discovery, and independent source','The Exclusionary Rule only applies to federal cases, not Texas state courts'],
    correct:2, law:'Mapp v. Ohio (1961); United States v. Leon (1984)',
    explain:'The EXCLUSIONARY RULE (Mapp v. Ohio) holds that evidence obtained in violation of the 4th Amendment cannot be used in court. EXCEPTIONS: (1) GOOD FAITH — officer reasonably relied on a warrant that later proved defective (US v. Leon); (2) INEVITABLE DISCOVERY — evidence would have been discovered lawfully anyway; (3) INDEPENDENT SOURCE — evidence was also obtained through a separate lawful means; (4) ATTENUATION — connection between illegal conduct and evidence is too attenuated.',
    layman:'The exclusionary rule is the main "punishment" for illegal searches — the evidence gets thrown out. But the exceptions keep it from being absolute. "Good faith" means if an officer honestly followed the law as they understood it and the law was later found wrong, the evidence stays in. "Inevitable discovery" means if the police would have found it legally anyway, it stays in.' },
];

// Set question counts
QUIZ_CATEGORIES.forEach(cat => {
  cat.count = ALL_QUESTIONS.filter(q => q.cat === cat.id).length;
});

function getQuestionsByCategory(catId) {
  if (catId === 'all') return shuffle([...ALL_QUESTIONS]);
  return shuffle(ALL_QUESTIONS.filter(q => q.cat === catId));
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
