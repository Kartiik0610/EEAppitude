/**
 * 30 Questions for Intern HR
 * Echaar Equipments Pvt. Ltd. (Industrial Engineering HR & Employee Relations)
 */

export const internHrQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'hr_gen_1',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Confidentiality of Employee Personal Records',
    question: 'A friend working in the machine shop asks you whether another employee who was recently promoted received a salary hike and what their new CTC is. How do you respond?',
    options: [
      { text: 'Firmly and professionally explain that employee compensation and personnel records are strictly confidential HR data that cannot be disclosed under any circumstances.', scoreMultiplier: 1.0 },
      { text: 'Tell your friend the exact salary figures and gossip about it.', scoreMultiplier: 0.1 },
      { text: 'Show them the confidential payroll spreadsheet on your laptop.', scoreMultiplier: 0.1 },
      { text: 'Ask for a bribe to reveal the information.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_2',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Unbiased Candidate Resume Screening',
    question: 'While screening resumes for GET and Junior Engineer positions, you notice an applicant from your own hometown/college with slightly lower academic scores than other candidates. How do you proceed?',
    options: [
      { text: 'Apply identical, objective evaluation criteria (technical projects, academic benchmark, relevant domain exposure) equally to all candidates without regional or personal favoritism.', scoreMultiplier: 1.0 },
      { text: 'Shortlist them immediately and discard other better-qualified candidates.', scoreMultiplier: 0.1 },
      { text: 'Reject them solely because you want to prove you are not biased.', scoreMultiplier: 0.3 },
      { text: 'Tell the candidate the interview questions in advance.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_3',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Active Empathy in Handling Worker Grievances',
    question: 'A senior shopfloor machine operator visits the HR office agitated and upset because their overtime allowance was not credited in the monthly bank transfer. What is your initial stance?',
    options: [
      { text: 'Listen calmly and attentively without interrupting, offer a glass of water, check the biometric attendance punch logs and approved supervisor OT slips immediately, and explain clearly when the correction voucher will be processed.', scoreMultiplier: 1.0 },
      { text: 'Order the worker to leave your office and threaten to terminate their employment.', scoreMultiplier: 0.1 },
      { text: 'Tell the operator that HR never makes mistakes and blame the bank.', scoreMultiplier: 0.1 },
      { text: 'Lock yourself in a room and ignore the worker.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_4',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Promoting Workshop Safety & Health Culture',
    question: 'During your weekly walk through the manufacturing bays, you notice several contract workers wearing loose scarves near revolving CNC chucks. What is your immediate HR/Safety action?',
    options: [
      { text: 'Intervene immediately with courtesy and urgency: explain the severe entanglement hazard, instruct them to tuck in loose clothing properly, and coordinate with the safety officer and contractor supervisor for mandatory safety refresher training.', scoreMultiplier: 1.0 },
      { text: 'Walk past without saying anything because contract workers are not permanent staff.', scoreMultiplier: 0.1 },
      { text: 'Take a photo to mock the workers on your personal social media.', scoreMultiplier: 0.1 },
      { text: 'Wait until someone gets injured before reporting it.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_5',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Strict Adherence to Anti-Harassment (POSH) Standards',
    question: 'A female engineering intern approaches you privately, expressing discomfort about inappropriate comments made by a senior staff member during lunchtime. What is your legal and ethical protocol?',
    options: [
      { text: 'Reassure the intern of full safety and confidentiality, explain the formal POSH Internal Committee (IC) redressal procedure, assist her in filing a formal written complaint if she chooses, and promptly notify the Presiding Officer of the IC.', scoreMultiplier: 1.0 },
      { text: 'Tell the intern to ignore it and that "such things happen in factories".', scoreMultiplier: 0.1 },
      { text: 'Tell the intern not to report it because the senior staff member is very experienced.', scoreMultiplier: 0.1 },
      { text: 'Confront the senior staff member in the factory yard with a physical fight.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_6',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Conducting Welcoming & Structured Onboarding',
    question: 'Five new Graduate Engineer Trainees (GETs) arrive for their first day at Echaar Equipments. What should their Day 1 onboarding experience look like?',
    options: [
      { text: 'A well-structured orientation program: warm welcome, company history/values, manufacturing product tour, safety induction with PPE distribution, IT/ID card setup, and introduction to their designated department mentors.', scoreMultiplier: 1.0 },
      { text: 'Make them sit in a dark hallway for 8 hours without speaking to anyone.', scoreMultiplier: 0.1 },
      { text: 'Immediately send them to the shop floor to lift 50 kg iron castings alone.', scoreMultiplier: 0.1 },
      { text: 'Tell them to come back next month.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_7',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Feedback Diplomacy in Performance Appraisals',
    question: 'An employee receives constructive feedback regarding project delay during their annual appraisal and becomes argumentative. How do you facilitate the meeting?',
    options: [
      { text: 'Focus discussion on objective data, specific milestones, and deliverables rather than personality; encourage two-way dialogue, and help construct a positive Individual Development Plan (IDP) with clear training milestones.', scoreMultiplier: 1.0 },
      { text: 'Argue and shout back at the employee.', scoreMultiplier: 0.1 },
      { text: 'Change the appraisal rating to "Outstanding" just to avoid conflict.', scoreMultiplier: 0.2 },
      { text: 'End the meeting abruptly without documenting any action plan.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'hr_gen_8',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Labor Relations & Respect on the Shop Floor',
    question: 'How should an HR professional build trust and positive labor relations with blue-collar technicians and machine operators?',
    options: [
      { text: 'Maintain genuine respect, spend time on the shop floor listening to working conditions, resolve canteen/uniform/welfare issues promptly, and communicate transparently in local languages.', scoreMultiplier: 1.0 },
      { text: 'Stay locked in an air-conditioned office and treat shopfloor workers as inferior.', scoreMultiplier: 0.1 },
      { text: 'Make false promises that you have no intention of keeping.', scoreMultiplier: 0.1 },
      { text: 'Ignore labor laws completely.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_9',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Adoption of HR Tech (HRMS & Applicant Tracking)',
    question: 'Echaar upgrades to a cloud-based HRMS for leave applications and attendance regularization. How do you help shopfloor staff who are not tech-savvy?',
    options: [
      { text: 'Conduct small group demonstration sessions, create simple pictorial step-by-step guides in Marathi/Hindi/English, and set up a kiosk with an HR intern helping them submit leaves.', scoreMultiplier: 1.0 },
      { text: 'Mock workers who struggle to use smartphone apps.', scoreMultiplier: 0.1 },
      { text: 'Deduct salary from anyone who cannot navigate the software on Day 1.', scoreMultiplier: 0.1 },
      { text: 'Cancel all employee leaves permanently.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'hr_gen_10',
    roleId: 'intern_hr',
    section: 'general',
    type: 'behavioral',
    title: 'Continuous Professional Learning in HR',
    question: 'Why is it critical for an HR intern in a manufacturing company to understand the Factories Act and new Indian Labor Codes?',
    options: [
      { text: 'Compliance is vital to prevent legal liabilities, ensure fair wages, guarantee occupational safety, and foster an ethical, high-productivity organizational culture.', scoreMultiplier: 1.0 },
      { text: 'Only to pass college exams.', scoreMultiplier: 0.2 },
      { text: 'Labor laws have zero relevance in factories.', scoreMultiplier: 0.1 },
      { text: 'To find loopholes to avoid paying minimum wages.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'hr_tech_1',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Factories Act 1948: Daily and Weekly Working Hours',
    question: 'Under Section 51 and 54 of the Factories Act 1948, what are the maximum statutory adult working hours permitted without overtime?',
    options: [
      { text: '9 hours per day and 48 hours per week' },
      { text: '14 hours per day and 70 hours per week' },
      { text: '6 hours per day and 30 hours per week' },
      { text: 'No limit; employers can mandate 24 hours continuously' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_2',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Overtime Wages under Factories Act 1948 (Section 59)',
    question: 'When an adult worker works in a factory for more than 9 hours in any day or 48 hours in any week, at what rate must overtime wages be paid?',
    options: [
      { text: 'Twice their ordinary rate of wages (Double Rate / 2x)' },
      { text: 'At standard single ordinary rate' },
      { text: 'Half rate (0.5x)' },
      { text: 'Overtime wages are legally prohibited in factories' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_3',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'POSH Act 2013: Internal Committee (IC) Mandate',
    question: 'Under the Prevention of Sexual Harassment (POSH) Act 2013, what is mandatory regarding the composition of the Internal Committee (IC)?',
    options: [
      { text: 'Presiding Officer must be a senior woman employee, at least 50% of members must be women, and it must include an external member from an NGO or familiar with women’s issues' },
      { text: 'All members must be male department directors' },
      { text: 'Only external police officers can be members' },
      { text: 'Companies with under 500 employees are exempt from POSH' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_4',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Employees’ Provident Fund (EPF) Contribution Rate',
    question: 'Under the Employees’ Provident Funds and Miscellaneous Provisions Act 1952, what is the standard statutory employee and employer contribution rate towards EPF on basic wages + DA?',
    options: [
      { text: '12% of Basic + DA by employee and 12% by employer' },
      { text: '5% by employee and 0% by employer' },
      { text: '25% by employee and 25% by employer' },
      { text: '1% by employee' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_5',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'ESIC Coverage Wage Threshold',
    question: 'What is the current monthly gross wage ceiling for an employee to be covered under the Employees’ State Insurance (ESI) Act in India?',
    options: [
      { text: '₹21,000 per month (₹25,000 for persons with disabilities)' },
      { text: '₹5,000 per month' },
      { text: '₹1,00,000 per month' },
      { text: 'There is no wage ceiling for ESI' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_6',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Recruitment Metrics: Time-to-Hire',
    question: 'In recruitment analytics, how is "Time-to-Hire" defined?',
    options: [
      { text: 'The number of days between the date a candidate enters the talent pipeline (application/sourcing) and the date they formally accept the job offer' },
      { text: 'The time taken to conduct a 30-minute interview' },
      { text: 'The age of the candidate' },
      { text: 'The time taken for a candidate to commute to the office' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_7',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Payment of Gratuity Act 1972: Eligibility Criteria',
    question: 'Under the Payment of Gratuity Act 1972, what is the minimum period of continuous service required for an employee to be eligible for gratuity upon resignation or retirement?',
    options: [
      { text: '5 Years of continuous service (except in case of death or disablement)' },
      { text: '6 Months' },
      { text: '15 Years' },
      { text: '1 Year' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_8',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Training Needs Identification (TNI): Kirkpatrick Model',
    question: 'In the Kirkpatrick 4-Level Training Evaluation Model, what does Level 3 evaluate?',
    options: [
      { text: 'Behavior (Transfer of learning: whether the participant actually applies the learned skills on the job)' },
      { text: 'Reaction (how much participants enjoyed the trainer’s jokes)' },
      { text: 'Learning (knowledge quiz at the end of class)' },
      { text: 'The cost of the training venue' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_9',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Key Result Areas (KRAs) vs Key Performance Indicators (KPIs)',
    question: 'In performance management systems, what is the key conceptual distinction between a KRA and a KPI?',
    options: [
      { text: 'A KRA defines the broad area of responsibility (e.g. Shopfloor Safety), whereas a KPI provides the specific, measurable metric to track success (e.g. Lost Time Injury Frequency Rate < 0.5)' },
      { text: 'KRA is for managers, KPI is only for security guards' },
      { text: 'They are identical acronyms with no difference' },
      { text: 'KRA is measured in rupees, KPI is measured in hours' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_10',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Factories Act 1948: Safety Officer Appointment Mandate',
    question: 'According to Section 40-B of the Factories Act 1948, when is an industrial manufacturing factory legally required to employ a dedicated, qualified Safety Officer?',
    options: [
      { text: 'When 1,000 or more workers are ordinarily employed, or where any manufacturing process carries a declared hazardous risk' },
      { text: 'Only when the factory has 10,000 workers' },
      { text: 'In every shop with at least 2 workers' },
      { text: 'Safety officers are never required in private companies' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_11',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Maternity Benefit Act 1961 (Amended 2017)',
    question: 'What is the statutory paid maternity leave entitlement for eligible female employees for up to two surviving children under the amended Maternity Benefit Act?',
    options: [
      { text: '26 Weeks (with up to 8 weeks preceding expected delivery date)' },
      { text: '12 Weeks' },
      { text: '6 Weeks' },
      { text: '52 Weeks' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_12',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: '360-Degree Feedback Appraisal Method',
    question: 'Who provides performance input in a comprehensive 360-degree appraisal evaluation?',
    options: [
      { text: 'Supervisors, direct peers, subordinates, self-evaluation, and relevant internal/external customers' },
      { text: 'Only the employee’s immediate boss' },
      { text: 'Only the employee’s family members' },
      { text: 'An external computer algorithm with no human input' }
    ],
    correctAnswer: 0
  },
  {
    id: 'hr_tech_13',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Attrition Rate Calculation',
    question: 'If Echaar started the year with 500 employees, ended with 540 employees (Average 520), and 26 employees resigned during the year, what is the annual employee attrition rate?',
    options: [
      { text: '5.0% ($[26 / 520] \\times 100\\%$)' },
      { text: '26%' },
      { text: '12.5%' },
      { text: '1.2%' }
    ],
    correctAnswer: 0 // Attrition Rate = (Separations / Average Headcount) * 100 = (26 / 520) * 100 = 5.0%
  },
  {
    id: 'hr_tech_14',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'Employee State Insurance (ESI) Contribution Rates',
    question: 'What are the current revised statutory ESI contribution rates payable by the employee and employer respectively?',
    options: [
      { text: '0.75% by Employee and 3.25% by Employer (Total 4.0%)' },
      { text: '1.75% by Employee and 4.75% by Employer' },
      { text: '5% by Employee and 5% by Employer' },
      { text: '0% by Employee and 10% by Employer' }
    ],
    correctAnswer: 0 // Revised in 2019: Employee 0.75%, Employer 3.25%
  },
  {
    id: 'hr_tech_15',
    roleId: 'intern_hr',
    section: 'field',
    type: 'objective',
    title: 'SMART Goal Framework in Performance Management',
    question: 'In HR goal setting, what does the acronym SMART stand for?',
    options: [
      { text: 'Specific, Measurable, Achievable, Relevant, Time-bound' },
      { text: 'Speed, Money, Attitude, Respect, Technology' },
      { text: 'Salary, Management, Attendance, Review, Termination' },
      { text: 'Simple, Mild, Average, Routine, Temporary' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'hr_prob_1',
    roleId: 'intern_hr',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Managing High Shopfloor Absenteeism During Critical Dispatch',
    scenario: 'During the peak dispatch week of a major export flexo press, 6 out of 14 skilled machine assembly fitters take unscheduled leave after a local festival, threatening to halt final machine wiring and alignment.',
    question: 'How do you structure an urgent staffing recovery plan while upholding labor regulations?',
    options: [
      { text: 'Coordinate with production supervisors to execute cross-skilled deployment (reassign qualified sub-assembly technicians and maintenance fitters to critical path assembly); verify voluntary overtime willingness with compensation at statutory 2x overtime rates; contact approved industrial apprenticeship pools for material staging support.', effectivenessScore: 1.0 },
      { text: 'Force remaining workers to work 36 continuous hours without sleep or food.', effectivenessScore: 0.1 },
      { text: 'Fire all 6 absent fitters immediately on the spot without notice.', effectivenessScore: 0.1 },
      { text: 'Shut down the plant and cancel the export contract.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates cross-skill matrix redeployment, voluntary overtime compliance (2x rate under Factories Act), and practical contingency staffing.'
  },
  {
    id: 'hr_prob_2',
    roleId: 'intern_hr',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Anonymous Grievance Concerning Favoritism in Shift Allocation',
    scenario: 'An anonymous note in the HR suggestion box claims that a machine shop supervisor systematically assigns the lucrative overtime weekend shifts and new CNC machines only to operators from their own community, while assigning difficult manual deburring to others.',
    question: 'What is your objective HR investigation and resolution process?',
    options: [
      { text: 'Conduct an objective data audit: pull past 3 months of biometric attendance and overtime distribution records to mathematically verify if overtime disparity exists; interview multiple team members neutrally; if disparity is verified, implement a transparent rotating roster for machine allocation and overtime with HOD sign-off.', effectivenessScore: 1.0 },
      { text: 'Throw the anonymous letter in the trash because it was not signed.', effectivenessScore: 0.2 },
      { text: 'Publicly accuse the supervisor in the morning briefing without checking any attendance data.', effectivenessScore: 0.1 },
      { text: 'Cancel all overtime for all workers forever.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Evaluates fact-based grievance investigation, data auditing of overtime rosters, fairness, and systematic roster transparency.'
  },
  {
    id: 'hr_prob_3',
    roleId: 'intern_hr',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Designing an Effective Apprenticeship Induction for 15 Trainees',
    scenario: 'Echaar inducts 15 new ITI/Diploma apprentice technicians who have zero prior factory experience. The shop floor contains heavy overhead cranes, 415V electrical panels, and rotating machine trials.',
    question: 'How do you design their first 5-day safety and foundational induction module?',
    options: [
      { text: 'Design a structured 5-day module: Day 1: Company culture, PPE fitment, and emergency exits; Day 2: Hazard identification (pinch points, lock-out/tag-out, crane swing zones); Day 3: Blueprint reading and metrology tool care; Day 4: Hands-on shadowing with designated senior mentor fitters; Day 5: Safety comprehension evaluation before floor access.', effectivenessScore: 1.0 },
      { text: 'Send them directly to operate the 5-axis CNC machine on Day 1 without safety goggles.', effectivenessScore: 0.1 },
      { text: 'Give them a 500-page book to read in a room and leave them unmonitored all week.', effectivenessScore: 0.1 },
      { text: 'Tell them to watch YouTube videos at home.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Assesses foundational onboarding, workshop hazard containment, buddy/mentorship pairing, and safety readiness verification.'
  },
  {
    id: 'hr_prob_4',
    roleId: 'intern_hr',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Niche Sourcing for Precision Machine Scraping & Alignment Craftsmen',
    scenario: 'Echaar needs to recruit 3 master machine fitters skilled in traditional precision hand scraping of machine slideways to achieve sub-micron oil retention pockets. Standard job portals (Naukri/LinkedIn) have yielded zero qualified applicants for 6 weeks.',
    question: 'What creative and targeted sourcing channels do you deploy?',
    options: [
      { text: 'Deploy specialized industrial talent sourcing: partner with regional machine tool training institutes (e.g. NTTF, Advanced Training Institutes / NSTI), reach out through employee referral campaigns offering incentives to senior toolmakers, visit industrial clusters (Rajkot, Pune, Thane) machine tool guilds, and engage technical trade forums.', effectivenessScore: 1.0 },
      { text: 'Keep posting on LinkedIn 50 times a day with no changes.', effectivenessScore: 0.2 },
      { text: 'Tell the Managing Director that machine tool scraping is extinct and impossible to find.', effectivenessScore: 0.1 },
      { text: 'Hire random unqualified workers and hope they figure out hand scraping.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates specialized niche sourcing for precision crafts: NSTI/NTTF institutes, guild networks, industrial clusters, and employee referrals.'
  },
  {
    id: 'hr_prob_5',
    roleId: 'intern_hr',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Resolving a Biometric Night-Shift Attendance Dispute',
    scenario: 'An assembly technician’s salary was deducted for 1 day of absence. The technician insists they worked a full 12-hour night shift on the 14th, but forgot to punch out in the morning due to exhaustion. The supervisor vaguely remembers seeing them.',
    question: 'How do you investigate and regularize this attendance discrepancy fairly?',
    options: [
      { text: 'Cross-verify corroborating physical evidence: inspect security gate register logs, canteen dinner logs, and CCTV footage from the assembly bay for the night of the 14th; verify the supervisor’s formal shift endorsement, and submit an attendance regularization slip to accounts before payroll cutoff.', effectivenessScore: 1.0 },
      { text: 'Refuse to help and tell the technician that if they forgot to punch, their money is gone forever.', effectivenessScore: 0.1 },
      { text: 'Credit 5 extra days of salary to the technician without checking any records.', effectivenessScore: 0.1 },
      { text: 'Accuse the technician of lying without checking security CCTV.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests fair evidentiary investigation: CCTV verification, security logs, supervisor endorsement, and timely payroll regularization.'
  }
];
