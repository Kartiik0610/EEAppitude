/**
 * 30 Questions for Intern Engineer
 * Echaar Equipments Pvt. Ltd.
 */

export const internEngQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'int_eng_gen_1',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Eagerness to Learn on Shopfloor Assignment',
    question: 'On your first week as an engineering intern at Echaar, you are assigned to shadow an experienced assembly technician building an ink circulation pump rig. What is your best learning strategy?',
    options: [
      { text: 'Keep an engineering pocket notebook; observe assembly sequence, ask respectful questions during pauses, sketch piping layouts, and offer to assist with staging tools.', scoreMultiplier: 1.0 },
      { text: 'Sit on a chair in the corner looking at social media on your mobile phone.', scoreMultiplier: 0.1 },
      { text: 'Pretend you already know everything because you studied thermodynamics in college.', scoreMultiplier: 0.2 },
      { text: 'Disappear to the canteen for 3 hours without telling anyone.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_2',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Personal Protective Equipment (PPE) Compliance',
    question: 'You are walking from the design office across the heavy fabrication and machining bay to deliver a drawing. What PPE is mandatory?',
    options: [
      { text: 'Safety helmet, safety shoes with steel toe caps, eye protection goggles, and hearing protection where noise levels are high.', scoreMultiplier: 1.0 },
      { text: 'Open sandals, shorts, and loose headphones.', scoreMultiplier: 0.1 },
      { text: 'PPE is only required if someone is actively watching you.', scoreMultiplier: 0.1 },
      { text: 'Only a wristwatch.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_3',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Uncertainty in Tasks',
    question: 'A senior engineer asks you to "measure the backlash on Deck #3 spur gear train" using a dial indicator, but you have never performed this measurement practically before. What do you do?',
    options: [
      { text: 'Honesty and initiative: state that you understand the theoretical concept of backlash, ask the senior engineer or technician for a 5-minute demonstration of proper magnetic base indicator setup, and perform the measurement under observation.', scoreMultiplier: 1.0 },
      { text: 'Guess a random number like 0.05 mm and write it on the sheet without measuring.', scoreMultiplier: 0.1 },
      { text: 'Pretend you forgot about the task and avoid the engineer.', scoreMultiplier: 0.1 },
      { text: 'Hammer the gears with a screwdriver to see if they move.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_4',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Punctuality & Shift Discipline',
    question: 'The plant morning production briefing starts promptly at 8:30 AM every day. What is your punctuality habit?',
    options: [
      { text: 'Arrive by 8:15 AM, don PPE, review your task list from the previous day, and participate actively in the briefing.', scoreMultiplier: 1.0 },
      { text: 'Walk in casually at 9:00 AM with coffee.', scoreMultiplier: 0.1 },
      { text: 'Arrive on time once a week and be late the remaining four days.', scoreMultiplier: 0.2 },
      { text: 'Skip the morning briefing because you find meetings boring.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_5',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Documentation of Test Results',
    question: 'While assisting with pneumatic pressure decay testing on cylinder circuits, one circuit drops 0.4 bar over 10 minutes instead of the allowable 0.1 bar. What do you do?',
    options: [
      { text: 'Accurately record the 0.4 bar reading in the test log, highlight it in red, and inform the test supervisor so the leak can be pinpointed using soapy water solution.', scoreMultiplier: 1.0 },
      { text: 'Falsify the reading to 0.1 bar so the sheet looks clean and passes.', scoreMultiplier: 0.1 },
      { text: 'Tear up the test sheet and throw it in the trash.', scoreMultiplier: 0.1 },
      { text: 'Pretend you did not see the pressure gauge needle move.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_6',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Housekeeping at the Workbench (5S)',
    question: 'At the end of your day’s assembly experimentation, the workbench is covered with sockets, vernier calipers, hex wrenches, and wiping rags. What do you do before leaving?',
    options: [
      { text: 'Spend 10 minutes cleaning measuring instruments, wiping oil, returning all tools to their designated shadow board slots, and wiping down the work surface.', scoreMultiplier: 1.0 },
      { text: 'Leave everything scattered on the bench for the night shift to clean up.', scoreMultiplier: 0.1 },
      { text: 'Push all tools into the scrap bin under the bench.', scoreMultiplier: 0.1 },
      { text: 'Take the company calipers home in your backpack.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_7',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Receptivity to Constructive Feedback',
    question: 'A mentor points out that your CAD 2D drawing projection view is missing critical datum dimensions and centerlines. How do you respond?',
    options: [
      { text: 'Thank the mentor for the guidance, take detailed notes on the missing elements, study standard ISO 128 drawing practices, and correct the drawing promptly.', scoreMultiplier: 1.0 },
      { text: 'Get defensive and argue that drawing standards are outdated.', scoreMultiplier: 0.2 },
      { text: 'Ignore the feedback and send the defective drawing directly to manufacturing.', scoreMultiplier: 0.1 },
      { text: 'Complain to HR that the mentor is being mean to you.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_8',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Safety Awareness Regarding Rotating Machinery',
    question: 'You are asked to observe a test run of a newly wired motor and roller shaft rotating at 1500 RPM. What safety precaution is paramount?',
    options: [
      { text: 'Ensure loose clothing, long hair, jewelry, and id-card lanyards are securely tucked in, maintain a safe distance outside the rotation radius, and never reach over moving parts.', scoreMultiplier: 1.0 },
      { text: 'Touch the rotating shaft with your bare hand to feel if it is smooth.', scoreMultiplier: 0.1 },
      { text: 'Lean directly over the rotating shaft with a loose necktie or scarf.', scoreMultiplier: 0.1 },
      { text: 'Drop metal objects near the coupling to see what happens.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_9',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Initiative & Proactivity',
    question: 'You finish your assigned task of checking 20 bracket dimensions 2 hours before the end of the shift. What is your best course of action?',
    options: [
      { text: 'Inform your supervising engineer that the task is complete, submit the inspection data, and ask where you can assist next (e.g. 3D modeling assistance, shopfloor sub-assembly support).', scoreMultiplier: 1.0 },
      { text: 'Sneak out of the factory gate early without telling anyone.', scoreMultiplier: 0.1 },
      { text: 'Hide in the restroom for the remaining 2 hours.', scoreMultiplier: 0.1 },
      { text: 'Distract other technicians who are working on precision machine fits.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'int_eng_gen_10',
    roleId: 'intern_eng',
    section: 'general',
    type: 'behavioral',
    title: 'Curiosity About Equipment Operations',
    question: 'Why is spending time observing actual machine assembly and operation at Echaar valuable for an aspiring design or production engineer?',
    options: [
      { text: 'It connects theoretical classroom formulas to physical engineering realities: clearances, tool access space, assembly ergonomics, and practical manufacturing challenges.', scoreMultiplier: 1.0 },
      { text: 'It has no value; engineers only need to look at computer screens.', scoreMultiplier: 0.2 },
      { text: 'Only to collect an internship certificate to put on a resume.', scoreMultiplier: 0.2 },
      { text: 'To avoid doing any academic coursework.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'int_eng_tech_1',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Engineering Drawing Projection: Third Angle Symbol',
    question: 'In engineering drawing standards in India (BIS) and international ISO standards, what does the truncated cone symbol in the drawing title block represent?',
    options: [
      { text: 'Third Angle Projection (or First Angle Projection depending on cone and circle orientation)' },
      { text: 'The manufacturer’s ice cream brand' },
      { text: 'A megaphone used for factory announcements' },
      { text: 'The weight of the drawing paper' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_2',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Vernier Caliper Least Count',
    question: 'If the main scale of a metric vernier caliper has 1 mm divisions and the vernier scale has 50 divisions matching 49 main scale divisions, what is the least count of the caliper?',
    options: [
      { text: '0.02 mm ($1 / 50$)' },
      { text: '0.1 mm' },
      { text: '0.5 mm' },
      { text: '0.001 mm' }
    ],
    correctAnswer: 0 // Least Count = 1 MSD - 1 VSD = 1 - 49/50 = 1/50 = 0.02 mm
  },
  {
    id: 'int_eng_tech_3',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Stress and Strain: Young’s Modulus',
    question: 'According to Hooke’s Law within the elastic limit, how is Young’s Modulus of Elasticity ($E$) defined?',
    options: [
      { text: 'Tensile Stress divided by Tensile Strain ($\\sigma / \\epsilon$)' },
      { text: 'Shear Stress divided by Shear Strain' },
      { text: 'Total Force multiplied by Area' },
      { text: 'Weight divided by Density' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_4',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Bolt Grade Marking: Grade 8.8',
    question: 'On the head of a high-tensile steel hexagon bolt marked "8.8", what does the first number "8" signify?',
    options: [
      { text: 'Nominal ultimate tensile strength of $800\\text{ N/mm}^2$ ($8 \\times 100$)' },
      { text: 'The bolt length is 8 inches' },
      { text: 'The thread pitch is 8 mm' },
      { text: 'The bolt costs 8 rupees' }
    ],
    correctAnswer: 0 // First digit * 100 = 800 MPa tensile strength. Second digit: 0.8 * 800 = 640 MPa yield strength.
  },
  {
    id: 'int_eng_tech_5',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Outside Micrometer Zero Error Correction',
    question: 'When the anvils of an outside micrometer are brought into contact, the zero line on the thimble is 2 divisions above the datum index line (+0.02 mm positive zero error). If an object reads 25.46 mm, what is the true corrected dimension?',
    options: [
      { text: '25.44 mm ($25.46 - 0.02$)' },
      { text: '25.48 mm' },
      { text: '27.46 mm' },
      { text: '25.00 mm' }
    ],
    correctAnswer: 0 // True Value = Observed Reading - (Zero Error) = 25.46 - (+0.02) = 25.44 mm
  },
  {
    id: 'int_eng_tech_6',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Mechanical Advantage of Simple Screw Jack',
    question: 'Why can a mechanical screw jack lift a multi-ton printing press frame with modest manual handle torque?',
    options: [
      { text: 'A small lead / pitch transforms rotational distance into very small axial displacement, creating a massive mechanical advantage' },
      { text: 'The screw creates free electrical energy' },
      { text: 'Friction in the screw makes the load weigh zero' },
      { text: 'Screw jacks only work on plastic objects' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_7',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Standard Pneumatic Line Pressure Units',
    question: 'In workshop pneumatic systems, compressed air pressure is commonly specified as "6 bar". What is this equivalent to in Pascals (SI unit)?',
    options: [
      { text: '$600,000\\text{ Pa } (0.6\\text{ MPa})$' },
      { text: '$60\\text{ Pa}$' },
      { text: '$6,000,000\\text{ Pa}$' },
      { text: '$6\\text{ Pa}$' }
    ],
    correctAnswer: 0 // 1 bar = 100,000 Pa = 10^5 Pa -> 6 bar = 600,000 Pa = 0.6 MPa
  },
  {
    id: 'int_eng_tech_8',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Identification of Standard Fasteners: Spring Washers',
    question: 'What is the primary mechanical purpose of placing a split helical spring washer under the nut of a vibrating machine bracket?',
    options: [
      { text: 'To maintain residual axial tension and provide biting edges into mating surfaces to prevent loosening under dynamic vibration' },
      { text: 'To make the nut look shiny' },
      { text: 'To permanently glue the bolt to the frame' },
      { text: 'To act as an electrical insulator' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_9',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Basic Heat Transfer Mechanisms',
    question: 'In the drying tunnel of a printing machine, heat is transferred from the circulating hot air stream to the wet ink on the moving film primarily by which mechanism?',
    options: [
      { text: 'Forced Convection' },
      { text: 'Nuclear Fission' },
      { text: 'Static Friction' },
      { text: 'Magnetic Induction' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_10',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Steel Composition: Carbon Content of Mild Steel',
    question: 'What is the approximate carbon content of standard commercial Mild Steel (IS 2062 / AISI 1018) commonly used for machine fabrication frames?',
    options: [
      { text: '0.15% to 0.25% carbon' },
      { text: '4.5% to 6.0% carbon' },
      { text: '0.00% (pure carbon-free)' },
      { text: '50% carbon' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_11',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Hydraulic vs Pneumatic Working Medium',
    question: 'What fundamental physical property makes hydraulic fluid systems capable of transmitting vastly higher forces with rigid, non-spongy positioning compared to pneumatic systems?',
    options: [
      { text: 'Liquids (hydraulic oil) are essentially incompressible, whereas gases (air) are highly compressible' },
      { text: 'Hydraulic oil is lighter than air' },
      { text: 'Compressed air has zero temperature' },
      { text: 'Hydraulics does not require pumps' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_12',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Spur Gear Terminology: Diametral Pitch vs Module',
    question: 'In metric gear design, how is the "Module" ($m$) of a spur gear defined in terms of pitch circle diameter ($d$ in mm) and number of teeth ($Z$)?',
    options: [
      { text: '$m = d / Z$' },
      { text: '$m = Z / d$' },
      { text: '$m = d \\times Z$' },
      { text: '$m = \\pi \\times d$' }
    ],
    correctAnswer: 0 // Module m = Pitch Circle Diameter / Number of Teeth = d / Z
  },
  {
    id: 'int_eng_tech_13',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Tapping Blind Holes: Chamfer Lead of Taps',
    question: 'When manually tapping internal threads in a blind hole, which tap is used last to cut full threads all the way down near the bottom of the hole?',
    options: [
      { text: 'Bottoming Tap (Plug Tap with short 1-1.5 thread chamfer)' },
      { text: 'Taper Tap (with long 8-10 thread chamfer)' },
      { text: 'A twist drill bit' },
      { text: 'A center punch' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_14',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Electrical Safety: Earthing / Grounding',
    question: 'Why must all metallic electrical cabinets and machine frames at Echaar have solid copper earthing connections to the earth pit?',
    options: [
      { text: 'To safely divert fault leakage current to earth and trigger circuit breakers, preventing fatal electrical shocks to operators in case of insulation breakdown' },
      { text: 'To help the machine run faster' },
      { text: 'To keep the machine cool' },
      { text: 'To act as an antenna for Wi-Fi' }
    ],
    correctAnswer: 0
  },
  {
    id: 'int_eng_tech_15',
    roleId: 'intern_eng',
    section: 'field',
    type: 'objective',
    title: 'Feeler Gauge Usage in Machine Assembly',
    question: 'What is a multi-blade steel Feeler Gauge used for during machine alignment?',
    options: [
      { text: 'Measuring narrow clearance gaps, backlash, and shim thicknesses between mating mechanical faces' },
      { text: 'Cutting electrical wires' },
      { text: 'Prying open wooden crates' },
      { text: 'Scraping paint off machine frames' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'int_eng_prob_1',
    roleId: 'intern_eng',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Interpreting an Assembly Drawing Cross-Section',
    scenario: 'You are studying an assembly drawing of a printing cylinder bearing assembly. The drawing shows two angular contact bearings mounted in a "Back-to-Back" (DB) arrangement, but the bill of materials does not specify which way the wide outer ring faces should point.',
    question: 'How do you verify the correct physical mounting orientation of back-to-back angular contact bearings?',
    options: [
      { text: 'Check bearing load lines: in Back-to-Back (DB) arrangement, the contact lines diverge outward towards the shaft axis, meaning the wide outer ring backs face each other, providing high moment rigidity; verify with bearing catalog and mentor.', effectivenessScore: 1.0 },
      { text: 'Mount both bearings facing in the exact same direction randomly.', effectivenessScore: 0.2 },
      { text: 'Throw away one bearing and only use one.', effectivenessScore: 0.1 },
      { text: 'Hammer them into the housing without checking the drawing.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates reading technical bearing catalogs, understanding contact angles and DB mounting rigidity.'
  },
  {
    id: 'int_eng_prob_2',
    roleId: 'intern_eng',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Pneumatic Drill Stalls During Bracket Drilling',
    scenario: 'While drilling 8 mm holes in a mild steel bracket, the pneumatic hand drill repeatedly loses speed and stalls the moment it contacts the workpiece, even though the main shop air compressor is running.',
    question: 'What basic troubleshooting checks do you perform to diagnose the problem?',
    options: [
      { text: 'Check the air line pressure regulator and filter bowl for water clogging, inspect the quick-connect coupler for air restriction, check if the drill motor needs pneumatic tool oil, and inspect if the drill bit is dull or rotating in reverse.', effectivenessScore: 1.0 },
      { text: 'Hit the pneumatic drill against a steel table to force it to run.', effectivenessScore: 0.1 },
      { text: 'Keep drilling until the drill bit melts from friction.', effectivenessScore: 0.1 },
      { text: 'Tell the supervisor that steel cannot be drilled.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Assesses practical workshop problem-solving: air supply pressure, lubrication, line restriction, and drill bit condition.'
  },
  {
    id: 'int_eng_prob_3',
    roleId: 'intern_eng',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Stuck M12 Fastener in Tapped Machine Base',
    scenario: 'When manually assembling an M12 x 40 mm socket head cap screw into a tapped hole on the cast iron machine base, the bolt binds tightly after only 2 turns by hand and will not advance further.',
    question: 'What is the correct engineering procedure to resolve this without snapping the bolt?',
    options: [
      { text: 'Stop turning immediately; back out the screw, inspect threads for burrs, chips, or weld spatter inside the tapped hole, clean with a thread tap (M12 chase tap) and compressed air, and verify thread pitch (1.75 mm coarse vs 1.25 mm fine).', effectivenessScore: 1.0 },
      { text: 'Use a 3-foot pipe extension on the Allen key to forcefully wrench the bolt down until it snaps.', effectivenessScore: 0.1 },
      { text: 'Hit the bolt head with a 5 kg sledgehammer.', effectivenessScore: 0.1 },
      { text: 'Cut off the top of the bolt with an angle grinder and pretend it is tight.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests mechanical assembly instincts, thread pitch verification, avoiding thread galling, and using chase taps.'
  },
  {
    id: 'int_eng_prob_4',
    roleId: 'intern_eng',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Eliminating Tool Clutter on Assembly Floor (5S Project)',
    scenario: 'Your supervisor assigns you an intern Kaizen project: technicians on the flexo deck assembly line spend an estimated 35 minutes per shift looking for missing hex wrenches, copper mallets, and torque sockets.',
    question: 'How do you design and execute a low-cost, high-impact 5S solution for the assembly bay?',
    options: [
      { text: 'Create standardized shadow tool boards / mobile kitting trolleys with foam cutouts for each designated tool, label slots clearly, implement end-of-shift 3-minute visual audits, and locate them within arm’s reach of assembly stations.', effectivenessScore: 1.0 },
      { text: 'Buy 500 extra sets of tools and dump them in a giant pile on the floor.', effectivenessScore: 0.2 },
      { text: 'Lock all tools in an office and require written management permission for every wrench.', effectivenessScore: 0.1 },
      { text: 'Do nothing because tool searching is a traditional workshop custom.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates understanding of 5S visual management, shadow boards, point-of-use ergonomics, and eliminating non-value-added motion.'
  },
  {
    id: 'int_eng_prob_5',
    roleId: 'intern_eng',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Investigating Oil Drips Beneath Hydraulic Test Rig',
    scenario: 'You notice a slow puddle of ISO VG 46 hydraulic oil forming beneath a hydraulic clamping test bench. The pump and valves appear clean from the top.',
    question: 'How do you locate and report the exact source of this leak safely?',
    options: [
      { text: 'Depressurize and lock out the hydraulic circuit; thoroughly wipe clean all hoses, fittings, and manifolds with dry rags; re-pressurize safely from a distance and use cardboard or dry paper (NEVER bare fingers near high-pressure pinhole jets) to locate the seep; record and notify the technician.', effectivenessScore: 1.0 },
      { text: 'Run your bare hands along the high-pressure hydraulic hoses while the pump is running at 200 bar.', effectivenessScore: 0.1 },
      { text: 'Throw sawdust over the oil and never tell anyone about the leak.', effectivenessScore: 0.1 },
      { text: 'Ignite a lighter under the hoses to see if it catches fire.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Evaluates critical fluid power safety (fluid injection injury hazard), clean-and-inspect diagnostic methodology, and lockout-tagout awareness.'
  }
];
