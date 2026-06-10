// TCOLE Training Data — Texas Commission on Law Enforcement
const TCOLE_CATEGORIES = [
  {
    id:1, num:'01', title:'Professional Policing', hours:40, category:'Core',
    description:'Fundamental principles of professional law enforcement in Texas.',
    topics:['Texas TCOLE overview and licensing','Professional ethics and conduct','Constitutional law foundations','Community policing philosophy','Cultural diversity and bias awareness','Procedural justice','Legitimacy and public trust'],
    tcoleRef:'TCOLE Rule 217.11',
    testQuestions: 15
  },
  {
    id:2, num:'02', title:'Criminal Law — Texas Penal Code', hours:60, category:'Legal',
    description:'Comprehensive study of the Texas Penal Code, offense classifications, and elements.',
    topics:['Title 1: Introductory Provisions (Chap. 1–2)','Title 2: General Principles of Criminal Responsibility (Chap. 6–9)','Title 5: Offenses Against the Person (Chap. 19–22)','Title 7: Offenses Against Property (Chap. 28–35)','Title 8: Offenses Against Public Administration (Chap. 36–39)','Title 9: Offenses Against Public Order (Chap. 42–46)','Title 10: Offenses Against Public Health (Chap. 47–49)'],
    tcoleRef:'TPC Title 1–11',
    testQuestions: 25
  },
  {
    id:3, num:'03', title:'Code of Criminal Procedure', hours:40, category:'Legal',
    description:'Texas Code of Criminal Procedure — arrest, search, seizure, rights, and court procedures.',
    topics:['Art. 14 — Arrest without warrant','Art. 15 — Warrant of arrest','Art. 18 — Search warrants','Art. 38 — Evidence / confessions','Art. 42 — Judgment and execution','Magistrate warnings (Art. 15.17)','Occupational License suspension'],
    tcoleRef:'Texas CCP',
    testQuestions: 20
  },
  {
    id:4, num:'04', title:'Use of Force', hours:24, category:'Tactics',
    description:'Constitutional standards, force continuum, deadly force, and documentation.',
    topics:['Graham v. Connor (1989) — Objective reasonableness','Tennessee v. Garner (1985) — Deadly force fleeing suspect','Force continuum levels','Less-lethal force options','Deadly force justification (TPC § 9.51)','Duty to intervene','Post-use-of-force documentation','De-escalation techniques'],
    tcoleRef:'TPC § 9.51; CCP Art. 2.13',
    testQuestions: 15
  },
  {
    id:5, num:'05', title:'Patrol Procedures', hours:30, category:'Operations',
    description:'Patrol tactics, traffic stops, field interviews, and officer safety.',
    topics:['Patrol methods and deployment','Traffic stop procedures','Felony stop procedures','Field interviews and Terry stops','Building searches','Perimeter containment','K-9 operations overview','Warrant service'],
    tcoleRef:'CCP Art. 14.03; Terry v. Ohio',
    testQuestions: 15
  },
  {
    id:6, num:'06', title:'Traffic Laws & Enforcement', hours:24, category:'Traffic',
    description:'Texas Transportation Code, traffic enforcement, DWI, and accident investigation.',
    topics:['Texas Transportation Code overview','Right-of-way rules','Speed laws','DWI/DUI laws (TPC § 49.04–49.065)','Implied consent and blood draws','Standard Field Sobriety Tests (SFSTs)','Commercial vehicle regulations','Accident investigation','Hit and run offenses'],
    tcoleRef:'TTC § 544, TPC § 49.04',
    testQuestions: 15
  },
  {
    id:7, num:'07', title:'Firearms Proficiency', hours:40, category:'Weapons',
    description:'Firearm safety, qualification, and legal use of firearms in law enforcement.',
    topics:['Firearm safety rules','Handgun qualification (TCOLE standard)','Shotgun qualification','Rifle/patrol carbine','Weapons malfunction and remediation','Duty to qualify annually','Legal use of firearms','Off-duty carry requirements'],
    tcoleRef:'TCOLE Rule 217.19',
    testQuestions: 10
  },
  {
    id:8, num:'08', title:'Emergency Vehicle Operations', hours:24, category:'Driving',
    description:'Pursuit driving, emergency response, and Texas motor vehicle laws for officers.',
    topics:['Authorized emergency vehicle laws (TTC § 546)','High-speed pursuit policy','Pursuit termination decisions','Intersection safety','Police Vehicle Operations (PVO)','Crash reporting for officers','Spike strip deployment','Aerial support coordination'],
    tcoleRef:'TTC § 546.001–546.005',
    testQuestions: 10
  },
  {
    id:9, num:'09', title:'Crisis Intervention & Mental Health', hours:16, category:'Crisis',
    description:'Mental health first aid, crisis de-escalation, and CIT techniques.',
    topics:['Mental Health Code of Texas','Involuntary commitment procedures (CCP Art. 16.22)','Emergency Protective Custody','Crisis Intervention Team (CIT) model','De-escalation techniques','Suicide by cop awareness','PTSD recognition','Veteran crisis response','Substance abuse crisis'],
    tcoleRef:'Health & Safety Code § 573; CCP Art. 16.22',
    testQuestions: 10
  },
  {
    id:10, num:'10', title:'Domestic Violence & Family Law', hours:16, category:'Special',
    description:'Family violence laws, mandatory arrest, safety planning, and victim services.',
    topics:['Texas Family Code definitions','Family violence (TPC § 71.004)','Mandatory arrest (CCP Art. 14.03(b))','Protective orders','Lethality Assessment Protocol','VAWA requirements','Child abuse reporting','Strangulation enhancement (TPC § 22.01(b)(2))','Evidence-based prosecution'],
    tcoleRef:'Texas Family Code; TPC § 22.01',
    testQuestions: 10
  },
  {
    id:11, num:'11', title:'Juvenile Law & Procedures', hours:12, category:'Special',
    description:'Texas juvenile justice system, juvenile rights, and processing procedures.',
    topics:['Texas Family Code Title 3 (Juvenile Justice)','Age of criminal responsibility','Juvenile records and confidentiality','Secure vs. non-secure detention','School Resource Officers (SRO)','Truancy and school law','Gang recognition','Transfer to adult court'],
    tcoleRef:'Texas Family Code Title 3',
    testQuestions: 8
  },
  {
    id:12, num:'12', title:'Racial Profiling', hours:3, category:'Civil Rights',
    description:'State mandate — anti-profiling training and documentation requirements.',
    topics:['TPC § 3.05 definition of racial profiling','CCP Art. 2.132 — Agency racial profiling policy','Data collection requirements','Annual reporting to TCOLE','Camera / BWC requirements','Complaint procedures','Disparate impact analysis'],
    tcoleRef:'CCP Art. 2.132–2.135',
    testQuestions: 5
  },
  {
    id:13, num:'13', title:'Human Trafficking', hours:4, category:'Special',
    description:'Recognition, response, and resources for human trafficking investigations.',
    topics:['TPC § 20A.02 — Trafficking of persons','TPC § 20A.03 — Continuous trafficking','Victim identification','Safe harbor provisions','Reporting requirements (CCP Art. 56A)','National Human Trafficking Hotline','DFPS coordination','ICE/HSI coordination'],
    tcoleRef:'TPC § 20A.02; TCOLE mandate',
    testQuestions: 5
  },
  {
    id:14, num:'14', title:'Controlled Substances', hours:16, category:'Legal',
    description:'Texas Controlled Substances Act, drug laws, and narcotics enforcement.',
    topics:['Texas Health & Safety Code Chapter 481','Penalty groups 1–4','Marijuana laws (H&SC § 481.120)','Prescription drug offenses','Fentanyl enhancement provisions','Drug paraphernalia','Precursor chemicals','CI operations and informants','Chain of custody for evidence'],
    tcoleRef:'Texas H&SC Chapter 481',
    testQuestions: 12
  },
  {
    id:15, num:'15', title:'Ethics & Integrity', hours:8, category:'Core',
    description:'Law enforcement ethics, code of conduct, and accountability.',
    topics:['Law Enforcement Code of Ethics','Gratuities and corruption prevention','False reports (TPC § 37.08)','Official oppression (TPC § 39.03)','Misuse of official information (TPC § 39.06)','Duty to report misconduct','Internal affairs process','Body-worn camera policies','Social media guidelines'],
    tcoleRef:'TPC § 39; TCOLE Rule 218',
    testQuestions: 8
  },
  {
    id:16, num:'16', title:'Investigations & Evidence', hours:20, category:'Investigations',
    description:'Crime scene management, evidence collection, and chain of custody.',
    topics:['Crime scene protection','Photography and documentation','Physical evidence collection','Digital evidence basics','Chain of custody requirements','Report writing standards','Witness interviewing','Confession rules (CCP Art. 38.22)','Eyewitness identification (CCP Art. 38.20)'],
    tcoleRef:'CCP Art. 38; TCOLE curriculum',
    testQuestions: 12
  },
  {
    id:17, num:'17', title:'Weapons Laws', hours:8, category:'Legal',
    description:'Texas weapons statutes, lawful carry, and prohibited persons.',
    topics:['TPC § 46.02 — Unlawful carrying of weapons','TPC § 46.04 — Unlawful possession by felon','TPC § 46.05 — Prohibited weapons','LTC — License to Carry','Constitutional carry (HB 1927)','Campus carry','Places weapons prohibited','Firearm identification','Weapons trafficking'],
    tcoleRef:'TPC Chapter 46',
    testQuestions: 8
  },
  {
    id:18, num:'18', title:'First Aid / CPR / AED', hours:16, category:'Medical',
    description:'Emergency medical response, first aid, and trauma care for officers.',
    topics:['Cardiopulmonary Resuscitation (CPR)','AED operation','Tourniquet application (TCOLE STOP THE BLEED)','Wound packing','Airway management','Overdose response (Narcan/naloxone)','TCOLE first aid standards','Officer Down protocol','MCI triage basics'],
    tcoleRef:'TCOLE Rule 217.11(b)',
    testQuestions: 8
  },
  {
    id:19, num:'19', title:'Arrest, Search & Seizure', hours:20, category:'Legal',
    description:'4th Amendment law, probable cause, warrants, and exceptions.',
    topics:['4th Amendment — Unreasonable search and seizure','Probable cause standard','Reasonable suspicion (Terry v. Ohio)','Warrant requirements','Exceptions: consent, exigent, inventory, plain view','Vehicle searches (Carroll doctrine)','Stop and frisk procedure','Exclusionary rule','Good faith exception (United States v. Leon)','Texas Art. I § 9 (stronger than 4th Amend.)'],
    tcoleRef:'U.S. Const. Amend. IV; Texas Const. Art. I § 9',
    testQuestions: 15
  },
  {
    id:20, num:'20', title:'Special Populations & Bias-Free Policing', hours:8, category:'Community',
    description:'Policing vulnerable populations with dignity and constitutional compliance.',
    topics:['Homeless individuals','Immigrants and undocumented persons','LGBTQ+ interactions','Persons with disabilities (ADA)','Elderly persons','Non-English speakers / interpreters','De-escalation for special populations','Implicit bias recognition','Cultural competency'],
    tcoleRef:'ADA; TCOLE curriculum',
    testQuestions: 8
  },
];

const TCOLE_CERT_LEVELS = [
  {
    level:'basic', title:'Basic Peace Officer', hours:618, icon:'🔵', color:'blue',
    requirements:['618-hour Basic Peace Officer Course','Pass TCOLE licensing exam','Pass background check','Physical fitness standards','Psychological evaluation','Medical examination'],
    exam:'Written licensing exam + skills demonstration',
    renewal:'40 hours continuing education every 2 years'
  },
  {
    level:'intermediate', title:'Intermediate Certificate', hours:720, icon:'🌟', color:'gold',
    requirements:['Basic Peace Officer License','2 years active service','720 total training hours','Satisfactory performance evaluations','Complete required specialty courses'],
    exam:'No separate exam — training hours + service time',
    renewal:'40 hours continuing education every 2 years'
  },
  {
    level:'advanced', title:'Advanced Certificate', hours:1080, icon:'🔶', color:'purple',
    requirements:['Intermediate Certificate','4 years active service','1,080 total training hours','Supervisory training','Management principles'],
    exam:'No separate exam — training hours + service time',
    renewal:'40 hours continuing education every 2 years'
  },
  {
    level:'master', title:'Master Peace Officer', hours:2000, icon:'⭐', color:'red',
    requirements:['Advanced Certificate','8 years active service','2,000+ total training hours','Advanced specialty certifications','Leadership training','Demonstrated professional achievement'],
    exam:'No separate exam — career achievement award',
    renewal:'40 hours continuing education every 2 years'
  },
];

const TCOLE_CONTACT = {
  name: 'Texas Commission on Law Enforcement',
  abbr: 'TCOLE',
  phone: '(512) 936-7700',
  address: '6330 U.S. Hwy 290 East, Austin, TX 78723',
  website: 'https://www.tcole.texas.gov',
  email: 'help@tcole.texas.gov',
  hours: 'Mon–Fri: 8:00 AM – 5:00 PM'
};
