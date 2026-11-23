/**
 * 30 Questions for Production Engineer
 * Echaar Equipments Pvt. Ltd.
 */

export const productionQuestions = [
  // SECTION 1: 10 GENERAL & SHOP-FLOOR BEHAVIORAL QUESTIONS
  {
    id: 'prd_gen_1',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Safety Interlock Override Request',
    question: 'A machine operator asks to bypass a light curtain and interlock door on a large CNC portal milling machine during a critical rush job to save 15 seconds per tool change. What is your reaction?',
    options: [
      { text: 'Strictly prohibit bypassing safety interlocks, explain the life-threatening amputational hazard, and review the tool loading procedure to optimize cycle time safely.', scoreMultiplier: 1.0 },
      { text: 'Allow the bypass only if you stand directly beside the machine watching.', scoreMultiplier: 0.2 },
      { text: 'Permit it until the rush batch is finished and then turn the safety switch back on.', scoreMultiplier: 0.1 },
      { text: 'Ignore the request and walk away without saying anything.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'prd_gen_2',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Managing Technician Conflict on Shift Handover',
    question: 'The night shift CNC operator claims the day shift left worn-out inserts that chipped in the middle of a cut, while the day operator claims the night shift ran feed rates too high. How do you resolve this?',
    options: [
      { text: 'Review machine CNC controller log history (spindle load, feed overrides), inspect the chipped insert under magnification, and implement a mandatory shift-handover tool inspection checklist.', scoreMultiplier: 1.0 },
      { text: 'Issue warning letters to both without checking any physical facts or data.', scoreMultiplier: 0.3 },
      { text: 'Tell them to fight it out in the canteen and settle it among themselves.', scoreMultiplier: 0.1 },
      { text: 'Blame the tool supplier immediately without checking running conditions.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'prd_gen_3',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: '5S Shop-Floor Cleanliness Discipline',
    question: 'During a busy production week with high CNC output, metal chips and cutting fluid mist start accumulating around machine walkways. What is your stance?',
    options: [
      { text: 'Enforce daily 15-minute 5S housekeeping routines at the end of each shift, ensure chip conveyors and oil mist collectors are functioning, and keep walkways clear.', scoreMultiplier: 1.0 },
      { text: 'Only clean the shop floor once a month when external clients visit.', scoreMultiplier: 0.2 },
      { text: 'Ignore coolant pooling because metal workshops are naturally dirty.', scoreMultiplier: 0.1 },
      { text: 'Ask fitters to throw cardboard over the slippery coolant puddles permanently.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'prd_gen_4',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Scrap & Rework Containment',
    question: 'An operator running a precision CNC cylindrical grinder accidentally grinds a critical mandrel journal 0.03 mm undersize below the drawing lower limit. What do you do?',
    options: [
      { text: 'Immediately tag the part with a red "Hold/Scrap" quarantine card, halt machining of further parts until the tool offset and wheel dressing are verified, and submit an NCR to Engineering.', scoreMultiplier: 1.0 },
      { text: 'Instruct the operator to hide the shaft under a wooden palette.', scoreMultiplier: 0.1 },
      { text: 'Try to center-punch the shaft surface to artificially expand the diameter.', scoreMultiplier: 0.1 },
      { text: 'Send it directly to assembly without saying anything to quality inspection.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'prd_gen_5',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Unexpected Machine Breakdown',
    question: 'The main hydraulic power pack on the heavy assembly rig blows a high-pressure seal at 3:00 PM when assembling a CI flexo press drum. What is your immediate course of action?',
    options: [
      { text: 'Ensure the load is mechanically locked and secured, clean up hydraulic oil spill with absorbent granules, isolate power, and coordinate with maintenance to replace the seal from backup stock.', scoreMultiplier: 1.0 },
      { text: 'Panic and yell at the assembly technicians.', scoreMultiplier: 0.1 },
      { text: 'Try to wrap a cloth around the high-pressure leak while keeping the pump running.', scoreMultiplier: 0.1 },
      { text: 'Pack up and go home early because the machine is broken.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'prd_gen_6',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Operator Training & Skill Development',
    question: 'A newly recruited apprentice technician is struggling to properly seat precision angular contact spindle bearings. What is your supervisory approach?',
    options: [
      { text: 'Provide patient hands-on mentoring: explain duplex bearing back-to-back arrangement, use induction bearing heater with temperature probes (never flame), and supervise the first three assemblies.', scoreMultiplier: 1.0 },
      { text: 'Reprimand the apprentice in front of the entire workshop.', scoreMultiplier: 0.2 },
      { text: 'Tell the apprentice to hammer the bearings into place with a steel mallet.', scoreMultiplier: 0.1 },
      { text: 'Reassign all precision work to external contractors permanently.', scoreMultiplier: 0.3 }
    ]
  },
  {
    id: 'prd_gen_7',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Tool Inventory & Regrinding Management',
    question: 'The machine shop is frequently running out of specialized ceramic and carbide inserts mid-job. How do you fix this root cause?',
    options: [
      { text: 'Establish a Min-Max inventory system with a locked tool crib, track insert consumption per CNC program, and set automated reorder thresholds in ERP.', scoreMultiplier: 1.0 },
      { text: 'Tell operators to grind high-speed steel bits on an abrasive pedestal wheel for everything.', scoreMultiplier: 0.3 },
      { text: 'Keep ordering massive unmonitored piles of inserts left open on workbenches.', scoreMultiplier: 0.2 },
      { text: 'Blame the procurement team without providing consumption data.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'prd_gen_8',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Productivity vs Assembly Precision Trade-Off',
    question: 'Your department head urges you to speed up machine alignment by 30% to hit monthly dispatch revenue targets. However, squaring the frames requires careful dial indicator leveling. What do you do?',
    options: [
      { text: 'Maintain uncompromising precision on critical alignment datums while finding time savings through staging parts in advance, pre-calibrating fixtures, and adding an extra assistant.', scoreMultiplier: 1.0 },
      { text: 'Skip leveling the frames completely and tighten foundation bolts arbitrarily.', scoreMultiplier: 0.1 },
      { text: 'Falsify the inspection record to show 0.01 mm when it is actually 0.15 mm out of square.', scoreMultiplier: 0.1 },
      { text: 'Refuse to work on the machine until next month.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'prd_gen_9',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Implementing Shopfloor Kaizen Ideas',
    question: 'A welder suggests fabricating a rotating weld positioner fixture out of scrap channel beams to make welding cylindrical roller shells safer and 40% faster. How do you handle this?',
    options: [
      { text: 'Enthusiastically review the concept with the welding team, verify load capacity and bearings with design, support the trial build, and recognize the welder’s initiative in the morning meeting.', scoreMultiplier: 1.0 },
      { text: 'Dismiss the suggestion because shopfloor technicians are not certified engineers.', scoreMultiplier: 0.2 },
      { text: 'Take the idea, patent it in your own name, and never credit the welder.', scoreMultiplier: 0.1 },
      { text: 'Discourage any experimentation on the shop floor.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'prd_gen_10',
    roleId: 'production',
    section: 'general',
    type: 'behavioral',
    title: 'Crisis Management Under Project Delay',
    question: 'A multi-million-dollar flexo press export order has fallen 5 days behind schedule due to a delayed cast frame delivery from the foundry. How do you lead recovery?',
    options: [
      { text: 'Organize a dynamic schedule crash: prepare parallel sub-assembly kits (inking decks, rewinder, electrical ducts), schedule staggered overtime on 24/7 CNC machining, and track hourly milestones.', scoreMultiplier: 1.0 },
      { text: 'Give up on the dispatch deadline and ignore customer inquiries.', scoreMultiplier: 0.1 },
      { text: 'Rush the assembly by leaving out half the fasteners and wiring harnesses.', scoreMultiplier: 0.1 },
      { text: 'Ship an unfinished machine and expect the client to assemble it overseas.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'prd_tech_1',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'CNC G-Code Programming: Cutter Compensation',
    question: 'In standard Fanuc/ISO CNC milling programming, which G-code command activates Cutter Radius Compensation to the Left of the programmed path?',
    options: [
      { text: 'G40' },
      { text: 'G41' },
      { text: 'G42' },
      { text: 'G43' }
    ],
    correctAnswer: 1 // G41 is cutter radius compensation left, G42 is right, G40 cancels
  },
  {
    id: 'prd_tech_2',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Taylor’s Tool Life Equation',
    question: 'According to Taylor’s tool life equation $V T^n = C$, if cutting speed $V$ is increased by 50% for a carbide tool with exponent $n = 0.25$, what happens to tool life $T$?',
    options: [
      { text: 'Tool life increases by 50%' },
      { text: 'Tool life decreases dramatically (to approximately $(1/1.5)^4 \\approx 20\\%$ of original life)' },
      { text: 'Tool life remains completely unaffected' },
      { text: 'Tool life doubles' }
    ],
    correctAnswer: 1
  },
  {
    id: 'prd_tech_3',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: '3-2-1 Fixture Locating Principle',
    question: 'In manufacturing fixture design for prismatic machine frames, what does the fundamental "3-2-1 locating principle" accomplish?',
    options: [
      { text: 'It constrains 9 of the 12 degrees of freedom of a rigid body (3 on primary datum, 2 on secondary, 1 on tertiary)' },
      { text: 'It requires 3 clamps, 2 bolts, and 1 washer' },
      { text: 'It restricts workpiece weight to 321 kg' },
      { text: 'It refers to a 3-minute setup time on CNC' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_4',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Weld Distortion Mitigation',
    question: 'When welding long longitudinal seams on heavy fabricated steel side-frames, which welding sequence is most effective to minimize angular warping and longitudinal shrinkage?',
    options: [
      { text: 'Back-step welding and intermittent skip-welding alternating symmetrically around the neutral axis' },
      { text: 'Continuous single-pass welding from one extreme end to the other with maximum heat input' },
      { text: 'Welding only on one side with high amperage' },
      { text: 'Quenching the red-hot weld immediately with cold water' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_5',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Induction Bearing Heating Temperature Limit',
    question: 'When heating rolling element bearings for thermal interference fit mounting onto a precision printing cylinder journal, what is the recommended maximum heating temperature to prevent altering metallurgy or melting seal grease?',
    options: [
      { text: 'Around 110°C to 120°C (never exceeding 125°C)' },
      { text: '350°C to 400°C until cherry red' },
      { text: '50°C' },
      { text: '600°C' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_6',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Climb Milling vs Conventional Milling',
    question: 'Why is "Climb Milling" (Down Milling) preferred on rigid CNC machining centers for alloy steel frames?',
    options: [
      { text: 'The chip starts at maximum thickness and decreases to zero, reducing tool rubbing, improving surface finish, and pushing the workpiece securely down into the fixture' },
      { text: 'It causes extreme backlash on manual machines with worn lead screws' },
      { text: 'It requires zero cutting fluid' },
      { text: 'It cuts the spindle motor power in half' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_7',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Precision Shaft Alignment: Rim and Face Method',
    question: 'When aligning a motor shaft to a heavy machine gearbox using dual dial test indicators (Rim and Face method), what does the "Rim" indicator measure?',
    options: [
      { text: 'Radial eccentricity / parallel misalignment between the two shaft centerlines' },
      { text: 'Angular tilt between the coupling faces' },
      { text: 'Axial end-play of the motor bearings' },
      { text: 'Surface hardness of the coupling hub' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_8',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Built-Up Edge (BUE) in Machining',
    question: 'During machining of ductile low-carbon steel, what causes a Built-Up Edge (BUE) on the cutting tool tip, and how can it be eliminated?',
    options: [
      { text: 'Caused by high friction and pressure welding at moderate cutting speeds; eliminated by increasing cutting speed, using positive rake tools, and applying high-pressure coolant' },
      { text: 'Caused by excessive spindle RPM; eliminated by slowing the spindle to 20 RPM' },
      { text: 'Caused by too much coolant; eliminated by running completely dry' },
      { text: 'Caused by sharp cutting edges; eliminated by deliberately blunting the insert' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_9',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Cylindrical Grinding Spark-Out Passes',
    question: 'Why are multiple "Spark-Out" passes performed without infeed at the end of a precision cylindrical grinding cycle on anilox roll mandrels?',
    options: [
      { text: 'To allow machine and grinding wheel spindle deflection to relax, achieving final dimensional tolerance and sub-micron Ra finish' },
      { text: 'To heat the workpiece up to tempering temperatures' },
      { text: 'To create decorative spiral lines on the shaft' },
      { text: 'To wear down the grinding wheel diameter rapidly' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_10',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Interference Fit Assembly: Liquid Nitrogen Shrinking',
    question: 'When assembling a heavy hardened steel sleeve onto a 150 mm diameter shaft with an interference fit of 0.08 mm, the shaft is submerged in liquid nitrogen (-196°C). Taking steel coefficient of thermal expansion $\\alpha = 12 \\times 10^{-6}\\text{ /}^\\circ\\text{C}$ and ambient temperature 24°C ($\\Delta T = 220^\\circ\\text{C}$), what is the thermal shrinkage of the shaft diameter?',
    options: [
      { text: 'Approximately 0.396 mm (~396 microns), providing ample clearance for effortless insertion' },
      { text: '0.012 mm' },
      { text: '1.500 mm' },
      { text: '0.002 mm' }
    ],
    correctAnswer: 0 // delta D = 150 * 12e-6 * 220 = 0.396 mm
  },
  {
    id: 'prd_tech_11',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Shielding Gas Selection in MIG Welding',
    question: 'In GMAW (MIG) welding of structural mild steel equipment frames, what is the advantage of using an Ar/CO2 gas mixture (e.g. 80% Ar / 20% CO2) compared to 100% pure CO2?',
    options: [
      { text: 'Significantly less weld spatter, smoother spray arc transfer, better bead aesthetics, and reduced post-weld grinding cleanup' },
      { text: 'Lower shielding gas cost' },
      { text: 'Higher smoke and slag generation' },
      { text: 'Completely eliminates the need for welding wire' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_12',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Total Productive Maintenance (TPM) Autonomous Maintenance',
    question: 'In Japanese TPM philosophy, what is "Jishu Hozen" (Autonomous Maintenance)?',
    options: [
      { text: 'Training machine operators to perform daily routine cleaning, lubrication, tightening, and early abnormality detection on their own equipment' },
      { text: 'Relying 100% on external equipment vendors for every single oil change' },
      { text: 'Running the machine until it blows up and then replacing it' },
      { text: 'Automating the entire factory with zero human operators' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_13',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Thread Tapping: Tap Drill Size Calculation',
    question: 'What is the theoretical tap drill hole size for machining an ISO standard M16 coarse metric thread with a 2.0 mm pitch (M16 x 2.0)?',
    options: [
      { text: '14.0 mm ($16 - 2.0$)' },
      { text: '16.0 mm' },
      { text: '12.0 mm' },
      { text: '15.5 mm' }
    ],
    correctAnswer: 0 // Tap Drill Size = Major Diameter - Pitch = 16 - 2 = 14 mm
  },
  {
    id: 'prd_tech_14',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Hard Turning vs Cylindrical Grinding',
    question: 'Under what conditions is "Hard Turning" using PCBN (Polycrystalline Cubic Boron Nitride) inserts utilized in place of traditional cylindrical grinding?',
    options: [
      { text: 'For finishing hardened steels (50-65 HRC) to tight tolerances in a single chucking setup on a high-rigidity CNC lathe, eliminating grinding setup transfers' },
      { text: 'Only on soft plastics and wood' },
      { text: 'When surface roughness requirement is uncritical (Ra > 10 microns)' },
      { text: 'To cut aluminum sheets' }
    ],
    correctAnswer: 0
  },
  {
    id: 'prd_tech_15',
    roleId: 'production',
    section: 'field',
    type: 'objective',
    title: 'Torque Wrench Calibration & ISO 6789',
    question: 'Why must torque wrenches used in machine assembly be calibrated at periodic intervals according to standard ISO 6789?',
    options: [
      { text: 'Internal spring relaxation and mechanical wear cause torque accuracy drift, risking under-tightened or over-yielded critical fasteners' },
      { text: 'To change the paint color of the wrench handle' },
      { text: 'Because wrenches expire after 30 days like chemicals' },
      { text: 'To increase the physical length of the handle' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'prd_prob_1',
    roleId: 'production',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Chatter Elimination in Facing Heavy CI Side Frames',
    scenario: 'During heavy face milling of a 3-meter cast steel side frame on the portal CNC, loud acoustic chatter and wavy surface ripples occur at depth of cut 3 mm and spindle speed 350 RPM with a 160 mm face cutter.',
    question: 'How do you systematically identify and eliminate this machining chatter without severely hurting cycle time?',
    options: [
      { text: 'Analyze chatter frequency: check fixture clamping rigidity and workpiece damping, switch to differential-pitch cutter inserts to disrupt regenerative harmonic feedback, and tune spindle RPM to a stable lobe.', effectivenessScore: 1.0 },
      { text: 'Increase feed rate by 300% to push through the chatter forcefully.', effectivenessScore: 0.2 },
      { text: 'Weld the cutter permanently into the CNC spindle taper.', effectivenessScore: 0.1 },
      { text: 'Leave the wavy surface ripples and fill them with body putty before painting.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Candidate evaluates stability lobe diagrams, regenerative chatter, cutter pitch variation, and fixture stiffness.'
  },
  {
    id: 'prd_prob_2',
    roleId: 'production',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Severe Angular Warping on Fabricated Machine Bed',
    scenario: 'A 6-meter fabricated base bed for a web converting press shows 4.5 mm bow warping after full-penetration welding of the top rail guides, exceeding the 1.0 mm machining allowance on the portal milling machine.',
    question: 'What is your corrective engineering strategy to salvage the bed frame before final CNC machining?',
    options: [
      { text: 'Subject the frame to stress relief annealing, followed by hydraulic press-brake straightening or controlled flame-straightening on the opposing flange, then verify flatness before machining.', effectivenessScore: 1.0 },
      { text: 'Grind away 5 mm from one side until it looks straight to the naked eye.', effectivenessScore: 0.2 },
      { text: 'Force the bed down onto the concrete floor with heavy anchor bolts and hope it stays straight forever.', effectivenessScore: 0.2 },
      { text: 'Scrap the entire 6-meter fabricated assembly immediately without attempting thermal correction.', effectivenessScore: 0.3 }
    ],
    evaluationRubric: 'Evaluates practical distortion recovery: thermal flame straightening, hydraulic counter-bending, and stress-relief normalizing.'
  },
  {
    id: 'prd_prob_3',
    roleId: 'production',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Bearing Temperature Spike During 2-Hour Test Run',
    scenario: 'During the 2-hour dry run of an assembled CI flexo print deck, the non-drive-side spherical roller bearing temperature rises rapidly from 28°C to 88°C within 35 minutes, triggering the thermal alarm.',
    question: 'What sequence of root-cause checks do you initiate on the assembly floor?',
    options: [
      { text: 'Check for grease over-packing (which causes viscous churning overheating), verify internal radial clearance ($C_3/C_4$), check for axial pinching from excessive locknut torque, and inspect shaft alignment.', effectivenessScore: 1.0 },
      { text: 'Pour cold water directly onto the hot bearing housing while running at full speed.', effectivenessScore: 0.1 },
      { text: 'Disconnect the thermal alarm sensor so the machine keeps running.', effectivenessScore: 0.1 },
      { text: 'Assume 88°C is normal for all bearings and do nothing.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Tests troubleshooting of bearing thermal spikes: over-lubrication/churning, loss of internal clearance, and axial pre-load pinching.'
  },
  {
    id: 'prd_prob_4',
    roleId: 'production',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Tool Wear Spike on Hardened Alloy Steel Batch',
    scenario: 'A batch of EN24 (4340) alloy shafts pre-heat-treated to 34 HRC is wearing out CNC grooving inserts in 4 parts instead of the standard 25 parts, causing high insert expenditure and repeated dimensional drift.',
    question: 'How do you triage this machining wear crisis?',
    options: [
      { text: 'Verify workpiece batch hardness and micro-structure for hard inclusions, check coolant concentration/lubricity with a refractometer, reduce surface cutting speed ($V_c$), and switch to a CVD Al2O3 coated grade with tougher edge prep.', effectivenessScore: 1.0 },
      { text: 'Increase cutting speed by 100% to finish the cuts faster before the tool wears out.', effectivenessScore: 0.1 },
      { text: 'Switch to unhardened mild steel shafts without notifying the design department.', effectivenessScore: 0.1 },
      { text: 'Stop using cutting fluid and machine completely dry with high-speed steel.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Assesses understanding of metallurgical variance, cutting insert grade selection (TiAlN vs CVD), cutting speed mechanics, and coolant management.'
  },
  {
    id: 'prd_prob_5',
    roleId: 'production',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Multi-Deck Assembly Synchronization Bottleneck',
    scenario: 'In an 8-color CI press, mechanical assembly of the 8 individual print decks is taking 14 days per press, with fitters frequently clashing for crane access and waiting on pneumatic piping sub-assemblies.',
    question: 'How do you restructure the assembly process to reduce deck assembly time to 7 days?',
    options: [
      { text: 'Implement modular offline pre-assembly: build, pipe, wire, and test all 8 decks completely on dedicated mobile assembly stands before docking them onto the central press frame in a single 4-hour crane operation.', effectivenessScore: 1.0 },
      { text: 'Add 20 more fitters into the same cramped machine frame simultaneously.', scoreMultiplier: 0.3 },
      { text: 'Eliminate all pneumatic testing until after the machine is delivered to the customer site.', scoreMultiplier: 0.2 },
      { text: 'Reduce the machine from 8 colors to 4 colors without telling the client.', scoreMultiplier: 0.1 }
    ],
    evaluationRubric: 'Demonstrates modular manufacturing, cellular staging, line balancing, and lean assembly flow.'
  }
];
