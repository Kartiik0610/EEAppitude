/**
 * 30 Questions for Production Planning Engineer (PPC)
 * Echaar Equipments Pvt. Ltd.
 */

export const ppcQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'ppc_gen_1',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Managing Critical Vendor Delivery Delay',
    question: 'A key European supplier of high-precision direct-drive servo motors notifies you that shipment will be delayed by 3 weeks, which threatens to blow past the machine delivery commitment date for an export client. What is your immediate action?',
    options: [
      { text: 'Convene an emergency triage meeting with Sales, Design, and Assembly: evaluate if mechanical/electrical sub-assemblies can be progressed in parallel, explore approved alternative servo models with Design, and calculate expedited air-freight options.', scoreMultiplier: 1.0 },
      { text: 'Conceal the delay from senior management and hope the vendor miraculously delivers early.', scoreMultiplier: 0.1 },
      { text: 'Send an angry email to the vendor canceling the entire order without an alternative source.', scoreMultiplier: 0.2 },
      { text: 'Blame the procurement team publicly and disclaim all planning responsibility.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_2',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Balancing Shopfloor Workload vs Sales Pressure',
    question: 'Sales brings in an urgent customer order for an auxiliary rewinder unit and demands it be inserted ahead of three already committed customer press assemblies. How do you handle this?',
    options: [
      { text: 'Run a Finite Capacity Schedule simulation in ERP: quantify the exact delay impact on existing committed customer orders, present trade-offs to the Operations Director, and determine if overtime or subcontracting can accommodate both.', scoreMultiplier: 1.0 },
      { text: 'Immediately disrupt all three ongoing assemblies to satisfy Sales without checking capacity.', scoreMultiplier: 0.3 },
      { text: 'Refuse flatly to speak to the Sales department.', scoreMultiplier: 0.2 },
      { text: 'Secretly accept the order and let the shopfloor figure out the chaos later.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_3',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Inventory Discipline & Physical Verification',
    question: 'During a month-end ERP cycle count, you discover that physical stock of high-grade alloy steel round bars is 25% lower than the ERP inventory ledger. What is your reaction?',
    options: [
      { text: 'Conduct an immediate root-cause trace of recent material issue slips (MIS), check for scrap/rework unrecorded write-offs, adjust ERP with management sign-off, and tighten stores issue controls.', scoreMultiplier: 1.0 },
      { text: 'Manually edit the physical count on paper to match the ERP without investigating the discrepancy.', scoreMultiplier: 0.1 },
      { text: 'Assume someone stole the steel and accuse random store keepers without evidence.', scoreMultiplier: 0.2 },
      { text: 'Ignore the shortage until a machine assembly stops dead for lack of raw material.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_4',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Communication with Shopfloor Supervisors',
    question: 'When releasing weekly production route cards to machine shop supervisors, how do you ensure smooth execution?',
    options: [
      { text: 'Conduct a brief Monday alignment briefing: highlight critical path items, confirm raw material availability in store, verify tooling readiness, and resolve potential bottlenecks collaboratively.', scoreMultiplier: 1.0 },
      { text: 'Dump a stack of 100 job cards on the supervisor’s desk without speaking a single word.', scoreMultiplier: 0.2 },
      { text: 'Assume the machine shop will automatically know what to manufacture without route cards.', scoreMultiplier: 0.1 },
      { text: 'Assign unrealistic 1-hour deadlines for 10-hour machining operations to force speed.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'ppc_gen_5',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Design Change Notices (ECN) Mid-Production',
    question: 'Design Engineering releases an Engineering Change Notice (ECN) modifying the hole pattern on 16 side-frame castings that are already 50% machined on the shop floor. What do you do?',
    options: [
      { text: 'Issue an immediate temporary hold on that specific operation, inspect the 16 castings with Quality to determine if they can be reworked to the new ECN or if rework scrap is incurred, and update the ERP routing and BOM revision.', scoreMultiplier: 1.0 },
      { text: 'Scrap all 16 castings immediately without checking if they can be reworked.', scoreMultiplier: 0.3 },
      { text: 'Ignore the ECN completely and let the machine shop finish the old obsolete design.', scoreMultiplier: 0.2 },
      { text: 'Delete the CAD drawings from the server in frustration.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_6',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Lean Flow & Work-In-Progress (WIP) Management',
    question: 'You notice that the fabrication shop has built 4 months worth of unwelded bracket parts that are now cluttering machine aisles, while final assembly is starved for basic frame weldments. What principle should guide your action?',
    options: [
      { text: 'Implement Pull/Kanban principles: limit Work-In-Progress (WIP) caps to prevent overproduction waste, and re-synchronize fabrication directly to the assembly master schedule demand.', scoreMultiplier: 1.0 },
      { text: 'Praise the fabrication shop for making excess unneeded parts.', scoreMultiplier: 0.2 },
      { text: 'Rent an external warehouse to store more excess WIP.', scoreMultiplier: 0.2 },
      { text: 'Shut down the entire plant for two months.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_7',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Accuracy of Bill of Materials (BOM)',
    question: 'An assembly fitter mentions that two specific pneumatic elbow fittings required for ink pump lines are missing from the official ERP Bill of Materials. How do you resolve this?',
    options: [
      { text: 'Verify with Design Engineering, update the ERP multi-level BOM with the correct part number and quantity, and coordinate with stores to ensure physical kitting bins are stocked.', scoreMultiplier: 1.0 },
      { text: 'Tell the fitter to buy fittings from a local hardware shop with their own pocket money.', scoreMultiplier: 0.1 },
      { text: 'Ignore the issue because fittings are small and cheap.', scoreMultiplier: 0.2 },
      { text: 'Remove the pneumatic ink pump from the machine design.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_8',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Vendor Subcontracting Strategy',
    question: 'When evaluating whether to machine a batch of large flexo side frames in-house on our portal CNC or outsource to an approved tier-1 partner, what factors must you weigh?',
    options: [
      { text: 'Analyze in-house portal CNC available capacity vs backlog, external supplier precision capabilities (CMM verification), landed subcontracting cost, transportation logistics, and risk to delivery milestones.', scoreMultiplier: 1.0 },
      { text: 'Always outsource everything regardless of in-house idle machine capacity.', scoreMultiplier: 0.2 },
      { text: 'Never outsource anything even if machines are backlogged by 6 months.', scoreMultiplier: 0.2 },
      { text: 'Award the work to the lowest bidder who has never worked on industrial machinery before.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_9',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Root-Cause Mindset for Assembly Line Starvation',
    question: 'Final assembly of a flexo press has come to a complete halt because 4 customized spherical roller bearings are out of stock. How do you prevent recurrence?',
    options: [
      { text: 'Conduct an "End-to-End 5-Why" analysis: determine whether the failure was late PO release, vendor lead time elongation, or ERP minimum safety stock inadequacy, and adjust MRP buffer parameters.', scoreMultiplier: 1.0 },
      { text: 'Blame the assembly team for assembling the rest of the machine too quickly.', scoreMultiplier: 0.1 },
      { text: 'Increase safety stock of every single item in the factory to 5 years worth of supply.', scoreMultiplier: 0.2 },
      { text: 'Assume stockouts are an inevitable act of nature that cannot be planned for.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'ppc_gen_10',
    roleId: 'ppc',
    section: 'general',
    type: 'behavioral',
    title: 'Adoption of Digital ERP & Real-Time Tracking',
    question: 'The management introduces shop-floor barcode scanners for operators to clock in/out of production work orders in real-time. Several veteran operators resist the change. How do you champion it?',
    options: [
      { text: 'Demonstrate how barcode logging eliminates cumbersome end-of-shift paper logs, protects operators by crediting their accurate job times, and conduct gentle 1-on-1 walk-throughs on the floor.', scoreMultiplier: 1.0 },
      { text: 'Threaten to cut the salary of anyone who touches a scanner.', scoreMultiplier: 0.1 },
      { text: 'Abandon the ERP scanners and return to illegible hand-written paper slips.', scoreMultiplier: 0.2 },
      { text: 'Ignore the operators and let management fight with them.', scoreMultiplier: 0.2 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'ppc_tech_1',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Critical Path Method (CPM): Total Float',
    question: 'In project network scheduling for a flexo press manufacturing timeline, what does a "Total Float" of zero for an activity signify?',
    options: [
      { text: 'The activity lies on the Critical Path; any delay in this activity will directly delay the final project delivery date' },
      { text: 'The activity requires zero labor hours' },
      { text: 'The activity has an infinite buffer time' },
      { text: 'The activity is completely optional' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_2',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Material Requirements Planning (MRP): Net Requirements',
    question: 'In standard MRP logic, how are "Net Requirements" for a manufactured sub-assembly calculated from Gross Requirements?',
    options: [
      { text: '$\\text{Net} = \\text{Gross Requirements} - (\\text{On-Hand Inventory} + \\text{Scheduled Receipts}) + \\text{Safety Stock}$' },
      { text: '$\\text{Net} = \\text{Gross Requirements} \\times \\text{Lead Time}$' },
      { text: '$\\text{Net} = \\text{Total Invoices} - \\text{TDS Deductions}$' },
      { text: '$\\text{Net} = \\text{On-Hand Inventory} / 2$' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_3',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Economic Batch Quantity (EBQ)',
    question: 'When machining high-precision anilox roll cores where setup cost is high and holding cost is significant, how does the Economic Batch Quantity (EBQ) formula account for concurrent production rate ($P$) and consumption rate ($D$)?',
    options: [
      { text: '$EBQ = \\sqrt{\\frac{2 \\cdot D \\cdot S}{H \\cdot (1 - D/P)}}$' },
      { text: '$EBQ = \\frac{D \\times P}{S}$' },
      { text: '$EBQ = \\sqrt{D \\cdot H}$' },
      { text: '$EBQ = D \\times \\text{Lead Time}$' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_4',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Takt Time vs Cycle Time',
    question: 'If the monthly customer demand for printing converting machines is 4 units and the manufacturing plant operates 200 net working hours per month, what is the Takt Time per machine?',
    options: [
      { text: '50 hours per machine ($200 / 4$)' },
      { text: '800 hours per machine' },
      { text: '4 hours per machine' },
      { text: '25 hours per machine' }
    ],
    correctAnswer: 0 // Takt Time = Net Available Time / Customer Demand = 200 / 4 = 50 hours
  },
  {
    id: 'ppc_tech_5',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Rough-Cut Capacity Planning (RCCP)',
    question: 'At which stage of manufacturing planning is Rough-Cut Capacity Planning (RCCP) executed?',
    options: [
      { text: 'At the Master Production Schedule (MPS) level to validate key critical resource/machine availability before running detailed MRP' },
      { text: 'After the final machine has already shipped to the customer' },
      { text: 'During daily morning shift attendance' },
      { text: 'Only during annual financial auditing' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_6',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Safety Stock & Lead Time Demand Variance',
    question: 'If the lead time for a critical imported linear bearing increases from 4 weeks to 8 weeks with higher standard deviation of demand, what must happen to the calculated safety stock to maintain a 98% service level ($Z = 2.05$)?',
    options: [
      { text: 'Safety stock must increase proportionally to the square root of lead time ($\\sigma_{LT} = \\sqrt{LT} \\cdot \\sigma_D$)' },
      { text: 'Safety stock drops to zero' },
      { text: 'Safety stock decreases by 50%' },
      { text: 'Safety stock is unaffected by lead time' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_7',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'ABC Inventory Classification (Pareto Principle)',
    question: 'In heavy industrial equipment manufacturing, what characterizes "Class A" inventory items?',
    options: [
      { text: 'Roughly 10-20% of total part numbers accounting for 70-80% of total inventory expenditure (e.g. Servo motors, CI drums, CNC controllers, Chillers)' },
      { text: 'Fasteners, washers, and cotter pins that cost a few rupees each' },
      { text: 'Scrap metal lying outside the machine shop' },
      { text: 'Obsolete drawings stored in filing cabinets' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_8',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Overall Equipment Effectiveness (OEE) Availability Rate',
    question: 'A CNC portal milling machine is scheduled for an 8-hour shift (480 minutes). During the shift, 30 minutes are spent on planned maintenance, 40 minutes on an unexpected electrical breakdown, and 20 minutes waiting for raw material. What is the machine’s Availability Rate?',
    options: [
      { text: 'Approximately 86.7% (Operating Time 390 min / Planned Operating Time 450 min)' },
      { text: '50.0%' },
      { text: '100%' },
      { text: '72.5%' }
    ],
    correctAnswer: 0 // Planned time = 480 - 30 (planned) = 450 min. Unplanned downtime = 40 + 20 = 60 min. Operating time = 390 min. Availability = 390 / 450 = 86.67%
  },
  {
    id: 'ppc_tech_9',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Little’s Law in Operations Management',
    question: 'According to Little’s Law, what is the fundamental relationship between Work-In-Progress ($WIP$), Throughput Rate ($TH$), and Cycle Time / Lead Time ($CT$)?',
    options: [
      { text: '$WIP = TH \\times CT$' },
      { text: '$WIP = TH / CT$' },
      { text: '$WIP = TH + CT$' },
      { text: '$WIP = CT / TH^2$' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_10',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Routing Master in ERP',
    question: 'In an ERP system, what information is fundamentally maintained in a part’s "Routing Sheet"?',
    options: [
      { text: 'The sequential list of operations, work centers/machines, setup times, run cycle times per piece, and inspection checkpoints required to fabricate the part' },
      { text: 'The customer’s home address and credit card number' },
      { text: 'The resume of the sales engineer' },
      { text: 'The factory electric power bill' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_11',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Theory of Constraints (TOC) Drum-Buffer-Rope',
    question: 'In Goldratt’s Theory of Constraints (TOC) for manufacturing systems, what acts as the "Drum"?',
    options: [
      { text: 'The system constraint or bottleneck machine that dictates the production pace of the entire plant' },
      { text: 'The musical chime played at the start of shift' },
      { text: 'The shipping truck engine' },
      { text: 'The largest storage tank in the chemical plant' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_12',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Forward Scheduling vs Backward Scheduling',
    question: 'Why is "Backward Scheduling" from the committed customer delivery date commonly employed in ERP systems for capital machinery assembly?',
    options: [
      { text: 'It schedules each operation as late as possible without missing the final delivery date, thereby minimizing work-in-progress holding costs and tied-up working capital' },
      { text: 'It runs the machine backwards in reverse direction' },
      { text: 'It begins manufacturing items 10 years before the customer places an order' },
      { text: 'It eliminates the need for any engineering drawings' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_13',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Vendor On-Time-In-Full (OTIF) Metric',
    question: 'How is the On-Time-In-Full (OTIF) delivery performance metric calculated for sub-assembly component suppliers?',
    options: [
      { text: '$\\frac{\\text{Number of Deliveries that arrived exactly on schedule AND with 100\\% correct quantities}}{\\text{Total Number of Deliveries}} \\times 100\\%$' },
      { text: 'The average weight of components delivered divided by price' },
      { text: 'The number of phone calls made to the vendor' },
      { text: 'The distance between the vendor factory and Echaar plant' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_14',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Single-Minute Exchange of Die (SMED): Internal vs External Setup',
    question: 'In Lean setup reduction (SMED), what is the key rule regarding "External Setup" activities?',
    options: [
      { text: 'External setup activities (fetching tools, fixtures, preheating, pre-setting cutters) MUST be executed while the machine is actively running, never while the spindle is stopped' },
      { text: 'All setup activities must be conducted outside the factory building in the rain' },
      { text: 'Only external contractors are allowed to change tools' },
      { text: 'Setup time should be extended as long as possible to give operators a break' }
    ],
    correctAnswer: 0
  },
  {
    id: 'ppc_tech_15',
    roleId: 'ppc',
    section: 'field',
    type: 'objective',
    title: 'Inventory Turnover Ratio (ITR)',
    question: 'If Echaar’s annual Cost of Goods Sold (COGS) is ₹60 Crores and average inventory maintained throughout the year is ₹15 Crores, what is the Inventory Turnover Ratio (ITR)?',
    options: [
      { text: '4.0 turns per year (average inventory holding period of 91 days)' },
      { text: '0.25 turns per year' },
      { text: '75.0 turns per year' },
      { text: '1.5 turns per year' }
    ],
    correctAnswer: 0 // ITR = COGS / Avg Inventory = 60 / 15 = 4.0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'ppc_prob_1',
    roleId: 'ppc',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Critical Servo Supplier Strike with 16-Week Lead Time',
    scenario: 'The exclusive supplier for the direct-drive servo motors used on the CI flexo press announces a sudden factory strike. Four machines on the shop floor are at 70% mechanical completion and require motors within 4 weeks to meet client commissioning deadlines.',
    question: 'What comprehensive contingency plan do you develop as PPC lead?',
    options: [
      { text: 'Work with Design & Electrical engineering to rapidly qualify a secondary servo brand (e.g., Siemens/B&R/Schneider), verify mounting plate adaptors, secure buffer distributor stock via air-freight, and adjust the assembly timeline to mount drives at the final stage.', effectivenessScore: 1.0 },
      { text: 'Halt all four press assemblies completely and send all assembly fitters home for 4 months.', effectivenessScore: 0.1 },
      { text: 'Ship the four presses to clients with no motors installed and hope the clients find their own motors.', effectivenessScore: 0.1 },
      { text: 'Blame the procurement team and take no action.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Candidate demonstrates dual-sourcing agility, modular adapter engineering collaboration, critical-path rescheduling, and client communication.'
  },
  {
    id: 'ppc_prob_2',
    roleId: 'ppc',
    section: 'problem_solving',
    type: 'scenario',
    title: 'High-Value Rush Export Order Injection into Booked Floor',
    scenario: 'Corporate leadership secures a ₹8-Crore urgent export order for a converting press with a contractual penalty of ₹1 Lakh/day for every day delayed past 90 days. All in-house CNC boring machines and assembly bays are currently 100% committed to domestic orders.',
    question: 'How do you engineer a realistic finite capacity schedule to meet this delivery without destroying domestic client commitments?',
    options: [
      { text: 'Perform a finite capacity loading: ring-fence the portal CNC for the export critical side frames with 24/7 dedicated shifts, subcontract non-core bracketry and standard turning to audited tier-1 vendors, and implement parallel sub-assembly cells.', effectivenessScore: 1.0 },
      { text: 'Cancel all domestic orders without informing the domestic clients.', effectivenessScore: 0.2 },
      { text: 'Promise the 90-day delivery verbally without scheduling a single machine operation.', effectivenessScore: 0.1 },
      { text: 'Tell leadership that taking new sales orders is forbidden by planning.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Assesses capacity loading, tier-1 subcontracting strategy, overtime optimization, and penalty risk management.'
  },
  {
    id: 'ppc_prob_3',
    roleId: 'ppc',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Chronic Assembly Bay Starvation for Bought-Out Hardware',
    scenario: 'Assembly technicians report that presses frequently sit idle for days because small bought-out items (fittings, proximity sensors, cable glands, specialized dowel pins) are missing, despite ERP showing them "In Stock".',
    question: 'What structural system redesign do you implement to permanently resolve this kitting failure?',
    options: [
      { text: 'Implement a formal "Two-Bin Kanban" hardware replenishment at point-of-use and enforce a mandatory "100% Kit-Cart Audit" in stores 3 days prior to release of work orders to the assembly floor.', effectivenessScore: 1.0 },
      { text: 'Allow technicians to leave the factory premises and wander through hardware bazaars whenever a screw is missing.', effectivenessScore: 0.1 },
      { text: 'Stop using sensors and cable glands on machines.', effectivenessScore: 0.1 },
      { text: 'Lock stores permanently so no one can ever take parts out.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests point-of-use Kanban, pre-kitting audit gates, and resolving ERP phantom inventory.'
  },
  {
    id: 'ppc_prob_4',
    roleId: 'ppc',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Electrical & Automation Testing Bay Bottleneck',
    scenario: 'The plant produces 3 machines per month, but the final Electrical Testing & Servo Tuning Bay can only commission 1.5 machines per month due to limited test power panels and specialized drive engineers, causing a massive backlog of finished mechanical presses.',
    question: 'How do you double testing throughput without building a costly new building?',
    options: [
      { text: 'Implement pre-commissioning offline: build modular test rigs to pre-tune PLC software, pre-wire electrical cabinets, and perform drive parameter loading prior to docking onto the mechanical press, reducing bay cycle time from 14 days to 4 days.', effectivenessScore: 1.0 },
      { text: 'Ship uncommissioned machines to customer sites and test them live with customer high-voltage power.', effectivenessScore: 0.2 },
      { text: 'Reduce electrical testing time to 5 minutes by skipping all safety interlock and servo tuning tests.', effectivenessScore: 0.1 },
      { text: 'Cap mechanical production at 1 machine per month permanently.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Tests off-line pre-commissioning, hardware-in-the-loop (HIL) testing, and debottlenecking test bays.'
  },
  {
    id: 'ppc_prob_5',
    roleId: 'ppc',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Economic Batch Sizing for Precision Mandrel Machining',
    scenario: 'Mandrel shaft machining has a 6-hour CNC setup time. The shop floor supervisor wants to machine batches of 50 mandrels to maximize CNC efficiency, but annual press demand is only 24 mandrels (2 per month), tying up ₹40 Lakhs of expensive alloy steel in inventory.',
    question: 'How do you negotiate and calculate an optimal batch strategy between machine efficiency and working capital?',
    options: [
      { text: 'Calculate the true Economic Batch Quantity (EBQ) considering inventory carrying cost (22% per annum) and machine setup cost; simultaneously lead a SMED initiative to reduce setup time from 6 hours to 1.5 hours, making smaller, leaner batches of 6 units commercially optimal.', effectivenessScore: 1.0 },
      { text: 'Allow the supervisor to machine 200 mandrels so they never have to change the setup again.', effectivenessScore: 0.2 },
      { text: 'Force the supervisor to machine 1 mandrel at a time with 6 hours of setup for each piece.', effectivenessScore: 0.2 },
      { text: 'Outsource mandrels to an uncertified foundry.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates deep grasp of EBQ vs SMED: setup reduction enables smaller lean batches without tying up working capital.'
  }
];
