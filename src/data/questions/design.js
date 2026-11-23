/**
 * 30 Questions for Design Engineer
 * Echaar Equipments Pvt. Ltd.
 */

export const designQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'des_gen_1',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Design for Manufacturing (DFM) Collaboration',
    question: 'A CNC shop-floor supervisor informs you that a tight internal corner radius (R1 mm) on a heavy mounting bracket in your CAD model requires a fragile, expensive micro-end mill and doubles machining time. What is your approach?',
    options: [
      { text: 'Review the mating component function, determine if a relief undercut or R4 mm radius is acceptable without compromising structural integrity, and immediately revise the drawing.', scoreMultiplier: 1.0 },
      { text: 'Insist on keeping R1 mm because it was derived from an initial aesthetic concept.', scoreMultiplier: 0.2 },
      { text: 'Tell the machine shop to use manual hand grinding to achieve the corner after rough machining.', scoreMultiplier: 0.5 },
      { text: 'Ask the supervisor to consult the plant manager before making any suggestions.', scoreMultiplier: 0.4 }
    ]
  },
  {
    id: 'des_gen_2',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'CAD Standard & Version Control Discipline',
    question: 'You make an urgent dimensional revision to a printing cylinder shaft bearing journal on a Friday evening. How do you ensure product lifecycle integrity?',
    options: [
      { text: 'Check the model back into PDM/PLM with an incremented revision letter, update the revision block with engineering change notice (ECN) description, and notify PPC and Quality.', scoreMultiplier: 1.0 },
      { text: 'Overwrite the file directly on the local desktop and email the STEP file only to the lathe operator.', scoreMultiplier: 0.2 },
      { text: 'Wait until the machine is assembled before creating an official drawing revision.', scoreMultiplier: 0.3 },
      { text: 'Print a paper copy, mark it with a red pen, and leave it on the assembly bench without updating the master 3D CAD model.', scoreMultiplier: 0.3 }
    ]
  },
  {
    id: 'des_gen_3',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Balancing Innovation with Proven Reliability',
    question: 'When designing a new web guide mechanism for a flexo converting press, what is your design philosophy?',
    options: [
      { text: 'Leverage proven, field-tested kinematics and standard off-the-shelf precision bearings while innovating modular sub-assemblies for quick maintenance.', scoreMultiplier: 1.0 },
      { text: 'Design every single screw, pin, and bracket as a completely custom part to make the design proprietary.', scoreMultiplier: 0.3 },
      { text: 'Copy the competitor’s mechanism exactly without analyzing underlying dynamic forces.', scoreMultiplier: 0.2 },
      { text: 'Rely solely on aesthetic visual styling without calculating load capacities.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'des_gen_4',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Design Errors Discovered on Assembly Floor',
    question: 'During assembly of a prototype unit, two pneumatic cylinder mounting holes are misaligned by 5 mm due to an oversight in your assembly mate references. What is your immediate response?',
    options: [
      { text: 'Immediately take ownership, visit the assembly floor with calibrated vernier calipers, evaluate if an adapter plate or bracket re-machining is cleanest, and issue a formal ECN.', scoreMultiplier: 1.0 },
      { text: 'Blame the assembly technician for not forcing the cylinder into place.', scoreMultiplier: 0.1 },
      { text: 'Argue that the CNC programmer must have entered incorrect coordinates without checking the CAD.', scoreMultiplier: 0.2 },
      { text: 'Ask the fitters to gas-cut an oblong slot and ignore updating the 3D model.', scoreMultiplier: 0.3 }
    ]
  },
  {
    id: 'des_gen_5',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Tolerance Stack-Up & Cost Awareness',
    question: 'When applying geometric dimensioning and tolerancing (GD&T) to a complex multi-stage gear transmission housing, how do you balance precision against cost?',
    options: [
      { text: 'Perform a statistical worst-case and RSS (Root Sum Squares) tolerance stackup analysis, applying sub-micron tolerances only to critical bearing centers and locating dowels.', scoreMultiplier: 1.0 },
      { text: 'Apply ±0.005 mm to every single dimension on the drawing regardless of function.', scoreMultiplier: 0.2 },
      { text: 'Use open general workshop tolerances (±0.5 mm) everywhere to make manufacturing as cheap as possible.', scoreMultiplier: 0.3 },
      { text: 'Omit tolerances and let the machinist decide on the shop floor.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'des_gen_6',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Supplier & Component Sourcing Mindset',
    question: 'A supplier offers a custom linear guide rail that is 15% cheaper than the standard THK/HIWIN rail specified in your design. What should be your verification process?',
    options: [
      { text: 'Request detailed technical test certificates, verify dynamic load ratings ($C$), precision class, preload, and life calculation ($L_{10}$) before approving an engineering change.', scoreMultiplier: 1.0 },
      { text: 'Accept it immediately based purely on the lower purchase price.', scoreMultiplier: 0.3 },
      { text: 'Reject it outright without reviewing any technical specifications.', scoreMultiplier: 0.4 },
      { text: 'Approve it for customer machines without conducting endurance or wear testing.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'des_gen_7',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Design for Serviceability & Ergonomics (DFM/DFS)',
    question: 'When locating lubrication grease nipples and pneumatic filter-regulator-lubricator (FRL) units on a 12-meter long printing press, where do you place them?',
    options: [
      { text: 'Centralize grease blocks and FRL units at waist height along accessible operator walkways with clear sight glasses and quick-disconnect ports.', scoreMultiplier: 1.0 },
      { text: 'Tuck them deep inside the central frame behind heavy sheet metal covers to keep them out of sight.', scoreMultiplier: 0.2 },
      { text: 'Scatter them randomly wherever open space exists inside the frame.', scoreMultiplier: 0.3 },
      { text: 'Place them on the very top of the machine frame requiring maintenance staff to climb a 4-meter ladder for daily checks.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'des_gen_8',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Adoption of Finite Element Analysis (FEA) Simulation',
    question: 'You conduct an FEA simulation on a cantilevered anilox roll mandrel. The stress contours show high stress concentrations at a sharp shoulder fillet. What is your proper engineering procedure?',
    options: [
      { text: 'Incorporate a generous transition radius or relief groove, refine the mesh around the stress concentration, and re-run the simulation to verify the von Mises stress drops below fatigue endurance limit.', scoreMultiplier: 1.0 },
      { text: 'Change the color scale in the simulation software so the red stress zones appear green.', scoreMultiplier: 0.1 },
      { text: 'Assume FEA software is purely theoretical and ignore the shoulder stress concentration.', scoreMultiplier: 0.2 },
      { text: 'Switch to a lower strength material in the software until the plot clears.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'des_gen_9',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Cross-Department Communication with PPC & Purchase',
    question: 'When finalizing the Bill of Materials (BOM) for a custom flexo press order, how do you handle long-lead bought-out items (e.g. servo drives, planetary gearboxes)?',
    options: [
      { text: 'Release an Advance Long-Lead Procurement BOM to PPC and Purchase immediately upon preliminary sizing, well before complete mechanical detailing is finished.', scoreMultiplier: 1.0 },
      { text: 'Wait until the entire machine is 100% 3D modeled and 2D detailed before telling purchase about 16-week lead time servo motors.', scoreMultiplier: 0.2 },
      { text: 'Assume purchase already knows what motors will be used without sending formal part numbers.', scoreMultiplier: 0.2 },
      { text: 'Order whatever motors are currently lying in excess in the store regardless of torque ratings.', scoreMultiplier: 0.3 }
    ]
  },
  {
    id: 'des_gen_10',
    roleId: 'design',
    section: 'general',
    type: 'behavioral',
    title: 'Continuous Technical Learning & Industry Standards',
    question: 'How do you stay updated with modern machine design standards (CE directives, ISO 13849 safety of machinery, AGMA gearing standards)?',
    options: [
      { text: 'Proactively study international machine safety directives, technical journals on web handling, and incorporate compliant interlocking and safety factors into CAD models.', scoreMultiplier: 1.0 },
      { text: 'Only read machine manuals when a customer issues a legal notice.', scoreMultiplier: 0.2 },
      { text: 'Rely solely on whatever design templates were created 20 years ago without questioning their safety validity.', scoreMultiplier: 0.3 },
      { text: 'Assume safety is only the responsibility of the customer’s operators.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'des_tech_1',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Euler-Bernoulli Beam Deflection of Printing Rollers',
    question: 'For a solid steel cylindrical roller of length $L$, diameter $D$, supported on end bearings and subjected to a uniformly distributed nip force $w$, the maximum central deflection $\\delta$ is inversely proportional to which power of diameter $D$?',
    options: [
      { text: '$D^2$' },
      { text: '$D^3$' },
      { text: '$D^4$' },
      { text: '$D^5$' }
    ],
    correctAnswer: 2 // delta = (5 w L^4) / (384 E I), where I = (pi * D^4) / 64 -> inversely proportional to D^4
  },
  {
    id: 'des_tech_2',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Shaft Fatigue & Goodman Diagram',
    question: 'When designing a rotating drive shaft subjected to fully reversed bending stresses and steady torsional shear, which fatigue failure criterion is most commonly used to size the shaft with a safety factor?',
    options: [
      { text: 'Modified Goodman or ASME Elliptic criteria combining alternating bending and mean torsional stresses' },
      { text: 'Rankine Maximum Principal Stress criterion for static brittle materials' },
      { text: 'Saint-Venant Maximum Principal Strain theory' },
      { text: 'Hooke’s Law linear spring equation' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_3',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Geometric Tolerancing: Position with MMC',
    question: 'In a drawing callout $\\text{Position } \\varnothing 0.05 \\text{ [M] to Datum A, B, C}$, what is the effect of the Maximum Material Condition (MMC) modifier symbol [M]?',
    options: [
      { text: 'The position tolerance is permanently locked at 0.05 mm regardless of hole size' },
      { text: 'As the actual manufactured hole departs from MMC towards LMC (grows larger), bonus tolerance is gained for the center location' },
      { text: 'The hole must be machined with zero surface roughness' },
      { text: 'The position tolerance only applies when the ambient room temperature is exactly 20°C' }
    ],
    correctAnswer: 1
  },
  {
    id: 'des_tech_4',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Bearing Life Calculation ($L_{10}$)',
    question: 'For a deep groove ball bearing with dynamic load rating $C$, subjected to an equivalent dynamic radial load $P$, how is the basic rating life $L_{10}$ in millions of revolutions calculated?',
    options: [
      { text: '$L_{10} = (C / P)^3$' },
      { text: '$L_{10} = (C / P)^{10/3}$' },
      { text: '$L_{10} = (P / C)^2$' },
      { text: '$L_{10} = C \\times P \\times 10^6$' }
    ],
    correctAnswer: 0 // For ball bearings p = 3, for roller bearings p = 10/3
  },
  {
    id: 'des_tech_5',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Spur Gear Involute Interference',
    question: 'To prevent gear tooth undercut during manufacturing of standard $20^\\circ$ full-depth involute spur gears without profile shift, what is the theoretical minimum number of pinion teeth ($Z_{\\min}$)?',
    options: [
      { text: '12 teeth' },
      { text: '14 teeth' },
      { text: '17 teeth' },
      { text: '25 teeth' }
    ],
    correctAnswer: 2 // Z_min = 2 / sin^2(20 deg) = 2 / 0.11697 = ~17.1 (standard 17 teeth)
  },
  {
    id: 'des_tech_6',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Thermal Expansion in CI Drum Assemblies',
    question: 'A large cast-iron central impression drum of diameter 2000 mm operates with an internal temperature variation $\\Delta T = 15^\\circ\\text{C}$. Taking the coefficient of thermal expansion $\\alpha = 11 \\times 10^{-6}\\text{ /}^\\circ\\text{C}$, what is the diametral expansion $\\Delta D$?',
    options: [
      { text: '0.033 mm (33 microns)' },
      { text: '0.330 mm (330 microns)' },
      { text: '3.300 mm' },
      { text: '0.003 mm' }
    ],
    correctAnswer: 1 // delta D = D * alpha * delta T = 2000 * 11e-6 * 15 = 0.330 mm
  },
  {
    id: 'des_tech_7',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Preloaded Bolted Joints & Clamping Force',
    question: 'Why are critical frame structural bolts tightened to a specified proof load / tightening torque rather than hand-snugged?',
    options: [
      { text: 'To ensure high residual clamping force ($F_i$) so that external alternating cyclic loads do not cause joint separation or bolt fatigue failure' },
      { text: 'To permanently strip the internal threads of the cast frame' },
      { text: 'To make it impossible for anyone to ever disassemble the joint' },
      { text: 'To eliminate the need for spring washers on uncritical covers' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_8',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Critical Speed of Rotating Shafts (Rayleigh-Ritz)',
    question: 'When designing a long, high-speed idler roller operating at 2400 RPM (40 Hz), why must the first natural bending frequency ($f_n$) be placed at least 25% away from operating frequency?',
    options: [
      { text: 'To avoid violent mechanical resonance, excessive dynamic runout, and catastrophic bearing failure at critical speed' },
      { text: 'To prevent the motor paint from cracking' },
      { text: 'To decrease the roller wall thickness below 1 mm' },
      { text: 'To satisfy electrical grounding standards' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_9',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Von Mises Yield Criterion',
    question: 'Under a state of plane stress where $\\sigma_x = 100\\text{ MPa}, \\sigma_y = 100\\text{ MPa}$, and shear stress $\\tau_{xy} = 0$, what is the equivalent von Mises stress $\\sigma_v$?',
    options: [
      { text: '200 MPa' },
      { text: '141.4 MPa' },
      { text: '100 MPa' },
      { text: '0 MPa' }
    ],
    correctAnswer: 2 // sigma_v = sqrt(100^2 - 100*100 + 100^2 + 0) = sqrt(10000) = 100 MPa
  },
  {
    id: 'des_tech_10',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Doctor Blade Chamber Hydraulics & Inking',
    question: 'In a closed-chamber doctor blade system for flexo printing, what design feature ensures uniform hydrodynamic ink pressure across the entire face of the anilox roll?',
    options: [
      { text: 'Symmetrically ported manifold inlets with tapered internal cross-section and positive blade clamping angle' },
      { text: 'An open bucket with no ink circulation' },
      { text: 'A single high-pressure nozzle spraying ink at one end only' },
      { text: 'A completely unsealed chamber allowing free dripping' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_11',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Linear Motion: Ball Screw Critical Speed & Buckling',
    question: 'When sizing a horizontal ball screw for plate cylinder deck positioning, which two physical failure modes dictate the maximum allowable length and rotational speed?',
    options: [
      { text: 'Euler column buckling under compressive axial load and whirling resonance at critical rotational speed ($N_c$)' },
      { text: 'Surface oxidation and acoustic decibel rating' },
      { text: 'Magnetic permeability and electrical resistance' },
      { text: 'Viscosity of the ball nut ball bearings' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_12',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Welded Frame Stress Relieving',
    question: 'Why must heavy fabricated steel machine frames undergo thermal stress relief (annealing/normalizing) before precision CNC finish machining?',
    options: [
      { text: 'To relieve internal residual stresses from welding that would otherwise cause slow dimensional warping and distortion after machining' },
      { text: 'To change the chemical composition from steel to aluminum' },
      { text: 'To melt away all weld seams' },
      { text: 'To polish the outer surface to a mirror shine' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_13',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Servo Motor Inertia Ratio',
    question: 'In high-dynamic motion control for flexographic print cylinders, what is the recommended ratio of reflected load inertia ($J_L$) to motor rotor inertia ($J_M$) for stable servo tuning?',
    options: [
      { text: 'Ideally $J_L / J_M \\le 5:1$ (and rarely exceeding $10:1$)' },
      { text: '$J_L / J_M = 100:1$' },
      { text: '$J_L / J_M = 1:100$' },
      { text: 'Inertia ratio has zero effect on servo tuning stability' }
    ],
    correctAnswer: 0
  },
  {
    id: 'des_tech_14',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Pneumatic Cylinder Sizing',
    question: 'A pneumatic cylinder with a bore diameter of 63 mm is operated at 6 bar ($0.6\\text{ N/mm}^2$) compressed air pressure. What theoretical extension force does it exert? (Area $\\approx 3117\\text{ mm}^2$)',
    options: [
      { text: 'Approximately 1870 N (~190 kgf)' },
      { text: 'Approximately 520 N (~53 kgf)' },
      { text: 'Approximately 3740 N (~380 kgf)' },
      { text: 'Approximately 187 N (~19 kgf)' }
    ],
    correctAnswer: 0 // F = P * A = 0.6 * 3117 = 1870.2 N
  },
  {
    id: 'des_tech_15',
    roleId: 'design',
    section: 'field',
    type: 'objective',
    title: 'Selection of Dynamic O-Ring Seals',
    question: 'In hydraulic cylinder design for deck locking mechanisms, what design feature prevents dynamic elastomer seal extrusion at pressures exceeding 150 bar?',
    options: [
      { text: 'PTFE anti-extrusion backup rings installed on the low-pressure side of the O-ring groove' },
      { text: 'Increasing the diametral clearance gap between piston and cylinder tube to 2 mm' },
      { text: 'Using silicone grease only' },
      { text: 'Removing the seal groove completely' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'des_prob_1',
    roleId: 'design',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Elimination of Roller Deflection Banding in Flexo Print',
    scenario: 'A customer tests an Echaar flexo press on a 1400 mm wide paper substrate. Print output displays noticeable horizontal density banding across the center of the web at high print speeds. FEA analysis shows the plate cylinder mandrel deflects by 18 microns at mid-span under 1500 N nip impression load.',
    question: 'What engineering redesign options do you propose to eliminate this mid-span deflection banding?',
    options: [
      { text: 'Introduce a crowned roller profile (parabolic camber of 18 microns) or implement carbon-fiber composite high-modulus mandrels to reduce deflection under load.', effectivenessScore: 1.0 },
      { text: 'Tell the customer to reduce printing nip pressure so low that the ink barely transfers.', effectivenessScore: 0.3 },
      { text: 'Add a third intermediate support bearing in the direct middle of the printing width, cutting through the print plate.', effectivenessScore: 0.2 },
      { text: 'Increase motor horsepower without changing roller mechanical dimensions.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Candidate should recognize roller cambering (crowning), composite high-modulus materials, or stepped diameter shaft stiffening.'
  },
  {
    id: 'des_prob_2',
    roleId: 'design',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Machine Frame Resonant Vibration at 420 m/min',
    scenario: 'During high-speed factory trials of a converting machine, the main side frame exhibits violent acoustic and structural resonance when speed crosses 420 m/min, corresponding to a 14 Hz unbalance excitation from the heavy chill roller.',
    question: 'How do you modify the structural design to shift the frame natural frequency away from this excitation band?',
    options: [
      { text: 'Incorporate internal diagonal stiffening gussets, ribs, and dampening polymer/epoxy grout inside the hollow frame box sections to raise structural natural frequency above 22 Hz.', effectivenessScore: 1.0 },
      { text: 'Loosen the anchor foundation bolts to decouple the frame from the floor.', effectivenessScore: 0.1 },
      { text: 'Lock the machine software so it never exceeds 400 m/min permanently without informing the customer.', effectivenessScore: 0.3 },
      { text: 'Reduce the frame plate thickness from 40 mm to 15 mm to make it more flexible.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Tests knowledge of structural dynamic stiffening, modal frequency shifting ($f_n = \\sqrt{k/m}$), and vibration damping techniques.'
  },
  {
    id: 'des_prob_3',
    roleId: 'design',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Material Trade-off: Carbon Fiber vs Alloy Steel Mandrels',
    scenario: 'The R&D team is evaluating switching the plate sleeve mandrels from nickel-chromium steel (42CrMo4) to high-modulus Carbon-Fiber Reinforced Polymer (CFRP) to permit faster manual sleeve changeovers by single operators.',
    question: 'What comprehensive design matrix must you present to justify or reject this engineering transition?',
    options: [
      { text: 'Evaluate specific stiffness ($E / \\rho$), rotational moment of inertia ($J$), critical whirling speed, bearing load reduction, surface wear resistance against steel sleeves, and total cost/ROI.', effectivenessScore: 1.0 },
      { text: 'Base the decision solely on which material looks more modern in marketing photographs.', effectivenessScore: 0.2 },
      { text: 'Reject CFRP immediately because steel has been used for 100 years.', effectivenessScore: 0.3 },
      { text: 'Adopt CFRP without analyzing impact resistance against accidental operator tool drops.', effectivenessScore: 0.4 }
    ],
    evaluationRubric: 'Evaluates multi-attribute engineering trade-offs: specific stiffness, inertia, dynamic response, wear protection, and cost.'
  },
  {
    id: 'des_prob_4',
    roleId: 'design',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Toolless 60-Second Inking Chamber Quick-Change Mechanism',
    scenario: 'Product Management requests a redesign of the enclosed doctor blade inking chamber: currently, operators spend 18 minutes loosening 12 Allen bolts to remove the chamber for washup. Target is under 60 seconds without tools.',
    question: 'How do you architect a kinematic quick-change clamping mechanism for this subsystem?',
    options: [
      { text: 'Design a precision dovetail or linear guide slide with dual over-center toggle clamps and positive pneumatic cylinder lock with safety interlock switch.', effectivenessScore: 1.0 },
      { text: 'Replace the 12 bolts with heavy magnetic tape.', effectivenessScore: 0.2 },
      { text: 'Leave the chamber loose and resting purely under gravity without clamps.', effectivenessScore: 0.1 },
      { text: 'Use wing nuts that the operator must tighten with large pliers.', effectivenessScore: 0.4 }
    ],
    evaluationRubric: 'Demonstrates mechanism design, ergonomics, quick-clamping kinematics, and operator safety.'
  },
  {
    id: 'des_prob_5',
    roleId: 'design',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Thermal Growth Differential in Chilled CI Drum Bearings',
    scenario: 'A Central Impression flexo drum operates with internal water chilled to 18°C while the surrounding machine environment reaches 42°C in summer. The cast-iron side frames expand while the chilled drum journals contract slightly, causing spherical roller bearing preloading and overheating.',
    question: 'How do you engineer the bearing arrangement to accommodate this axial and radial differential thermal movement?',
    options: [
      { text: 'Adopt a "Fixed-Floating" bearing arrangement: one side locked axially in a spherical roller bearing, and the opposite side using a CARB toroidal or cylindrical roller bearing that permits unrestricted axial float without internal stress.', effectivenessScore: 1.0 },
      { text: 'Firmly clamp both bearings on both ends with zero clearance and high pre-load.', effectivenessScore: 0.2 },
      { text: 'Turn off the water cooling inside the CI drum completely.', effectivenessScore: 0.1 },
      { text: 'Use loose sleeve bushings with 2 mm radial play allowing the drum to rattle.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Tests deep knowledge of machine thermal management, fixed vs floating bearing design, and CARB bearing kinematics.'
  }
];
