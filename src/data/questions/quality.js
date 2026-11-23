/**
 * 30 Questions for Quality Engineer
 * Echaar Equipments Pvt. Ltd.
 */

export const qualityQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'qa_gen_1',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Dispatch Pressure vs Quality Integrity',
    question: 'The plant general manager and sales lead are eager to dispatch a flexo printing press on March 31st to book annual financial revenue. However, your final inspection reveals total radial runout on Deck #2 plate cylinder is 0.012 mm, exceeding the permissible 0.005 mm drawing limit. What do you do?',
    options: [
      { text: 'Stand firm on engineering specifications: halt final dispatch sign-off, clearly present runout measurements and print defect risks (gear-mark/banding), and collaborate with assembly to rectify the mandrel seating immediately.', scoreMultiplier: 1.0 },
      { text: 'Sign off the quality inspection sheet anyway and hope the customer doesn’t notice.', scoreMultiplier: 0.1 },
      { text: 'Conceal the measurement record and blame the customer if the machine fails.', scoreMultiplier: 0.1 },
      { text: 'Change the drawing tolerance manually with a pen without design approval.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'qa_gen_2',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Vendor Quality Audit Diplomacy',
    question: 'During a supplier audit at a foundry supplying heavy cast-iron frames, you notice the foundry is skipping required magnetic particle inspection (MPI) on critical corners. The foundry owner claims they have been doing it this way for 25 years. How do you handle this?',
    options: [
      { text: 'Politely but firmly explain the high operational stresses and safety risks on Echaar machines, document the audit non-conformance with photographic evidence, and issue a mandatory Corrective Action Request (CAR) with verified re-inspection before lot acceptance.', scoreMultiplier: 1.0 },
      { text: 'Accept the owner’s verbal word without inspecting any castings.', scoreMultiplier: 0.2 },
      { text: 'Start an aggressive argument and insult the foundry workers.', scoreMultiplier: 0.1 },
      { text: 'Ignore the violation and accept cracked castings.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'qa_gen_3',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Root Cause (8D) Culture vs Finger-Pointing',
    question: 'A batch of 30 precision gear shafts is rejected at final inspection due to an undersized bearing journal. The machine shop supervisor immediately blames the grinding operator. What is your QA response?',
    options: [
      { text: 'Lead a systematic 8D root-cause investigation: inspect the grinding wheel dresser condition, calibrate the micrometer used by the operator (Gage R&R), check machine thermal expansion, and verify SOP clarity instead of blaming individuals.', scoreMultiplier: 1.0 },
      { text: 'Immediately fire the operator without checking the machine or measuring instruments.', scoreMultiplier: 0.1 },
      { text: 'Accept the undersized parts and ship them anyway.', scoreMultiplier: 0.1 },
      { text: 'Close the report with "human error" without changing any process controls.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'qa_gen_4',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Calibrated Tool Verification in the Workshop',
    question: 'You observe a CNC technician using an uncalibrated digital vernier caliper whose calibration sticker expired 6 months ago. What do you do?',
    options: [
      { text: 'Immediately withdraw the uncalibrated caliper from the production area, issue a calibrated instrument from the QA standards room, log the expired tool for re-calibration, and perform a sample check on recently machined parts.', scoreMultiplier: 1.0 },
      { text: 'Ignore the expired sticker as long as the digital numbers light up.', scoreMultiplier: 0.2 },
      { text: 'Throw the caliper into the scrap bin without informing the supervisor.', scoreMultiplier: 0.3 },
      { text: 'Peel off the expired sticker so no one notices the date.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'qa_gen_5',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Fostering Operator Self-Inspection Quality Culture',
    question: 'How do you transition the factory from an "inspectors police the workers" mindset to a "first-time-right operator self-inspection" culture?',
    options: [
      { text: 'Provide operators with calibrated Go/No-Go gauges, establish clear visual boundary sample boards at each machine, train them in basic SPC charting, and empower them to stop the line when a defect trend begins.', scoreMultiplier: 1.0 },
      { text: 'Hire 100 more quality inspectors to stand behind every single worker.', scoreMultiplier: 0.2 },
      { text: 'Fine operators cash out of their salary for every defective part.', scoreMultiplier: 0.2 },
      { text: 'Eliminate quality inspection altogether.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'qa_gen_6',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Ambiguous Drawing Callouts',
    question: 'A machining drawing for an electrical enclosure has a blurry weld symbol and does not explicitly specify whether the weld is intermittent or continuous. What is your QA action?',
    options: [
      { text: 'Raise a formal Engineering Clarification Note (ECN) to the Design team to obtain a clear, signed revision before weldment fabrication begins.', scoreMultiplier: 1.0 },
      { text: 'Guess what the designer meant and tell the welder to weld randomly.', scoreMultiplier: 0.2 },
      { text: 'Skip welding the part completely.', scoreMultiplier: 0.1 },
      { text: 'Blame the draughtsman and stop all work for two weeks.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'qa_gen_7',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'ISO 9001:2015 Audit Preparation',
    question: 'During an external ISO 9001:2015 recertification audit, the auditor requests calibration records for the master granite surface plate in the metrology lab. You discover the annual calibration is overdue by 5 days. What do you do?',
    options: [
      { text: 'Be transparent and truthful with the auditor, present the scheduled recalibration booking with the NABL-accredited laboratory, show intermediate verification checks against calibrated gauge blocks, and accept the minor observation professionally.', scoreMultiplier: 1.0 },
      { text: 'Forge a fake calibration certificate with yesterday’s date.', scoreMultiplier: 0.1 },
      { text: 'Lock the door of the metrology lab and tell the auditor the key is lost.', scoreMultiplier: 0.1 },
      { text: 'Argue that granite plates never lose accuracy and don’t need calibration.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'qa_gen_8',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Continuous Metrological Training',
    question: 'A newly acquired portable laser tracker is delivered to measure 12-meter assembled press alignments. How do you lead its deployment?',
    options: [
      { text: 'Undergo certified OEM training, create a standardized measurement operating procedure (SOP), establish environmental temperature compensation rules, and train the assembly QA team.', scoreMultiplier: 1.0 },
      { text: 'Leave the ₹60-Lakh laser tracker in its shipping wooden box to collect dust.', scoreMultiplier: 0.1 },
      { text: 'Allow untrained workers to play with the optics as a toy.', scoreMultiplier: 0.1 },
      { text: 'Rely only on old string lines and plumb bobs forever.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'qa_gen_9',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Customer Quality Feedback & Defect Containment',
    question: 'An overseas client emails video showing oil leaking from an assembled doctor blade chamber during their first commercial print run. What is your containment protocol?',
    options: [
      { text: 'Immediately acknowledge the issue with empathy, dispatch urgent replacement Viton seals by express air courier with installation video, initiate an immediate internal containment audit of all chamber seals in assembly, and launch an 8D root-cause study.', scoreMultiplier: 1.0 },
      { text: 'Reply to the customer that leaking oil is normal and good for the machine.', scoreMultiplier: 0.1 },
      { text: 'Delete the customer email and block their phone number.', scoreMultiplier: 0.1 },
      { text: 'Blame the customer’s operators for touching the machine.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'qa_gen_10',
    roleId: 'quality',
    section: 'general',
    type: 'behavioral',
    title: 'Quality Documentation & Data Integrity',
    question: 'Why is recording raw, unvarnished inspection data and dimensions into the Quality ERP system crucial, even when parts are barely passing within the upper tolerance border?',
    options: [
      { text: 'Accurate raw data allows early statistical trend detection (tool wear, thermal machine drift) before defects actually occur, enabling proactive preventive tool offsets.', scoreMultiplier: 1.0 },
      { text: 'To fill up server hard drive space.', scoreMultiplier: 0.1 },
      { text: 'Only to satisfy government tax inspectors.', scoreMultiplier: 0.1 },
      { text: 'Raw data has no engineering value; only pass/fail checkmarks matter.', scoreMultiplier: 0.2 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'qa_tech_1',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'CMM Environmental Temperature Compensation',
    question: 'According to international standard ISO 1, what is the standard reference temperature for geometric and dimensional inspection of industrial machinery components?',
    options: [
      { text: '20°C (68°F)' },
      { text: '25°C' },
      { text: '0°C' },
      { text: '37°C' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_2',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'GD&T: Cylindricity vs Circularity (Roundness)',
    question: 'What is the fundamental difference between a "Circularity" tolerance and a "Cylindricity" tolerance callout on an engineering drawing?',
    options: [
      { text: 'Circularity applies independently to individual 2D circular cross-sections, whereas Cylindricity applies simultaneously to the entire 3D cylindrical surface (controlling roundness, straightness, and taper together)' },
      { text: 'Circularity is measured in millimeters, while Cylindricity is measured in kilograms' },
      { text: 'Cylindricity requires a datum reference frame, while Circularity never uses datums' },
      { text: 'There is zero difference; they are identical symbols' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_3',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Process Capability Index ($C_p$ vs $C_{pk}$)',
    question: 'A CNC turning operation has $C_p = 1.8$ and $C_{pk} = 0.85$. What does this statistical discrepancy indicate about the manufacturing process?',
    options: [
      { text: 'The process has low inherent variation (tight spread), but the process mean is significantly shifted / off-center relative to the nominal specification midpoint' },
      { text: 'The process is perfectly centered and generating zero defects' },
      { text: 'The measuring instrument is broken' },
      { text: 'The sample size was too large' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_4',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Surface Roughness Parameters ($R_a$ vs $R_z$)',
    question: 'Why is specifying only Arithmetical Mean Roughness ($R_a$) sometimes insufficient for critical printing cylinder journals, necessitating the Ten-Point Mean Roughness ($R_z$) or Maximum Peak Height ($R_{\\max}$)?',
    options: [
      { text: '$R_a$ averages out extreme sharp peaks and deep scratch valleys which can puncture elastomer seals or cause premature bearing fatigue, whereas $R_z$ reveals extreme peak-to-valley heights' },
      { text: '$R_a$ cannot be measured with contact profilometers' },
      { text: '$R_z$ applies only to plastic parts' },
      { text: '$R_a$ is only used in woodworking' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_5',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Dynamic Balancing: ISO 1940 Quality Grades',
    question: 'According to ISO 1940 balance quality standards, what balance grade is typically required for high-speed printing machine rollers and mandrels operating at 400 m/min to guarantee vibration-free operation?',
    options: [
      { text: 'ISO G 2.5 or ISO G 1.0 (Permissible residual unbalance $e_{per} \\cdot \\omega \\le 2.5\\text{ mm/s}$)' },
      { text: 'ISO G 100 (Agricultural machinery)' },
      { text: 'ISO G 630 (Car engine crankshafts)' },
      { text: 'No dynamic balancing is required for printing rollers' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_6',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Gage Repeatability & Reproducibility (Gage R&R)',
    question: 'According to AIAG automotive/industrial standards, what is the acceptable threshold for $\%R\\&R$ (Measurement System Variation as a percentage of process tolerance)?',
    options: [
      { text: 'Under 10% is acceptable; 10% to 30% may be acceptable depending on application; over 30% is unacceptable and the measurement system must be improved' },
      { text: 'Any value up to 95% is acceptable' },
      { text: 'Exactly 50% is required' },
      { text: 'Measurement error is legally ignored in ISO 9001' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_7',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Liquid Penetrant Inspection (LPI / PT)',
    question: 'In dye penetrant inspection of structural weldments, what is the physical function of the "Developer" powder/spray applied after wiping off excess surface penetrant?',
    options: [
      { text: 'It acts as a blotter, drawing trapped penetrant out of surface-breaking cracks by capillary action to form a visible magnified bleed-out indication' },
      { text: 'It dissolves and hides the cracks permanently' },
      { text: 'It welds the crack together using chemical heat' },
      { text: 'It cleans off grease from the operator’s hands' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_8',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Rockwell Hardness Testing: Scale C (HRC)',
    question: 'Which indenter and major load combination is standard for the Rockwell C (HRC) test used on hardened alloy steel shafts and gears?',
    options: [
      { text: '$120^\\circ$ Diamond sphero-conical indenter (Brale) with a 150 kgf major load' },
      { text: '1/16 inch steel ball with a 60 kgf load' },
      { text: '10 mm tungsten carbide ball with 3000 kgf load' },
      { text: 'Rubber pad with 5 kgf load' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_9',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Abbe’s Principle in Dimensional Metrology',
    question: 'What does Abbe’s Metrological Principle state regarding the placement of the measuring reference scale and the measurement axis?',
    options: [
      { text: 'The measuring scale and the axis of measurement must be collinear (in the same straight line) to prevent first-order angular tilt errors (as in a micrometer vs vernier caliper)' },
      { text: 'Measurements must always be taken in the dark' },
      { text: 'The scale must be twice the length of the workpiece' },
      { text: 'All measurements must be rounded to the nearest inch' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_10',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Dial Indicator Cosine Error',
    question: 'When measuring runout on a rotating cylinder shaft using a lever-type dial test indicator (DTI), what happens if the stylus makes an angle $\\theta = 30^\\circ$ to the tangent plane instead of being parallel?',
    options: [
      { text: 'A cosine error is introduced: the dial reading indicates higher displacement ($Reading = True / \\cos 30^\\circ$), causing a false exaggerated runout reading' },
      { text: 'The indicator will stop moving' },
      { text: 'The indicator stylus will break instantly' },
      { text: 'There is zero effect on the measurement reading' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_11',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: '8D Problem-Solving Methodology: Step D4',
    question: 'In the standard Ford/Automotive 8D Problem-Solving process, what is executed in Step "D4"?',
    options: [
      { text: 'Root Cause Analysis: isolating and verifying the fundamental root cause using Fishbone (Ishikawa) and 5-Why methodology' },
      { text: 'Celebrating team success with an ice cream party' },
      { text: 'Scrapping the entire factory inventory' },
      { text: 'Filing an insurance lawsuit' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_12',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Ultrasonic Testing (UT) Attenuation in Castings',
    question: 'Why does Ultrasonic Testing (UT) of heavy gray cast-iron frames exhibit much higher acoustic signal attenuation and scattering compared to forged alloy steel shafts?',
    options: [
      { text: 'The presence of coarse graphite flakes and larger grain boundaries in cast iron scatters the high-frequency ultrasonic waves, requiring lower frequency probes (e.g. 1 to 2 MHz)' },
      { text: 'Cast iron is completely transparent to sound waves' },
      { text: 'Sound waves cannot travel through metals' },
      { text: 'Because cast iron is magnetic' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_13',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'First Article Inspection (FAI) according to AS9102',
    question: 'What is the primary purpose of conducting a formal First Article Inspection (FAI) on a newly machined batch of print decks?',
    options: [
      { text: 'To provide objective evidence that all engineering design and specification requirements are properly understood, accounted for, and verified prior to launching full serial production' },
      { text: 'To take a photo for social media marketing' },
      { text: 'To test if the paint matches the corporate logo' },
      { text: 'To check if the courier packaging has arrived safely' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_14',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'GD&T: Perpendicularity of Frame Mounting Bores',
    question: 'A frame side plate drawing has a callout: $\\text{Perpendicularity } [\\perp] \\varnothing 0.02 \\text{ to Datum A}$. What is the shape of the tolerance zone for this bore axis?',
    options: [
      { text: 'A cylindrical tolerance zone of diameter 0.02 mm perfectly perpendicular to datum plane A, within which the entire axis of the bore must lie' },
      { text: 'Two parallel flat planes separated by 0.02 mm' },
      { text: 'A spherical zone of radius 0.02 mm' },
      { text: 'A single point on the edge of the casting' }
    ],
    correctAnswer: 0
  },
  {
    id: 'qa_tech_15',
    roleId: 'quality',
    section: 'field',
    type: 'objective',
    title: 'Laser Interferometer / Tracker for Machine Geometry',
    question: 'When validating the 12-meter straightness and parallelism of linear guide rails on a multi-deck flexo press, why is a Laser Tracker or Interferometer superior to taut piano wire and optical levels?',
    options: [
      { text: 'It provides sub-micron 3D spatial coordinate accuracy over long distances, eliminates gravitational wire sag errors, and automatically compensates for atmospheric air refractive index (temperature, humidity, pressure)' },
      { text: 'It weighs under 5 grams and costs less than a wooden pencil' },
      { text: 'It burns through defective metal using laser cutting' },
      { text: 'It works without any electrical power' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'qa_prob_1',
    roleId: 'quality',
    section: 'problem_solving',
    type: 'scenario',
    title: 'CMM Measurement Discrepancy on Large Frame Casting',
    scenario: 'Echaar’s internal CMM measures the centerline distance between Deck #1 and Deck #2 bearing bores on a 2.5-meter side frame as 850.045 mm (out of tolerance by +0.025 mm). However, the supplier’s external CMM calibration report claims it is 850.015 mm (within tolerance).',
    question: 'How do you structure a rigorous technical correlation audit to resolve this measurement conflict?',
    options: [
      { text: 'Conduct an on-site joint correlation audit: verify that both CMMs are thermally compensated to 20°C, inspect workpiece thermal equilibrium (soak time), verify probe calibration sphere qualification, align datum alignment point setups identically, and cross-verify with calibrated step-gauges.', effectivenessScore: 1.0 },
      { text: 'Accept the vendor’s report because it is within tolerance and saves hassle.', effectivenessScore: 0.2 },
      { text: 'Smash the vendor’s CMM probe with a hammer.', effectivenessScore: 0.1 },
      { text: 'Measure the 2.5-meter casting with a plastic desk ruler and split the difference.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Candidate identifies thermal soak stabilization, probe qualification, datum alignment consistency, and NABL step-gauge cross-validation.'
  },
  {
    id: 'qa_prob_2',
    roleId: 'quality',
    section: 'problem_solving',
    type: 'scenario',
    title: 'High-Speed Dynamic Vibration on 1600 mm Anilox Mandrel',
    scenario: 'An assembled 1600 mm long anilox mandrel exhibits 4.2 mm/s RMS vibration at 3000 RPM on the dynamic balancing machine. The drawing permits maximum 0.8 mm/s. Static runout is within 0.003 mm.',
    question: 'What is the diagnostic sequence to identify and balance this dynamic unbalance?',
    options: [
      { text: 'Perform a Two-Plane Dynamic Balance analysis: recognize that pure static runout check does not detect dynamic couple unbalance (two equal unbalance masses at opposite ends 180° out-of-phase); calculate vector correction weights and positions on both correction planes.', effectivenessScore: 1.0 },
      { text: 'Add random scrap metal weights wherever convenient until vibration stops.', effectivenessScore: 0.2 },
      { text: 'Slow down the balancing machine to 200 RPM so the vibration cannot be felt by hand.', effectivenessScore: 0.2 },
      { text: 'Fill the hollow mandrel completely with wet cement.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates deep knowledge of dynamic couple unbalance, two-plane balancing vectors, and ISO 1940 balance grades.'
  },
  {
    id: 'qa_prob_3',
    roleId: 'quality',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Sub-Surface Micro-Cracks Detected in Base Weldment',
    scenario: 'During ultrasonic testing (UT) of a 40 mm thick full-penetration butt weld joining the machine base foundation plate, the UT probe detects an intermittent linear reflection echo corresponding to lack of sidewall fusion and micro-cracking at a depth of 22 mm over a 300 mm length.',
    question: 'What is your disposition and corrective engineering instruction?',
    options: [
      { text: 'Issue an immediate NCR; instruct carbon-arc air gouging or precision milling to excavate the defective weld metal down to sound base metal (verified by MT/PT), preheat to 150°C, reweld with approved low-hydrogen electrodes using buttering passes, and re-test 100% with UT after 24 hours cooling.', effectivenessScore: 1.0 },
      { text: 'Paint over the weld with high-gloss gray paint so the customer cannot see the crack.', effectivenessScore: 0.1 },
      { text: 'Ignore the ultrasonic echo because the crack is hidden deep inside where no one will ever see it.', effectivenessScore: 0.1 },
      { text: 'Hit the weld seam with a sledgehammer to force it closed.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Evaluates defect excavation, NDT re-verification, preheating, hydrogen delayed cracking containment, and structural weld repair.'
  },
  {
    id: 'qa_prob_4',
    roleId: 'quality',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Persistent Machine Direction Registration Creep',
    scenario: 'A flexo press running an 8-color print job exhibits continuous registration drift of +0.3 mm on Color Deck #6 every 30 minutes, requiring operator manual intervention. Color decks 1 through 5 maintain perfect registration.',
    question: 'How do you isolate whether the root cause is mechanical, electrical/servo, or tooling-related?',
    options: [
      { text: 'Isolate systematically: swap the servo encoder feedback cable with Deck #5 to rule out encoder thermal noise; mount a dial indicator on Deck #6 linear carriage to measure mechanical backlash/slip under nip load; inspect the sleeve mandrel hydraulic expansion pressure and tape adhesion.', effectivenessScore: 1.0 },
      { text: 'Tell the customer flexo printing is naturally blurry and they should lower their expectations.', effectivenessScore: 0.1 },
      { text: 'Turn off Color Deck #6 completely and sell the machine as a 7-color press.', effectivenessScore: 0.1 },
      { text: 'Blame the graphic designer who created the artwork.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests multi-disciplinary diagnostic triage: servo drive/encoder drift vs mechanical linear backlash vs hydraulic clamping slip.'
  },
  {
    id: 'qa_prob_5',
    roleId: 'quality',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Resolving Gage R&R Measurement Conflict Between Inspectors',
    scenario: 'Inspector A consistently rejects mandrel bearing journals as undersize by 0.006 mm using an outside micrometer, while Inspector B consistently accepts the exact same shafts as within tolerance using the same micrometer.',
    question: 'How do you design a Gage R&R study and corrective intervention to resolve this inspector conflict?',
    options: [
      { text: 'Conduct a formal 10-part, 2-appraiser, 3-trial Gage R&R study: evaluate micrometer ratcheting force/feel consistency, inspect anvil parallelism with optical flats, standardize measuring temperature, and introduce a constant-force digital bench micrometer with stand.', effectivenessScore: 1.0 },
      { text: 'Flip a coin each morning to decide which inspector’s measurements to believe.', effectivenessScore: 0.1 },
      { text: 'Fire Inspector A for being too strict.', effectivenessScore: 0.1 },
      { text: 'Stop measuring bearing journals and rely on visual estimation.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates application of Gage R&R, operator measuring force variation, anvil optical flat inspection, and bench micrometer stabilization.'
  }
];
