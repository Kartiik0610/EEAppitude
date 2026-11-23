/**
 * 30 Questions for Graduate Engineer Trainee (GET)
 * Tailored for Echaar Equipments Pvt. Ltd.
 * Multi-parameter weighting: Design, Production, PPC, Quality, Tech Marketing
 */

export const getQuestions = [
  // SECTION 1: 10 GENERAL & BEHAVIORAL QUESTIONS (Trait/Alignment Scored)
  {
    id: 'get_gen_1',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Workplace Discrepancy & Engineering Integrity',
    question: 'During an assembly pre-dispatch check of a newly fabricated equipment frame, you notice a minor weld undercut that was missed by the initial check sheet. The dispatch truck is already waiting at the loading dock. What is your primary reaction?',
    options: [
      { text: 'Immediately alert the Quality & Assembly heads, halt dispatch, and perform an NDT/visual assessment to ensure zero defect release.', scoreMultiplier: 1.0, weights: { quality: 1.0, production: 0.5 } },
      { text: 'Quickly evaluate the structural stress location against the engineering drawing to determine if it is in a non-critical load zone before making a call.', scoreMultiplier: 0.95, weights: { design: 1.0, quality: 0.6 } },
      { text: 'Coordinate with the dispatch coordinator to delay the transport window while having a welder quickly grind and touch-up the spot within 20 minutes.', scoreMultiplier: 0.85, weights: { ppc: 0.9, production: 0.8 } },
      { text: 'Inform the customer relationship team that a minor delay is expected for technical compliance and re-verify client tolerance expectations.', scoreMultiplier: 0.75, weights: { tech_marketing: 0.9, quality: 0.4 } }
    ],
    weights: { quality: 0.8, design: 0.6, production: 0.5, ppc: 0.5, tech_marketing: 0.3 }
  },
  {
    id: 'get_gen_2',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Curiosity & Machine Disassembly Instinct',
    question: 'When you are introduced to an advanced multi-color Central Impression (CI) Flexographic printing machine at Echaar, what aspect naturally draws your highest intellectual interest first?',
    options: [
      { text: 'The precise kinematic gear train, servo drive synchronization, and FEA vibration damping of the central impression drum.', scoreMultiplier: 1.0, weights: { design: 1.0, quality: 0.3 } },
      { text: 'How the heavy frames and high-precision anilox mandrels are machined on 5-axis CNCs and assembled with tight sub-micron clearances.', scoreMultiplier: 1.0, weights: { production: 1.0, quality: 0.4 } },
      { text: 'The master production schedule, component routing, lead time of imported servo drives, and bill-of-materials tracking.', scoreMultiplier: 0.9, weights: { ppc: 1.0, production: 0.4 } },
      { text: 'The precision metrology equipment, dynamic run-out measurement sensors, and print registration consistency tests.', scoreMultiplier: 0.95, weights: { quality: 1.0, design: 0.4 } }
    ],
    weights: { design: 0.7, production: 0.7, ppc: 0.6, quality: 0.6, tech_marketing: 0.4 }
  },
  {
    id: 'get_gen_3',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Approach to Unfamiliar Technical Problems',
    question: 'You are tasked with troubleshooting an intermittent pressure drop in a pneumatic doctor blade system during trial runs. How do you start?',
    options: [
      { text: 'Review the pneumatic schematic, calculate expected line pressure drops, and model fluid dynamics through the manifolds.', scoreMultiplier: 0.95, weights: { design: 1.0, quality: 0.4 } },
      { text: 'Walk to the shop floor, inspect the physical airline connectors, check the solenoid valves, and speak with the technician operating the rig.', scoreMultiplier: 1.0, weights: { production: 1.0, quality: 0.5 } },
      { text: 'Set up calibrated digital pressure gauges at multiple test points, record data over 50 cycles, and create a statistical variance chart.', scoreMultiplier: 1.0, weights: { quality: 1.0, ppc: 0.3 } },
      { text: 'Review the component supplier catalog, check warranty specifications, and discuss with the vendor technical sales representative.', scoreMultiplier: 0.8, weights: { tech_marketing: 0.9, ppc: 0.6 } }
    ],
    weights: { design: 0.6, production: 0.7, quality: 0.8, ppc: 0.4, tech_marketing: 0.5 }
  },
  {
    id: 'get_gen_4',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Prioritization Under Multiple Deadlines',
    question: 'You have three urgent assignments on the same afternoon: a CAD tolerance stack revision, a shop-floor machine run report, and an ERP inventory reconciliation. How do you handle them?',
    options: [
      { text: 'Establish a priority matrix based on manufacturing critical path: address the task stopping production first, then dispatch CAD and ERP.', scoreMultiplier: 1.0, weights: { ppc: 1.0, production: 0.8 } },
      { text: 'Complete the CAD tolerance stackup first because errors in design propagate downstream to all manufacturing and inspection.', scoreMultiplier: 0.9, weights: { design: 1.0, quality: 0.5 } },
      { text: 'Review all three tasks with your mentor/department manager, communicate realistic completion times, and delegate sub-checks if possible.', scoreMultiplier: 0.85, weights: { tech_marketing: 0.7, ppc: 0.8 } },
      { text: 'Ensure the shop-floor machine run has strict quality checks recorded before handing off, then systematically close the rest.', scoreMultiplier: 0.9, weights: { quality: 0.9, production: 0.7 } }
    ],
    weights: { ppc: 0.9, production: 0.7, design: 0.6, quality: 0.6, tech_marketing: 0.5 }
  },
  {
    id: 'get_gen_5',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Customer Application & Requirement Clarity',
    question: 'A client purchasing an Echaar converting machine requests a 20% increase in maximum web speed beyond standard catalog rating. What is your fundamental mindset?',
    options: [
      { text: 'Analyze client substrate thickness, tension requirements, and operational savings to determine if a premium custom drive package is commercially viable.', scoreMultiplier: 1.0, weights: { tech_marketing: 1.0, design: 0.5 } },
      { text: 'Simulate the critical speed of rotating rollers, bearing DN values, and dynamic balance thresholds to see if it is technically feasible.', scoreMultiplier: 1.0, weights: { design: 1.0, quality: 0.4 } },
      { text: 'Evaluate machine safety factors, vibration limits, and test protocols needed to guarantee zero risk of web tear or component failure.', scoreMultiplier: 0.95, weights: { quality: 1.0, design: 0.5 } },
      { text: 'Check if the existing CNC machining and balancing machines on our floor can manufacture high-speed balanced rollers without bottlenecking current orders.', scoreMultiplier: 0.85, weights: { production: 0.8, ppc: 0.9 } }
    ],
    weights: { tech_marketing: 0.9, design: 0.8, quality: 0.7, ppc: 0.6, production: 0.5 }
  },
  {
    id: 'get_gen_6',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Team Collaboration on the Shop Floor',
    question: 'A senior shop-floor technician with 20 years of experience disagrees with your theoretical calculation of machining feed and speed on a tough alloy steel workpiece. How do you proceed?',
    options: [
      { text: 'Respectfully listen to the technician’s practical experience, run a controlled test coupon at their proposed parameters, observe tool wear together, and compare results.', scoreMultiplier: 1.0, weights: { production: 1.0, quality: 0.7 } },
      { text: 'Re-verify your mathematical formulas, tooling manufacturer cutting data sheets, and tool geometry to find where theory and practice diverge.', scoreMultiplier: 0.9, weights: { design: 0.9, production: 0.6 } },
      { text: 'Take calibrated surface roughness and cycle time measurements of both approaches to document the optimal standard operating procedure.', scoreMultiplier: 0.95, weights: { quality: 1.0, ppc: 0.6 } },
      { text: 'Look at the overall assembly delivery timeline to ensure the experimentation does not cause an unexpected bottleneck on the CNC horizontal boring mill.', scoreMultiplier: 0.85, weights: { ppc: 1.0, production: 0.6 } }
    ],
    weights: { production: 0.9, quality: 0.8, design: 0.6, ppc: 0.7, tech_marketing: 0.4 }
  },
  {
    id: 'get_gen_7',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Safety Culture & Compliance Mindset',
    question: 'While observing an unguarded temporary coupling test during a high-speed machine rotation trial, you notice technicians standing within the throw zone. What do you do?',
    options: [
      { text: 'Immediately instruct the team to halt the drive or hit emergency stop, explain the centrifugal projectile hazard, and install temporary safety shielding.', scoreMultiplier: 1.0, weights: { quality: 0.9, production: 0.9 } },
      { text: 'Check the safety risk assessment and mechanical guard design specifications to ensure permanent interlocked enclosures are retrofitted before any further testing.', scoreMultiplier: 0.95, weights: { design: 1.0, quality: 0.7 } },
      { text: 'Log an immediate safety non-conformance report and initiate a Root Cause & Corrective Action (CAPA) protocol with the plant safety officer.', scoreMultiplier: 0.9, weights: { quality: 1.0, ppc: 0.5 } },
      { text: 'Organize an immediate 5-minute safety huddle with the assembly supervisor to adjust the test protocol without disrupting the day’s production schedule.', scoreMultiplier: 0.85, weights: { ppc: 0.8, production: 0.8 } }
    ],
    weights: { quality: 0.9, production: 0.8, design: 0.7, ppc: 0.5, tech_marketing: 0.3 }
  },
  {
    id: 'get_gen_8',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Continuous Improvement & Waste Elimination (Lean/Kaizen)',
    question: 'When analyzing the assembly bay of large flexo printing presses, you observe fitters repeatedly walking 40 meters to fetch custom shims and hex keys. Your immediate impulse is:',
    options: [
      { text: 'Design a standardized shadow-board mobile trolley positioned at the point-of-use (5S methodology) to cut non-value-added motion waste.', scoreMultiplier: 1.0, weights: { production: 1.0, ppc: 0.8 } },
      { text: 'Analyze whether standardizing the fasteners and joint tolerances in the 3D CAD design can eliminate the need for shimming altogether.', scoreMultiplier: 1.0, weights: { design: 1.0, quality: 0.6 } },
      { text: 'Conduct a time-and-motion study, calculate the man-hour cost lost per machine, and incorporate standard kitting into the ERP bill-of-materials.', scoreMultiplier: 0.95, weights: { ppc: 1.0, tech_marketing: 0.4 } },
      { text: 'Inspect the thickness variation of the shims to ensure that non-standard shimming is not introducing pre-load distortion into the machine frame.', scoreMultiplier: 0.9, weights: { quality: 1.0, design: 0.5 } }
    ],
    weights: { production: 0.8, design: 0.8, ppc: 0.8, quality: 0.6, tech_marketing: 0.4 }
  },
  {
    id: 'get_gen_9',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Customer Empathy & Post-Commissioning Support',
    question: 'During machine installation at a client plant in another city, the client’s plant manager is agitated because initial print trials show a slight ink smearing. You are the on-site engineering representative. What is your stance?',
    options: [
      { text: 'Calm the client with confident, respectful communication, systematically explain the tuning process, and work alongside their operators until perfect print is demonstrated.', scoreMultiplier: 1.0, weights: { tech_marketing: 1.0, quality: 0.7 } },
      { text: 'Inspect ink viscosity, drying tunnel temperature, web surface energy (dyne level), and plate cylinder pressure to isolate the physical cause.', scoreMultiplier: 1.0, weights: { quality: 1.0, design: 0.7 } },
      { text: 'Check doctor blade angle, blade wear, and chamber seal seating on the inking system to rectify mechanical alignment immediately.', scoreMultiplier: 0.95, weights: { production: 0.9, design: 0.8 } },
      { text: 'Log the exact batch serial numbers of plates, tape, and substrate, and inform head-office PPC if replacement components or specialized consumables are needed.', scoreMultiplier: 0.85, weights: { ppc: 0.9, quality: 0.6 } }
    ],
    weights: { tech_marketing: 0.9, quality: 0.8, production: 0.7, design: 0.6, ppc: 0.6 }
  },
  {
    id: 'get_gen_10',
    roleId: 'get',
    section: 'general',
    type: 'behavioral',
    title: 'Career Trajectory & Engineering Passion',
    question: 'Where do you envision yourself delivering the greatest long-term impact in a heavy industrial machinery manufacturing company like Echaar?',
    options: [
      { text: 'Leading groundbreaking mechanical innovations, patents, and high-precision CAD architectures for next-generation automated machinery.', scoreMultiplier: 1.0, weights: { design: 1.0 } },
      { text: 'Mastering high-efficiency smart manufacturing, CNC automation, shop-floor lean transformations, and flawless assembly execution.', scoreMultiplier: 1.0, weights: { production: 1.0 } },
      { text: 'Architecting resilient supply chains, ERP precision, synchronous scheduling, and zero-delay project delivery systems.', scoreMultiplier: 1.0, weights: { ppc: 1.0 } },
      { text: 'Championing Six Sigma excellence, world-class ISO metrology, supplier quality development, and zero-defect product reliability.', scoreMultiplier: 1.0, weights: { quality: 1.0 } },
      { text: 'Expanding global market presence, architecting customized capital machinery solutions for enterprise clients, and driving revenue growth.', scoreMultiplier: 1.0, weights: { tech_marketing: 1.0 } }
    ],
    weights: { design: 0.8, production: 0.8, ppc: 0.8, quality: 0.8, tech_marketing: 0.8 }
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Technical/Objective Scored)
  {
    id: 'get_tech_1',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Shaft Torsional Rigidity & Deflection',
    question: 'In a high-speed printing machine drive line, the torsional deflection (twist angle $\\theta$) of a solid circular transmission shaft under applied torque $T$ is inversely proportional to which parameter?',
    options: [
      { text: 'Length of the shaft ($L$)' },
      { text: 'Polar moment of inertia ($J$) and Shear modulus ($G$)' },
      { text: 'Tensile yield strength ($S_y$)' },
      { text: 'Poisson’s ratio ($\\nu$)' }
    ],
    correctAnswer: 1, // Polar moment of inertia (J) and Shear modulus (G) [theta = TL / (GJ)]
    weights: { design: 1.0, quality: 0.3 }
  },
  {
    id: 'get_tech_2',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Central Impression (CI) Flexo Geometry',
    question: 'In a Central Impression (CI) Flexographic printing press, why are all color printing stations arranged radially around a single large, temperature-controlled backing drum?',
    options: [
      { text: 'To reduce the overall physical footprint of the factory floor' },
      { text: 'To maintain continuous web support and eliminate substrate elongation/register error between color decks on extensible films' },
      { text: 'To allow faster cleaning of ink chambers during color changeovers' },
      { text: 'To enable higher printing plate thickness tolerances' }
    ],
    correctAnswer: 1,
    weights: { design: 0.9, tech_marketing: 0.8, quality: 0.7 }
  },
  {
    id: 'get_tech_3',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'CNC Machining Cutting Parameters',
    question: 'When milling a high-tensile steel side-frame on a CNC machining center with a 100 mm diameter face mill at a recommended cutting speed $V_c$ of 150 m/min, what is the required spindle speed ($N$) in RPM? (Use $\\pi \\approx 3.14$)',
    options: [
      { text: 'Approximately 240 RPM' },
      { text: 'Approximately 477 RPM' },
      { text: 'Approximately 955 RPM' },
      { text: 'Approximately 1500 RPM' }
    ],
    correctAnswer: 1, // N = (1000 * 150) / (pi * 100) = 1500 / 3.1416 = ~477.5 RPM
    weights: { production: 1.0, design: 0.3 }
  },
  {
    id: 'get_tech_4',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'GD&T - Total Radial Runout',
    question: 'The engineering drawing for a CI flexo printing plate cylinder specifies a Total Radial Runout symbol (double arrow) of 0.005 mm relative to datum axis A-B. What does this inspect?',
    options: [
      { text: 'Only the roundness / circularity of the cylinder cross-section at a single fixed plane' },
      { text: 'Composite control of circularity, coaxiality, cylindricity, taper, and straightness across the entire surface during full 360° rotation' },
      { text: 'Only the perpendicularity of the cylinder end face to the shaft bore' },
      { text: 'Surface roughness (Ra value) achieved by precision cylindrical grinding' }
    ],
    correctAnswer: 1,
    weights: { quality: 1.0, design: 0.7, production: 0.5 }
  },
  {
    id: 'get_tech_5',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Material Requirements Planning (MRP) Logic',
    question: 'In manufacturing planning, what is the primary distinction between "Independent Demand" and "Dependent Demand"?',
    options: [
      { text: 'Independent demand items are forecasted based on market orders (e.g., finished flexo machines), while dependent demand items are calculated via BOM explosion (e.g., gears, shafts, bearings)' },
      { text: 'Independent demand applies only to imported raw materials, whereas dependent demand applies to local consumables' },
      { text: 'Independent demand is controlled by the machine operator, while dependent demand is controlled by the QA inspector' },
      { text: 'Independent demand items have zero lead time, while dependent demand items have variable lead time' }
    ],
    correctAnswer: 0,
    weights: { ppc: 1.0, tech_marketing: 0.4 }
  },
  {
    id: 'get_tech_6',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Capital Machinery Sales & ROI Calculation',
    question: 'A prospective printing converter evaluates replacing an older stack press with a modern Echaar 8-color gearless CI flexo press. Which factor contributes most directly to the client’s operational Return on Investment (ROI)?',
    options: [
      { text: 'Reduction in job changeover setup time from 3 hours to 15 minutes, drastically cutting substrate waste and ink usage' },
      { text: 'The exterior color and paint finish of the machine electrical cabinet' },
      { text: 'Increasing the number of manual greasing points across the machine' },
      { text: 'Operating with unground spur gears instead of direct-drive synchronous servo motors' }
    ],
    correctAnswer: 0,
    weights: { tech_marketing: 1.0, ppc: 0.6, design: 0.4 }
  },
  {
    id: 'get_tech_7',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Engineering Materials & Heat Treatment',
    question: 'Why are precision transmission gears and critical flexo drive shafts often subjected to "Case Carburizing followed by Quenching and Tempering" rather than through-hardening?',
    options: [
      { text: 'To make the entire component soft and malleable for easier hand filing' },
      { text: 'To produce a hard, high-wear-resistant outer case (58-62 HRC) while preserving a tough, shock-absorbing ductile core' },
      { text: 'To eliminate all carbon from the steel microstructure' },
      { text: 'To avoid the requirement of cylindrical grinding after heat treatment' }
    ],
    correctAnswer: 1,
    weights: { design: 0.8, production: 0.8, quality: 0.6 }
  },
  {
    id: 'get_tech_8',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Statistical Process Control (SPC)',
    question: 'If a cylindrical grinding operation for anilox mandrels shows a process capability index $C_{pk} = 1.67$, what does this mathematically signify?',
    options: [
      { text: 'The process is statistically out of control and generating over 15% scrap' },
      { text: 'The process is highly capable and centered well within specification limits (equivalent to 5-Sigma / negligible defects)' },
      { text: 'The machine spindle has severe bearing runout and must be stopped' },
      { text: 'The upper and lower specification limits are improperly defined' }
    ],
    correctAnswer: 1,
    weights: { quality: 1.0, production: 0.5, ppc: 0.4 }
  },
  {
    id: 'get_tech_9',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Web Tension Control & Dynamics',
    question: 'In continuous roll-to-roll web converting machinery, what device is most commonly used in closed-loop tension control systems to absorb momentary velocity discrepancies during roll splicing?',
    options: [
      { text: 'A dancer arm assembly with pneumatic counterbalance and precision position sensor' },
      { text: 'A solid cast-iron dead weight placed on the substrate' },
      { text: 'A fixed non-rotating guide bar' },
      { text: 'An AC induction motor running without variable frequency drive' }
    ],
    correctAnswer: 0,
    weights: { design: 0.9, quality: 0.5, production: 0.4 }
  },
  {
    id: 'get_tech_10',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Assembly Fits & Limits (ISO System)',
    question: 'Which of the following ISO hole-shaft fit combinations represents a typical "Transition Fit" where either a slight clearance or slight interference may occur depending on actual tolerance sizes?',
    options: [
      { text: 'H7 / g6' },
      { text: 'H7 / p6' },
      { text: 'H7 / k6' },
      { text: 'H7 / s6' }
    ],
    correctAnswer: 2, // H7/k6 is a classic transition/light drive fit (H7/g6 is clearance, H7/p6 and s6 are interference)
    weights: { design: 0.9, production: 0.7, quality: 0.7 }
  },
  {
    id: 'get_tech_11',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Economic Order Quantity (EOQ) & Inventory',
    question: 'In production planning, if the annual demand for a specialty high-precision bearing doubles while the ordering cost and holding cost per unit remain constant, by what factor does the Economic Order Quantity (EOQ) change?',
    options: [
      { text: 'It doubles ($2.0\\times$)' },
      { text: 'It increases by $\\sqrt{2} \\approx 1.414\\times$' },
      { text: 'It quadruples ($4.0\\times$)' },
      { text: 'It remains unchanged' }
    ],
    correctAnswer: 1, // EOQ = sqrt(2DS/H) -> proportional to sqrt(D)
    weights: { ppc: 1.0, production: 0.4 }
  },
  {
    id: 'get_tech_12',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'NDT & Structural Weld Inspection',
    question: 'For heavy structural fabricated base frames supporting high-speed printing machinery, which Non-Destructive Testing (NDT) method is most effective for detecting sub-surface volumetric flaws and cracks inside full-penetration butt welds?',
    options: [
      { text: 'Visual Inspection (VT)' },
      { text: 'Liquid Penetrant Testing (PT)' },
      { text: 'Ultrasonic Testing (UT) / Phased Array UT' },
      { text: 'Hardness testing with a rebound hammer' }
    ],
    correctAnswer: 2,
    weights: { quality: 1.0, production: 0.6, design: 0.4 }
  },
  {
    id: 'get_tech_13',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Technical Proposal & Scope of Work',
    question: 'When submitting a formal technical tender proposal for a high-value flexo printing press, why is the "Scope of Supply & Battery Limits" section critical?',
    options: [
      { text: 'It lists the company marketing slogans and award certificates' },
      { text: 'It explicitly defines what equipment, utilities (compressed air, chilled water, electrical supply), and civil foundations are in Echaar’s scope versus the client’s scope' },
      { text: 'It specifies the courier delivery tracking number for the brochure' },
      { text: 'It defines the internal salary brackets of the assembly technicians' }
    ],
    correctAnswer: 1,
    weights: { tech_marketing: 1.0, ppc: 0.6 }
  },
  {
    id: 'get_tech_14',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Lean Manufacturing: Overall Equipment Effectiveness (OEE)',
    question: 'Overall Equipment Effectiveness (OEE) of a shop-floor CNC horizontal boring machine is calculated by multiplying which three key performance factors?',
    options: [
      { text: 'Power Consumption $\\times$ Oil Level $\\times$ Tool Life' },
      { text: 'Availability $\\times$ Performance $\\times$ Quality Rate' },
      { text: 'Manpower Count $\\times$ Spindle RPM $\\times$ Raw Material Weight' },
      { text: 'Batch Size $\\times$ Setup Time $\\times$ Inspection Duration' }
    ],
    correctAnswer: 1,
    weights: { production: 0.9, ppc: 0.8, quality: 0.6 }
  },
  {
    id: 'get_tech_15',
    roleId: 'get',
    section: 'field',
    type: 'objective',
    title: 'Servo Motor Control & Kinematics',
    question: 'Modern CI flexographic printing presses operate "gearless" using direct-drive torque servo motors on the printing cylinders. What is the fundamental advantage over traditional gear trains?',
    options: [
      { text: 'Direct-drive eliminates backlash, tooth wear, gear pitch print defects (gear marks), and enables infinite electronic repeat lengths' },
      { text: 'Direct drive requires heavy grease lubrication baths around the cylinders' },
      { text: 'Direct drive allows using cheaper cast iron printing plates' },
      { text: 'Direct drive eliminates the need for electrical automation cabinets' }
    ],
    correctAnswer: 0,
    weights: { design: 1.0, tech_marketing: 0.7, production: 0.5 }
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS (Scenarios with Candidate Rationale)
  {
    id: 'get_prob_1',
    roleId: 'get',
    section: 'problem_solving',
    type: 'scenario',
    title: 'High-Speed Vibration Triage on Assembly Test-Bed',
    scenario: 'During final shop-floor factory acceptance testing (FAT) of an 8-color CI Flexo press, when ramped to 350 m/min, an audible high-frequency vibration and resonance hum occurs around Deck #4. The customer’s inspection delegation is scheduled to arrive in 36 hours.',
    question: 'How do you structure an urgent technical investigation to identify the root cause and resolve the vibration before the customer arrives?',
    options: [
      { text: 'Mount tri-axial accelerometers on the bearing housings of Deck #4 to obtain an FFT frequency spectrum, comparing vibration peaks against rotational frequencies ($1\\times, 2\\times$ running speed, gear mesh, or bearing defect frequencies) to isolate unbalance vs. bearing fault.', effectivenessScore: 1.0, weights: { quality: 1.0, design: 0.9 } },
      { text: 'Immediately strip down the mandrel clamping sleeve on Deck #4, check the hydraulic expansion pressure, and inspect if the sleeve had improper mechanical seating or taper contamination.', effectivenessScore: 0.9, weights: { production: 1.0, quality: 0.6 } },
      { text: 'Review the master assembly timeline, notify PPC to prepare a contingency testing schedule, and verify with design if the machine can safely be demonstrated at 300 m/min while resolving Deck #4 in parallel.', effectivenessScore: 0.75, weights: { ppc: 0.9, tech_marketing: 0.6 } },
      { text: 'Prepare a transparent briefing for the customer delegation demonstrating the engineering troubleshooting rig, proving Echaar’s scientific commitment to precision and zero-defect delivery.', effectivenessScore: 0.8, weights: { tech_marketing: 1.0, quality: 0.5 } }
    ],
    weights: { design: 0.9, quality: 0.9, production: 0.8, ppc: 0.5, tech_marketing: 0.5 },
    evaluationRubric: 'Candidate should identify resonance vs unbalance, vibration FFT analysis, bearing health, and systematic containment.'
  },
  {
    id: 'get_prob_2',
    roleId: 'get',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Critical Raw Material Hardness Inconsistency',
    scenario: 'A batch of 12 imported alloy steel forgings for high-precision print mandrels has arrived. Incoming QC testing reveals that the hardness varies between 28 HRC and 38 HRC across different sections of the same forging, whereas the drawing strictly specifies 32 ± 2 HRC.',
    question: 'What is your recommendation to the manufacturing and engineering board?',
    options: [
      { text: 'Issue an immediate Non-Conformance Report (NCR), place the entire batch on physical and ERP quarantine, and instruct the metallurgical lab to perform microstructure and chemical spectrometry before any CNC machining.', effectivenessScore: 1.0, weights: { quality: 1.0, ppc: 0.6 } },
      { text: 'Consult design engineering to evaluate if non-uniform hardness will cause uneven residual stress release during cylindrical grinding, leading to micro-deflection in service.', effectivenessScore: 0.95, weights: { design: 1.0, quality: 0.8 } },
      { text: 'Test-machine one forging on the CNC lathe with high-durability carbide inserts to see if tool chatter occurs, while checking if the vendor can re-temper the batch locally.', effectivenessScore: 0.8, weights: { production: 0.9, quality: 0.5 } },
      { text: 'Check the master production schedule for upcoming press delivery dates to identify if buffer stock exists or if an alternate qualified forging supplier must be activated immediately.', effectivenessScore: 0.85, weights: { ppc: 1.0, production: 0.6 } }
    ],
    weights: { quality: 1.0, design: 0.8, ppc: 0.8, production: 0.7, tech_marketing: 0.3 },
    evaluationRubric: 'Evaluates understanding of material metallurgy, defect containment (quarantine), risk of residual stress, and production schedule impact.'
  },
  {
    id: 'get_prob_3',
    roleId: 'get',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Customer Demands Last-Minute Substrate Spec Change',
    scenario: 'Two weeks before delivery of a customized converting machine, the client calls stating their end-user has shifted from standard 40-micron BOPP film to an ultra-thin, highly extensible 12-micron LDPE film. They want the machine to handle this without delay.',
    question: 'As part of the cross-functional engineering review, what is your approach?',
    options: [
      { text: 'Lead an engineering review of web tension load cells, dancer sensitivity, and drying oven temperature profiles; calculate minimum required web tension to prevent neck-in or stretching on 12-micron LDPE.', effectivenessScore: 1.0, weights: { design: 1.0, quality: 0.6 } },
      { text: 'Schedule a joint technical conference with the client’s technical director, explain the physical differences between BOPP and extensible LDPE, and present an add-on chilled drum/tension upgrade package with realistic lead time.', effectivenessScore: 0.95, weights: { tech_marketing: 1.0, design: 0.7 } },
      { text: 'Audit the shop-floor machine assembly status to see which roller surfaces are already installed and if non-stick silicone or low-inertia carbon-fiber idler rollers are required.', effectivenessScore: 0.85, weights: { production: 0.8, ppc: 0.8 } },
      { text: 'Check with procurement and ERP whether lower-rated tension sensors and precision pneumatic regulators can be air-freighted without moving the final dispatch milestone.', effectivenessScore: 0.8, weights: { ppc: 1.0, production: 0.6 } }
    ],
    weights: { tech_marketing: 0.9, design: 0.9, ppc: 0.7, quality: 0.6, production: 0.6 },
    evaluationRubric: 'Tests technical-commercial balance, web handling dynamics, customer negotiation, and project management agility.'
  },
  {
    id: 'get_prob_4',
    roleId: 'get',
    section: 'problem_solving',
    type: 'scenario',
    title: 'CNC Heavy Machining Bottleneck Elimination',
    scenario: 'The plant’s large 5-axis CNC portal milling machine—which machines the massive side frames for all flexo presses—is operating at 94% utilization and is causing a 2-week backlog for all downstream assembly bays.',
    question: 'What systematic methodology do you propose to break this critical manufacturing bottleneck?',
    options: [
      { text: 'Perform a Single-Minute Exchange of Die (SMED) setup study to convert internal setup activities (part zero setting, clamping, tool presetting) to external setup offline on modular sub-plates, slashing spindle downtime.', effectivenessScore: 1.0, weights: { production: 1.0, ppc: 0.9 } },
      { text: 'Re-examine the 3D CAD frame design with the R&D team to evaluate if certain non-critical mounting pockets can be cast or laser-cut instead of machined on the 5-axis portal.', effectivenessScore: 0.95, weights: { design: 1.0, production: 0.7 } },
      { text: 'Audit tool life data, cutting parameters ($V_c, f_z$), and switch from standard high-feed end mills to ceramic or specialized indexable roughing cutters to reduce cycle time per frame.', effectivenessScore: 0.9, weights: { production: 0.9, quality: 0.5 } },
      { text: 'Split the machining schedule: prioritize critical datum surfaces in-house under strict CMM surveillance and subcontract secondary roughing operations to audited tier-1 vendors.', effectivenessScore: 0.85, weights: { ppc: 1.0, quality: 0.7 } }
    ],
    weights: { production: 1.0, ppc: 0.9, design: 0.8, quality: 0.5, tech_marketing: 0.3 },
    evaluationRubric: 'Tests knowledge of Lean/SMED, DFM (Design for Manufacturing), cutting tool optimization, and capacity bottleneck management.'
  },
  {
    id: 'get_prob_5',
    roleId: 'get',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Post-Installation Print Registration Error Mystery',
    scenario: 'On a newly commissioned machine at a customer facility, the print registration drifts out of tolerance by 0.25 mm in the machine direction only after 4 hours of continuous high-speed printing, but tests perfectly in the morning.',
    question: 'How do you formulate a logical hypothesis and diagnostic plan to solve this mystery?',
    options: [
      { text: 'Formulate a thermal expansion hypothesis: calculate the temperature rise of the central drum chilled water circuit, frame bearings, and plate cylinder mandrels over a 4-hour run; measure ambient vs running temperatures.', effectivenessScore: 1.0, weights: { design: 0.9, quality: 1.0 } },
      { text: 'Check the mechanical backlash in servo couplings and check if thermal dissipation in the electrical drive cabinets is causing servo drive encoder drift or timing slip.', effectivenessScore: 0.95, weights: { quality: 0.8, production: 0.9 } },
      { text: 'Analyze substrate roll quality: check if the customer is switching to a different master roll batch with higher moisture or uneven winding tension during the afternoon shift.', effectivenessScore: 0.85, weights: { tech_marketing: 0.7, quality: 0.8 } },
      { text: 'Develop an experimental DOE (Design of Experiments) varying drum chiller temperature, web speed, and doctor blade pressure to scientifically isolate the primary interaction factor.', effectivenessScore: 0.95, weights: { quality: 1.0, design: 0.8 } }
    ],
    weights: { quality: 1.0, design: 0.9, production: 0.7, tech_marketing: 0.6, ppc: 0.4 },
    evaluationRubric: 'Evaluates advanced thermal-mechanical reasoning, encoder stability, substrate tension variables, and scientific DOE troubleshooting.'
  }
];
