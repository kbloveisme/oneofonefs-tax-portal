// ── Dispatch Scenario Data ────────────────────────────────────
const SCENARIOS = [
  {
    id: 1,
    title: 'Traffic Stop — Escalating Situation',
    category: 'Traffic / Use of Force',
    difficulty: 'Intermediate',
    icon: '🚔',
    sceneEmoji: '🚗',
    tcoleCategory: 'Traffic Laws & Patrol',
    laws: ['TPC § 22.01','TTC § 545','CCP Art. 14.01'],
    dispatch: 'Unit 42, conduct a traffic stop on a black sedan, TX plate KDX-2291, westbound on I-20 near mile marker 114. Vehicle observed swerving and running a red light at Eastman Road.',
    situation: 'You activate your lights and siren. The sedan pulls over after about 200 yards on the shoulder of I-20. The driver, a male approximately 30 years old, appears agitated and is moving around inside the vehicle as you approach.',
    steps: [
      {
        question: 'As you approach the vehicle on foot, the driver suddenly opens his door and stands outside. What is your primary action?',
        choices: [
          { text: 'Order the driver back into the vehicle immediately with your hand on your holstered firearm.', correct: true },
          { text: 'Continue approaching as normal without giving any commands.', correct: false },
          { text: 'Draw your firearm and aim at the driver immediately.', correct: false },
          { text: 'Return to your patrol car and wait for backup before proceeding.', correct: false },
        ],
        correctExplain: '✅ Correct. Ordering the driver back in the vehicle places you in a tactically superior position. The driver opening the door unexpectedly is a threat indicator — your hand on the holster (without drawing) signals readiness without escalating unnecessarily. This is proper Use of Force continuum application.',
        wrongExplain: 'A driver exiting unexpectedly is a tactical concern. Continuing casually ignores officer safety. Drawing immediately would not meet the Graham v. Connor "objective reasonableness" standard — the driver has not displayed a weapon. Waiting indefinitely is not always practical and may allow the situation to escalate.',
        law: 'Graham v. Connor, 490 U.S. 386 (1989) — Use of force must be objectively reasonable based on the totality of circumstances.',
        layman: 'You do not need a weapon drawn every time someone gets out of a car. But you should always be in a defensive, ready position. The key question is: what would a reasonable officer do in this situation?'
      },
      {
        question: 'The driver complies and returns inside. As you reach the window, you smell a strong odor of alcohol. The driver has slurred speech. What are your legal options under Texas law?',
        choices: [
          { text: 'Issue a warning for the traffic violation only — you cannot arrest without a breath test.', correct: false },
          { text: 'Ask the driver to exit for Standard Field Sobriety Tests (SFSTs) and proceed with DWI investigation.', correct: true },
          { text: 'Immediately arrest the driver for DWI based on the odor alone.', correct: false },
          { text: 'Call a supervisor and wait — you need another officer present to make a DWI arrest.', correct: false },
        ],
        correctExplain: '✅ Correct. The odor of alcohol and slurred speech give you reasonable suspicion to investigate further. SFSTs (HGN, Walk-and-Turn, One-Leg-Stand) provide additional evidence to establish probable cause for DWI arrest. Texas TTC § 724 (Implied Consent) requires proper procedures before any breath/blood test.',
        wrongExplain: 'Odor + slurred speech = reasonable suspicion for DWI investigation, but not yet probable cause for arrest. You must conduct the investigation. An arrest solely on odor without SFST or other evidence may not meet probable cause. You do not need a supervisor or second officer to conduct a DWI stop.',
        law: 'TPC § 49.04 — DWI defined as operating a motor vehicle in a public place while intoxicated. TTC § 724 — Implied Consent Law.',
        layman: 'DWI means you\'re driving while your normal use of mental or physical faculties is impaired by alcohol/drugs, OR your blood alcohol is .08 or higher. The officer must build a case step by step — smell + behavior leads to field tests which lead to arrest if warranted.'
      }
    ]
  },
  {
    id: 2,
    title: 'Domestic Violence Call',
    category: 'Domestic Violence',
    difficulty: 'Advanced',
    icon: '🏠',
    sceneEmoji: '🚨',
    tcoleCategory: 'Domestic Violence & Family Law',
    laws: ['TPC § 22.01(b)','TPC § 71.004','CCP Art. 14.03(b)','Texas Family Code § 71.001'],
    dispatch: 'Units 17 and 22 — 911 call, domestic disturbance at 4412 Brentwood Lane. Female caller reported being struck by her husband. She is crying, caller disconnected. No weapons reported. Neighbors previously called about disturbances at this address.',
    situation: 'You arrive and observe a woman on the front porch with visible redness on her left cheek and swollen lip. A male is visible through the front window. As you approach, the woman says "Everything is fine, officer. We just had an argument. Please don\'t arrest him."',
    steps: [
      {
        question: 'The victim is requesting you not arrest the husband. What does Texas law require you to do?',
        choices: [
          { text: 'Respect the victim\'s wishes and leave without making an arrest.', correct: false },
          { text: 'Arrest the husband if you observe evidence of family violence, regardless of the victim\'s wishes.', correct: true },
          { text: 'Take a report and advise the victim to seek a protective order.', correct: false },
          { text: 'Both parties must agree to a "mutual combat" resolution before you can leave.', correct: false },
        ],
        correctExplain: '✅ Correct. Under CCP Art. 14.03(b), officers SHALL arrest the person the officer believes committed the assault if there are visible injuries or other evidence of family violence, regardless of the victim\'s wishes. This is a MANDATORY ARREST situation in Texas.',
        wrongExplain: 'Texas law mandates arrest in family violence situations where officers observe evidence of the offense. The victim\'s preference does NOT override the mandatory arrest provision. Leaving without arrest when evidence exists exposes the officer to liability and leaves the victim in danger.',
        law: 'CCP Art. 14.03(b) — A peace officer SHALL arrest, without a warrant, a person the officer has probable cause to believe has committed an assault resulting in bodily injury to a family or household member.',
        layman: 'In Texas, domestic violence is NOT a "she said / he said" situation where you just give them a timeout. If you see injuries, Texas law says you MUST arrest the person who caused them. The victim cannot "drop charges" at the scene — only the DA can decide not to prosecute later.'
      },
      {
        question: 'You arrest the husband. As you place him in your patrol car, he says "She attacked me first. I was just defending myself." How should you document this?',
        choices: [
          { text: 'Release him — if he claims self-defense, it negates the probable cause for arrest.', correct: false },
          { text: 'Note it in your report as his statement, and let the DA/court evaluate the self-defense claim.', correct: true },
          { text: 'Arrest both parties for mutual combat.', correct: false },
          { text: 'Don\'t document it — statements made after arrest are inadmissible.', correct: false },
        ],
        correctExplain: '✅ Correct. Document the arrestee\'s statement accurately in your incident report. Self-defense is an affirmative defense evaluated in court — it does not automatically negate probable cause at the scene. Document what you observed, what the victim said, what the suspect said, and physical evidence.',
        wrongExplain: 'Self-defense claims do not dissolve arrests at the scene. The officer makes probable cause determinations based on observable evidence. Courts and juries evaluate self-defense claims at trial. Always document ALL statements — post-arrest statements are admissible under proper circumstances.',
        law: 'TPC § 9.31 — Self-defense is an affirmative defense that must be raised at trial. CCP Art. 38.22 governs admissibility of statements.',
        layman: 'Your job is to document what you see and hear. You don\'t make final judgments about guilt or self-defense — that\'s the judge\'s and jury\'s job. Write everything down truthfully and completely.'
      }
    ]
  },
  {
    id: 3,
    title: 'Suspicious Person / Terry Stop',
    category: 'Patrol / Search & Seizure',
    difficulty: 'Intermediate',
    icon: '🔍',
    sceneEmoji: '��',
    tcoleCategory: 'Arrest, Search & Seizure',
    laws: ['CCP Art. 14.03','Terry v. Ohio','U.S. Const. Amend. IV','Texas Const. Art. I § 9'],
    dispatch: 'Unit 8 — Information: male subject matching description of a robbery suspect from earlier today is reported in the 2300 block of Commerce Street. Description: Black male, 6\'1", red hoodie, jeans, possibly armed.',
    situation: 'You observe a male matching the description exactly near the reported location at 11:45 PM. He appears nervous when he sees your patrol car, and begins walking quickly away without making eye contact.',
    steps: [
      {
        question: 'You want to stop and question this individual. What legal standard justifies a Terry stop?',
        choices: [
          { text: 'You need probable cause that he committed a crime before stopping him.', correct: false },
          { text: 'Reasonable suspicion — specific articulable facts suggesting criminal activity.', correct: true },
          { text: 'No legal standard is needed — officers can stop anyone at any time.', correct: false },
          { text: 'You cannot stop him because he has not done anything illegal in your presence.', correct: false },
        ],
        correctExplain: '✅ Correct. A Terry stop requires REASONABLE SUSPICION — specific, articulable facts (the dispatch description + matching appearance + location + nervous behavior + nighttime + flight) that together create a reasonable suspicion of criminal activity. This is a LOWER standard than probable cause.',
        wrongExplain: 'Terry v. Ohio (1968) created the "stop and frisk" doctrine, allowing brief detentions on less than probable cause. Officers can NOT stop people randomly (that would be an illegal detention). Matching a dispatch description at the right location gives strong reasonable suspicion.',
        law: 'Terry v. Ohio, 392 U.S. 1 (1968) — Brief investigatory stop requires reasonable suspicion. CCP Art. 14.03 — officers may stop persons in suspicious places.',
        layman: 'Think of it like a traffic light: GREEN = free to go, YELLOW = Terry stop (reasonable suspicion to briefly detain), RED = arrest (probable cause). A Terry stop is the YELLOW zone — you can detain briefly to investigate, but not arrest unless you develop more evidence.'
      },
      {
        question: 'During the stop, you notice a bulge in his waistband consistent with a firearm. You want to do a pat-down. What justifies this under the law?',
        choices: [
          { text: 'You need a warrant to search a person during a Terry stop.', correct: false },
          { text: 'Reasonable belief the person is armed and dangerous justifies a pat-down for weapons only.', correct: true },
          { text: 'You can do a full search because he matched a robbery suspect description.', correct: false },
          { text: 'You need the person\'s consent to conduct any search.', correct: false },
        ],
        correctExplain: '✅ Correct. The second part of Terry allows a brief "frisk" (pat-down of outer clothing only) if officers have reasonable belief the person is ARMED AND DANGEROUS. The bulge + robbery suspect description justifies the pat-down. IMPORTANT: a Terry frisk is for weapons ONLY — not a full search.',
        wrongExplain: 'No warrant is needed for a Terry frisk based on officer safety. Matching a robbery suspect description establishes reasonable suspicion for the stop, but the armed-and-dangerous determination comes from the observable bulge. Consent is helpful but not required here — you have independent justification.',
        law: 'Terry v. Ohio Part II — If lawfully stopped AND reasonably believe armed and dangerous, may conduct pat-down for weapons. Minnesota v. Dickerson — plain-feel doctrine for contraband.',
        layman: 'A "frisk" or "pat-down" is NOT a full search. You can only feel the outside of the person\'s clothes for hard objects that feel like weapons. If you feel something that obviously feels like drugs (not a weapon), that\'s the "plain feel" doctrine — you may be able to reach in, but only if it\'s immediately apparent as contraband.'
      }
    ]
  },
  {
    id: 4,
    title: 'Mental Health Crisis',
    category: 'Crisis Intervention',
    difficulty: 'Advanced',
    icon: '🧠',
    sceneEmoji: '⚠️',
    tcoleCategory: 'Crisis Intervention & Mental Health',
    laws: ['Texas H&SC § 573','CCP Art. 16.22','Texas Mental Health Code'],
    dispatch: 'Unit 33 — welfare check at 889 Ridgeline Drive. Neighbor reports a male screaming in the front yard, appears disoriented, is talking to himself, and has been standing in the road. No weapons visible. Possibly off his medications.',
    situation: 'You arrive to find a male in his 40s standing in the middle of the street, talking loudly. He is not responding normally to your approach. He is crying and says "They\'re coming for me. The walls told me to come outside." He is not making threatening movements.',
    steps: [
      {
        question: 'The man appears to be experiencing a mental health crisis. What is your primary approach?',
        choices: [
          { text: 'Issue loud commands and if he does not comply, use physical force to gain control.', correct: false },
          { text: 'De-escalate using CIT techniques — calm voice, non-threatening posture, listen, give time and space.', correct: true },
          { text: 'Immediately handcuff him since he is unpredictable.', correct: false },
          { text: 'Leave the scene — mental health crises are medical, not law enforcement issues.', correct: false },
        ],
        correctExplain: '✅ Correct. Crisis Intervention Team (CIT) training teaches CALMER approach: CALM yourself first; speak in a LOW, REASSURING tone; LISTEN actively; GIVE TIME — don\'t rush; CREATE SPACE; AVOID sudden movements. Persons in mental health crisis may not respond to typical commands.',
        wrongExplain: 'Force escalation with a person in crisis can trigger violent responses. Immediate handcuffing is not justified when no crime is being committed and the person is not threatening. Officers DO respond to mental health crises — and with CIT training, they are equipped to help.',
        law: 'Texas H&SC § 573 — Emergency Apprehension & Detention. An officer may apprehend a person who appears to be mentally ill and a danger to themselves or others.',
        layman: 'Think of a person in mental health crisis like someone who is temporarily "offline" — their normal logic isn\'t working. Shouting commands at them often makes things worse. Instead: slow down, speak calmly, reduce stimulation, and give them time to come back to reality. Your goal is safety, not compliance.'
      },
      {
        question: 'After 10 minutes of talking, the man calms slightly but is still clearly delusional and has said he wants to "hurt himself." What legal action can you take?',
        choices: [
          { text: 'You cannot force anyone to receive mental health treatment — leave a resource card.', correct: false },
          { text: 'Arrest him for disorderly conduct and let the jail deal with it.', correct: false },
          { text: 'Take him into Emergency Protective Custody (EPC) under Texas H&SC § 573.', correct: true },
          { text: 'Only a doctor can authorize mental health holds in Texas.', correct: false },
        ],
        correctExplain: '✅ Correct. Under Texas H&SC § 573.001, a peace officer may apprehend a person and transport them to a mental health facility WITHOUT a warrant if the officer reasonably believes the person is mentally ill AND is likely to cause serious harm to themselves or others.',
        wrongExplain: 'Officers have specific legal authority to conduct Emergency Protective Custody holds. A simple arrest for disorderly conduct is inappropriate and does not address the underlying crisis. Doctors can order civil commitment, but officers do not need medical authorization for an EPC hold.',
        law: 'Texas H&SC § 573.001 — Emergency Apprehension: A peace officer, without a warrant, may take a person into custody if the officer believes based on reasonable evidence the person is mentally ill and likely to cause serious harm.',
        layman: 'This is like a medical emergency — if someone is having a heart attack, you take them to the hospital. If someone is in a mental health crisis and says they want to hurt themselves, Texas law gives you the authority to take them for evaluation, even without their consent. It\'s not an arrest — it\'s a health hold.'
      }
    ]
  },
  {
    id: 5,
    title: 'Robbery in Progress — Armed Suspect',
    category: 'Use of Force / Robbery',
    difficulty: 'Advanced',
    icon: '🔫',
    sceneEmoji: '🏪',
    tcoleCategory: 'Use of Force',
    laws: ['TPC § 29.02','TPC § 9.32','TPC § 9.51','Graham v. Connor','Tennessee v. Garner'],
    dispatch: 'All units — robbery in progress at QuikTrip, 1800 Commerce Blvd. Male suspect in black clothing, armed with a handgun, currently inside. Two employees are hostages. Suspect threatening to shoot. Units 5, 7, and 14 respond. Unit 5 is first on scene.',
    situation: 'You arrive first. You see the suspect through the window pointing a gun at an employee. A second employee is on the floor. The suspect has not seen you yet. Backup is 3 minutes out.',
    steps: [
      {
        question: 'You are alone, backup is 3 minutes away, and the suspect has a gun pointed at a hostage. What is your best tactical option?',
        choices: [
          { text: 'Immediately enter and confront the suspect to end the threat now.', correct: false },
          { text: 'Establish a perimeter, position yourself for cover, communicate with dispatch, and wait for backup while observing.', correct: true },
          { text: 'Announce your presence over the PA system so the suspect knows police are outside.', correct: false },
          { text: 'Leave and wait — this is a SWAT situation.', correct: false },
        ],
        correctExplain: '✅ Correct. Lone entry into an armed hostage situation is extremely dangerous and tactically unsound. Establishing a perimeter, taking cover, maintaining observation, updating dispatch, and waiting for backup is the proper procedure. You protect from outside while containing the suspect.',
        wrongExplain: 'Charging alone into an armed robbery dramatically increases both your risk and hostage risk. Announcing your presence may cause the suspect to shoot immediately. Officers should not abandon the scene — but rushing in alone without a plan is not required by law or duty.',
        law: 'Tennessee v. Garner — Deadly force requires imminent threat. Graham v. Connor — Evaluate use of force based on severity of crime, immediate threat, and resistance/flight.',
        layman: 'Brave does not mean reckless. Police tactics exist for a reason — containing a dangerous suspect while gathering resources gives you the best chance of saving lives. One officer charging in alone often results in more casualties, not fewer.'
      },
      {
        question: 'Backup arrives. The suspect exits the store using a hostage as a human shield. He fires one shot at officers and misses. What use of force is now legally justified?',
        choices: [
          { text: 'Deadly force is justified because the suspect poses an imminent threat of death to officers and the public.', correct: true },
          { text: 'You cannot use deadly force because the suspect is using a human shield — risk of hitting the hostage.', correct: false },
          { text: 'Give the suspect a chance to surrender before using any force.', correct: false },
          { text: 'Deadly force is only justified if the suspect fires a second shot.', correct: false },
        ],
        correctExplain: '✅ Correct. When a suspect fires at officers, the threat of death or serious bodily injury is clearly established. TPC § 9.51 and § 9.32 justify deadly force. The suspect HAS fired — they are an active deadly threat. The decision must still consider the risk to the hostage and bystanders.',
        wrongExplain: 'The presence of a human shield does not make deadly force illegal — it makes the DECISION harder and must factor in the risk. Officers have fired at and neutralized suspects in hostage situations. "He fired first" is exactly when deadly force becomes most clearly justified. You do not have to wait for a second shot.',
        law: 'TPC § 9.51 — Officers may use deadly force to protect themselves or third persons from death or serious bodily injury. TPC § 9.32 — Deadly force is justified when the actor reasonably believes it is immediately necessary.',
        layman: 'Once a suspect fires a gun at police, the law is clear: deadly force is justified to stop the threat. This is the hardest decision officers ever face. The question is not "can I shoot?" but "is this the right tactical decision, and can I justify every aspect of my decision?"'
      }
    ]
  },
  {
    id: 6,
    title: 'DWI Traffic Stop',
    category: 'Traffic / DWI',
    difficulty: 'Basic',
    icon: '🍺',
    sceneEmoji: '🚦',
    tcoleCategory: 'Traffic Laws & Enforcement',
    laws: ['TPC § 49.04','TTC § 724','CCP Art. 14.03','SFST Standards'],
    dispatch: 'Unit 29 — be on lookout for a red pickup, TX plate MMJ-4421, possibly DWI. Caller reports the vehicle was weaving on US-59 northbound near the Gregg County line.',
    situation: 'You locate the vehicle. It crosses the center line twice. You initiate the stop. The driver, a woman in her 50s, has glassy eyes, the smell of alcohol is emanating from the vehicle, and she struggles to retrieve her insurance card.',
    steps: [
      {
        question: 'You have reasonable suspicion for DWI. You ask the driver to step out for field sobriety tests. She refuses. What are your options?',
        choices: [
          { text: 'You cannot proceed — if she refuses SFSTs you must let her go.', correct: false },
          { text: 'You may arrest based on the totality of observations, and proceed with implied consent for a breath/blood test.', correct: true },
          { text: 'Force her out of the vehicle immediately.', correct: false },
          { text: 'Wait for a supervisor before taking any action.', correct: false },
        ],
        correctExplain: '✅ Correct. SFSTs are voluntary in Texas — refusing them is not illegal. However, your observations (weaving, glassy eyes, odor, trouble finding documents) provide probable cause for arrest. After lawful arrest, Texas Implied Consent law (TTC § 724) requires the suspect to submit to a breath or blood test, or face automatic license suspension.',
        wrongExplain: 'SFST refusal does not prevent a DWI arrest. Officers can arrest on the totality of circumstances. Forcing her out physically without legal grounds for arrest is inappropriate. A supervisor is not required for a routine DWI arrest.',
        law: 'TTC § 724.011 — Implied Consent: A person arrested for DWI is deemed to have consented to providing a specimen of breath or blood. Refusal = 180-day license suspension.',
        layman: 'By having a driver\'s license in Texas, you automatically agree to submit to a breath or blood test if arrested for DWI. It\'s called "implied consent." You can say no, but the price is automatic license suspension — and your refusal can be used as evidence against you in court.'
      }
    ]
  },
];
