/**
 * 30 Questions for Technical Marketing Engineer
 * Echaar Equipments Pvt. Ltd.
 */

export const techMarketingQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'mkt_gen_1',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Client Price Resistance vs Value Selling',
    question: 'A prospective packaging client states that a low-cost local machinery builder is offering an 8-color flexo press for 30% less than Echaar’s quotation. How do you respond?',
    options: [
      { text: 'Acknowledge the upfront price difference respectfully; present a detailed Total Cost of Ownership (TCO) model highlighting Echaar’s gearless direct-drive accuracy, 60% faster job changeover, substrate scrap reduction, and 15-year structural reliability.', scoreMultiplier: 1.0 },
      { text: 'Immediately match the competitor’s 30% discount without consulting company management.', scoreMultiplier: 0.2 },
      { text: 'Insult the competitor and call their machinery junk.', scoreMultiplier: 0.1 },
      { text: 'Walk away from the client and refuse to talk to them again.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_2',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Customer Requirements Scoping (Active Listening)',
    question: 'During an initial technical discovery meeting, the client’s production head talks for 20 minutes about severe print registration problems and substrate stretching on their existing machines. What is your reaction?',
    options: [
      { text: 'Listen attentively, take granular technical notes (substrate micron thickness, line tension, temperature, web speeds), ask clarifying questions about their drying tunnels, and map these specific pain points directly to Echaar’s CI drum chill-circuit solutions.', scoreMultiplier: 1.0 },
      { text: 'Interrupt the client repeatedly to read our company brochure out loud.', scoreMultiplier: 0.2 },
      { text: 'Check your phone and nod without taking notes.', scoreMultiplier: 0.1 },
      { text: 'Tell the client their operators don’t know how to run machines.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_3',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Technical Honesty & Feasibility Commitments',
    question: 'A client asks if an Echaar CI flexo press can run a 6-micron biodegradable film at 500 m/min without web breaks—a specification that has never been tested in our factory. What is your commitment stance?',
    options: [
      { text: 'Be technically honest: explain that while 12-micron films run flawlessly at 400 m/min, 6-micron film requires a specialized low-inertia dancer trial; propose running a pilot substrate trial in Echaar’s demo center before contractually committing.', scoreMultiplier: 1.0 },
      { text: 'Blindly sign a contract guaranteeing 500 m/min on 6-micron film just to take the advance payment.', scoreMultiplier: 0.1 },
      { text: 'Refuse to explore new substrates and dismiss the client.', scoreMultiplier: 0.2 },
      { text: 'Tell the client that 6-micron film doesn’t exist.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_4',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Cross-Functional Collaboration with Engineering & R&D',
    question: 'When a client requests a customized motorized lateral doctor blade oscillation mechanism, how do you interface with Echaar’s in-house design engineering team?',
    options: [
      { text: 'Compile a structured Application Engineering Brief: detail the client’s ink viscosity, blade wear concerns, required stroke length, and coordinate with Design for engineering feasibility and accurate cost addition.', scoreMultiplier: 1.0 },
      { text: 'Commit a free customization to the client verbally and leave a vague handwritten sticky note on a designer’s desk.', scoreMultiplier: 0.2 },
      { text: 'Tell Design that sales does not care about engineering difficulties and demand immediate drawings in 1 hour.', scoreMultiplier: 0.1 },
      { text: 'Design the electrical circuit yourself on a napkin without consulting electrical engineers.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_5',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Customer Dissatisfaction During Machine Trials',
    question: 'During a live customer trial at our factory, the print registration drifts slightly because an apprentice operator loaded the plate tape with an air bubble. The client CEO looks visibly upset. How do you lead the room?',
    options: [
      { text: 'Remain calm and composed: invite the CEO for refreshments, transparently show the tape mounting bubble under magnification, demonstrate our standardized plate-mounting verification rig, re-mount the plate, and showcase a flawless re-run within 20 minutes.', scoreMultiplier: 1.0 },
      { text: 'Publicly humiliate and scream at the apprentice operator in front of the customer.', scoreMultiplier: 0.1 },
      { text: 'Pretend the blurry print looks fantastic and argue with the customer.', scoreMultiplier: 0.1 },
      { text: 'Run out of the factory demo room and hide in your office.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_6',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Market Intelligence & Competitor Tracking',
    question: 'How do you gather competitive intelligence regarding European (Windmöller & Hölscher, Bobst, Comexi) and Asian flexo machinery competitors in the Indian market?',
    options: [
      { text: 'Analyze public exhibition displays, technical brochures, patent filings, customer feedback on after-sales spare parts pricing, and compare specifications on speed, repeat length, and energy consumption.', scoreMultiplier: 1.0 },
      { text: 'Hack into competitor email servers illegally.', scoreMultiplier: 0.1 },
      { text: 'Spread fabricated rumors about competitors on social media.', scoreMultiplier: 0.1 },
      { text: 'Ignore competitors completely and assume Echaar has zero competition in the world.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'mkt_gen_7',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Post-Delivery Customer Relationship Management (CRM)',
    question: 'Three months after a client commissions an Echaar press, they haven’t contacted you. What should your CRM proactive follow-up consist of?',
    options: [
      { text: 'Conduct a formal 90-day technical health check visit: meet their plant head and operators, review OEE machine output logs, verify preventive maintenance adherence, and identify future expansion opportunities.', scoreMultiplier: 1.0 },
      { text: 'Never call them again once the final invoice payment has cleared.', scoreMultiplier: 0.2 },
      { text: 'Spam the client with irrelevant marketing brochures every single morning at 6 AM.', scoreMultiplier: 0.2 },
      { text: 'Only contact the client if you need a free promotional favor.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_8',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Proposal Precision & Scope Clarity',
    question: 'Why is defining the exact "Battery Limits" (e.g. electrical transformer supply, pneumatic piping termination points, chilled water flow rate at inlet) essential in a technical proposal?',
    options: [
      { text: 'It prevents multimillion-rupee disputes and commissioning delays by establishing clear contractual boundaries between Echaar’s scope and customer infrastructure scope.', scoreMultiplier: 1.0 },
      { text: 'It makes the quotation document heavy enough to impress the client.', scoreMultiplier: 0.2 },
      { text: 'It is a meaningless legal formality that nobody reads.', scoreMultiplier: 0.1 },
      { text: 'To confuse the customer into paying extra hidden fees.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_9',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Representing Echaar at International Trade Shows',
    question: 'You represent Echaar Equipments at an international industrial packaging expo (e.g. Plastindia, Drupa). What is your primary objective?',
    options: [
      { text: 'Position Echaar as a premier precision engineering innovator: engage qualified converter decision-makers, articulate technical advantages of CI flexo press technology, and capture actionable RFQ leads.', scoreMultiplier: 1.0 },
      { text: 'Sit at the booth table eating snacks and avoiding eye contact with visitors.', scoreMultiplier: 0.1 },
      { text: 'Hand out free company pens to passers-by without speaking to anyone.', scoreMultiplier: 0.2 },
      { text: 'Leave the booth unattended all day to go sightseeing.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'mkt_gen_10',
    roleId: 'tech_marketing',
    section: 'general',
    type: 'behavioral',
    title: 'Ethics in Technical Sales',
    question: 'A client’s procurement manager hints that if you give them a personal luxury gift, they will guarantee Echaar wins the ₹5-Crore machine tender over competitors. What is your ethical course of action?',
    options: [
      { text: 'Politely and unequivocally decline the personal inducement; win the deal strictly on technical merits, commercial competitiveness, and company reputation, reporting the conversation to company leadership.', scoreMultiplier: 1.0 },
      { text: 'Agree to the personal bribe and add it secretly to the machine price.', scoreMultiplier: 0.1 },
      { text: 'Blackmail the procurement manager on public social media.', scoreMultiplier: 0.1 },
      { text: 'Resign from your job immediately.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'mkt_tech_1',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Flexo vs Rotogravure: Operational Economics',
    question: 'When presenting to a flexible packaging client who currently operates Rotogravure presses, what is the primary economic advantage of switching short and medium run jobs to an Echaar CI Flexo press?',
    options: [
      { text: 'Dramatically lower cylinder/plate origination costs (photopolymer photopolymer sleeves vs heavy engraved copper/chrome cylinders) and 70% faster setup times, making short runs highly profitable' },
      { text: 'Flexo machines are 10 times heavier than rotogravure presses' },
      { text: 'Flexo presses use 5 times more electricity than rotogravure' },
      { text: 'Flexo ink requires 24 hours to dry' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_2',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Total Cost of Ownership (TCO) Components',
    question: 'In capital machinery evaluation, what three main cost components constitute the Total Cost of Ownership (TCO) over a 10-year machine lifespan?',
    options: [
      { text: 'Capital Acquisition Cost (CAPEX) + Operational Costs (OPEX: power, consumables, maintenance, waste scrap) + Downtime / Reliability Cost' },
      { text: 'Hotel bills + Flight tickets + Dinner expenses' },
      { text: 'Brochure printing + Website hosting + Business cards' },
      { text: 'Only the initial purchase price of the machine' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_3',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Anilox Roll Specification: BCM and Line Screen (LPI)',
    question: 'When scoping anilox rolls for an 8-color flexo press, what does "3.5 BCM at 800 LPI" specify to the converter?',
    options: [
      { text: 'Cell carrying volume of 3.5 Billion Cubic Microns per square inch at a screen ruling of 800 laser-engraved cells per linear inch (ideal for high-definition process printing)' },
      { text: 'The weight of the roller is 3.5 kg' },
      { text: 'The roller costs 3.5 thousand dollars' },
      { text: 'The roller rotates at 800 RPM' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_4',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Incoterms 2020: CIF vs Ex-Works',
    question: 'In an export contract for an Echaar machine under "CIF (Cost, Insurance and Freight) Dubai Port", who is responsible for transit marine insurance and sea freight to Dubai?',
    options: [
      { text: 'Echaar (the seller) arranges and pays for freight and marine insurance up to the named destination port' },
      { text: 'The buyer must arrange freight from Echaar’s factory gates' },
      { text: 'The airline company pays all costs' },
      { text: 'The local customs officer pays insurance' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_5',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Substrate Surface Tension & Corona Treatment',
    question: 'Why do technical proposals for plastic film converting machines include an inline Corona Treatment unit?',
    options: [
      { text: 'Corona discharge increases the surface energy (dyne level) of polyolefin films (PE, PP) from ~30 dynes/cm to >38-42 dynes/cm to guarantee strong ink and lamination adhesion' },
      { text: 'To disinfect the machine from viral bacteria' },
      { text: 'To heat the plastic film up to melting point' },
      { text: 'To change the film color from transparent to opaque white' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_6',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Letter of Credit (LC) & Bank Guarantee Mechanics',
    question: 'In capital equipment sales, why is an "Irrevocable, Confirmed at Sight Letter of Credit (LC)" preferred for securing export payments?',
    options: [
      { text: 'It provides a binding bank guarantee that payment will be released upon presentation of compliant shipping documents (Bill of Lading, Inspection Certificate, Commercial Invoice), mitigating buyer default risk' },
      { text: 'It avoids paying any customs duties or taxes legally' },
      { text: 'It allows the buyer to cancel the contract at any time without paying' },
      { text: 'It eliminates the need for shipping the machine' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_7',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Substrate Extensibility & CI Drum Physics',
    question: 'When pitching an Echaar Central Impression (CI) press against an In-Line / Stack flexo press for extensible polyethylene (PE) film packaging, what is the critical technical differentiator?',
    options: [
      { text: 'On a CI drum, the substrate is held firmly against a single large drum with zero relative web movement between colors, eliminating stretching registration errors that occur on open web runs in stack presses' },
      { text: 'Stack presses are impossible to paint' },
      { text: 'CI drums can only print on rigid wooden boards' },
      { text: 'Stack presses do not require electricity' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_8',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'ROI Payback Period Calculation',
    question: 'An Echaar automated CI press costs ₹4.5 Crores. It saves a converter ₹1.5 Crores annually in reduced setup waste, lower labor, and higher production speed. What is the simple payback period?',
    options: [
      { text: '3.0 years ($4.5 / 1.5$)' },
      { text: '6.0 years' },
      { text: '1.0 year' },
      { text: '10 years' }
    ],
    correctAnswer: 0 // Payback Period = Capital Cost / Annual Savings = 4.5 / 1.5 = 3.0 years
  },
  {
    id: 'mkt_tech_9',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'CE Marking & Machine Safety Compliance',
    question: 'When quoting high-speed converting machinery for European or high-end multinational clients, what does compliance with the "CE Machinery Directive (2006/42/EC)" mandate?',
    options: [
      { text: 'Rigorous risk assessment, Category 4 / PL e safety interlocks, light curtains, emergency stops, low noise emission certification, and a technical construction file' },
      { text: 'Only that the user manual is translated into French' },
      { text: 'That the machine must be painted red' },
      { text: 'That the machine has no safety guards' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_10',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Web Inspection Video & Stroboscopic Systems',
    question: 'In modern high-speed flexographic printing, what is the function of a 100% automated video web inspection system included in technical quotations?',
    options: [
      { text: 'High-resolution line-scan cameras inspect 100% of the moving web at 400 m/min, instantly detecting sub-millimeter print defects, streaks, misregistration, and hickeys in real time' },
      { text: 'To broadcast live television entertainment to operators' },
      { text: 'To monitor the room temperature of the factory' },
      { text: 'To record security video of the parking lot' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_11',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Ink Drying Systems: Hot Air vs UV / EB Curing',
    question: 'When configuring drying systems for flexo presses printing food packaging substrates, why are Ultra-Violet (UV) or Electron Beam (EB) curing systems highlighted?',
    options: [
      { text: 'Instantaneous polymerization with 100% solids, zero VOC emissions, no thermal film distortion on heat-sensitive films, and compliant migration levels for food packaging' },
      { text: 'UV inks require high volumes of volatile solvent thinner' },
      { text: 'EB systems heat the web to 300°C' },
      { text: 'Hot air drying eliminates the need for electricity' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_12',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Turret Rewind / Unwind with Flying Splice',
    question: 'What productivity benefit does an automatic dual-turret unwinder/rewinder with "Flying Splice" deliver to a packaging converting plant?',
    options: [
      { text: 'Continuous 24/7 non-stop printing: new rolls are spliced at full machine production speed (e.g. 350 m/min) without slowing down or stopping the machine' },
      { text: 'It cuts the machine length by 50%' },
      { text: 'It allows using paper rolls without any core' },
      { text: 'It replaces all printing plates with stencils' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_13',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Tender Liquidated Damages (LD) Clause',
    question: 'In large capital engineering contracts, what is the standard industry cap typically negotiated for Liquidated Damages (LD) for delayed delivery?',
    options: [
      { text: '0.5% per week of delay up to a maximum contractual ceiling of 5% to 10% of total contract value' },
      { text: '100% of the contract value on Day 1 of delay' },
      { text: 'Unlimited liability including all client future lost profits forever' },
      { text: 'Zero rupees under all circumstances' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_14',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Energy Efficiency: Regenerative Servo Drives',
    question: 'How do regenerative four-quadrant servo drives featured in Echaar proposals reduce electrical energy consumption during continuous braking of unwinder rolls?',
    options: [
      { text: 'Braking kinetic energy is converted back into electrical power and fed directly back into the common DC bus to power the main drive and rewinders, saving 15-25% power' },
      { text: 'They dissipate all energy as wasted heat through giant resistor banks' },
      { text: 'They run on diesel fuel' },
      { text: 'They turn off the machine lights' }
    ],
    correctAnswer: 0
  },
  {
    id: 'mkt_tech_15',
    roleId: 'tech_marketing',
    section: 'field',
    type: 'objective',
    title: 'Commercial Payment Terms: Typical Structure',
    question: 'Which of the following represents a healthy, industry-standard milestone payment schedule for manufacturing custom capital machinery?',
    options: [
      { text: '20-30% Advance with Purchase Order, 60% against Proforma Invoice / Dispatch clearance after FAT (Factory Acceptance Test), 10% upon successful on-site commissioning & handover' },
      { text: '100% payment 2 years after machine delivery' },
      { text: '0% advance, with Echaar paying the customer to take the machine' },
      { text: '100% cash paid in crypto currency anonymously' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'mkt_prob_1',
    roleId: 'tech_marketing',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Handling a 25% Competitor Price Undercut on a ₹6-Crore Deal',
    scenario: 'A major flexible packaging converter is ready to finalize an 8-color flexo press order. At the final negotiation meeting, the client’s Managing Director reveals a competing quote from a low-tier domestic machinery builder that is ₹1.5 Crores (25%) cheaper, demanding that Echaar match this price or lose the order.',
    question: 'How do you lead this high-stakes negotiation to protect Echaar’s value proposition and gross margin?',
    options: [
      { text: 'Conduct a systematic specification-by-specification comparison: demonstrate differences in frame rigidity (cast steel box frames vs welded channel iron), gearless servo direct-drive accuracy, dynamic balancing standards (G1.0 vs unrated), CMM-inspected runout, and present an OPEX calculation proving the competitor’s substrate waste will erode the ₹1.5 Cr difference within 14 months.', effectivenessScore: 1.0 },
      { text: 'Panic and agree to slash Echaar’s price by 25% immediately.', effectivenessScore: 0.2 },
      { text: 'Storm out of the meeting in anger and insult the client MD.', effectivenessScore: 0.1 },
      { text: 'Offer to supply the machine without motors or electrical panels to cut price.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates consultative value selling, Total Cost of Ownership (TCO), technical specification differentiation, and margin preservation.'
  },
  {
    id: 'mkt_prob_2',
    roleId: 'tech_marketing',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Responding to an Ambiguous High-Value Enterprise RFQ',
    scenario: 'A multinational consumer goods enterprise releases a 90-page RFQ tender for three high-speed converting lines. The document has contradictory specifications: Section 2 calls for 600 m/min speed on 15-micron PE, while Section 5 limits drying oven electrical load to 45 kW (which is physically insufficient to evaporate ink at 600 m/min).',
    question: 'How do you structure your formal tender response and technical clarification strategy?',
    options: [
      { text: 'Submit a formal Pre-Bid Technical Clarification matrix: calculate the thermodynamic heat transfer equation proving required air volume/power for solvent evaporation at 600 m/min, present two engineered options (Option A: high-efficiency recirculating heat-recovery drying; Option B: optimized speed rating for 45 kW limit), establishing Echaar’s scientific authority.', effectivenessScore: 1.0 },
      { text: 'Ignore the thermodynamic conflict and quote a standard 45 kW oven guaranteeing 600 m/min.', effectivenessScore: 0.1 },
      { text: 'Disqualify Echaar from the tender without contacting the client.', effectivenessScore: 0.2 },
      { text: 'Accuse the client’s engineering consultants of incompetence in writing.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Evaluates thermodynamic engineering calculations, proactive pre-bid clarification management, and consultative technical credibility.'
  },
  {
    id: 'mkt_prob_3',
    roleId: 'tech_marketing',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Converting a Traditional Rotogravure Printer to CI Flexo',
    scenario: 'The owner of a 30-year-old rotogravure printing company is hesitant to invest in CI flexo technology, claiming: "Flexo can never match the ink density and photographic dot sharpness of gravure cylinders on flexible packaging."',
    question: 'What targeted technical and demonstration strategy do you execute to win this client over?',
    options: [
      { text: 'Invite the client and their prepress team to Echaar’s demonstration center for a blind print trial: run their most challenging 175 LPI gravure artwork on extensible film using modern HD flexo flat-top dot plates and high-volume ceramic anilox; present spectrophotometer ($dE_{00} < 1.5$) density metrics and show 20-minute job changeover vs their 4-hour gravure setup.', effectivenessScore: 1.0 },
      { text: 'Tell the owner they are outdated and will go bankrupt if they don’t buy flexo.', effectivenessScore: 0.1 },
      { text: 'Send them a generic YouTube video of a competitor’s machine.', effectivenessScore: 0.2 },
      { text: 'Give up on gravure clients completely.', effectivenessScore: 0.2 }
    ],
    evaluationRubric: 'Assesses HD flexo flat-top dot technology, spectrophotometric color matching ($dE$), blind benchmark trials, and changeover economics.'
  },
  {
    id: 'mkt_prob_4',
    roleId: 'tech_marketing',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Commissioning Delay & Customer Threat of Order Cancellation',
    scenario: 'An export flexo press has arrived in Kenya. Commissioning is delayed by 10 days because the customer’s local factory electrical grid exhibits severe voltage fluctuations (330V to 480V) and lack of stable compressed air, causing servo fault trips. The customer blames Echaar and threatens to call their bank guarantee.',
    question: 'How do you intervene to protect company interest and complete commissioning?',
    options: [
      { text: 'Deploy an experienced technical service manager with portable power quality analyzers and data loggers; demonstrate documented proof that incoming grid voltage and air dew point violate contractual utility preconditions; collaboratively assist the customer in installing an isolation servo-stabilizer and air dryer, and guide the press to successful production sign-off.', effectivenessScore: 1.0 },
      { text: 'Instruct our commissioning engineer to abandon the site and fly back to India immediately.', effectivenessScore: 0.1 },
      { text: 'Accept blame for the customer’s electrical grid failure and offer a ₹50-Lakh cash refund.', effectivenessScore: 0.1 },
      { text: 'Sue the Kenyan client immediately in court.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates crisis diplomacy, utility battery limits enforcement, root-cause power quality analysis, and customer partnership.'
  },
  {
    id: 'mkt_prob_5',
    roleId: 'tech_marketing',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Structuring Milestone Contracts for Custom Machinery',
    scenario: 'A client ordering a ₹7-Crore custom flexographic converting line with special unwinder automation insists on paying 90% only after 3 months of commercial production in their factory, offering only 10% advance.',
    question: 'As Technical Marketing lead, how do you counter-structure this commercial proposal to safeguard Echaar’s financial exposure while keeping the deal alive?',
    options: [
      { text: 'Propose a balanced milestone structure: 25% Advance with Order (backed by Advance Bank Guarantee if requested), 45% against confirmed mechanical progress / Factory Acceptance Test (FAT) inspection at Echaar, 20% against shipping documents (Bill of Lading), and 10% backed by a 90-day Bank Guarantee or Letter of Credit released upon commercial SAT.', effectivenessScore: 1.0 },
      { text: 'Accept the client’s 10% advance and 90% after 3 months, putting Echaar at severe working capital and default risk.', effectivenessScore: 0.1 },
      { text: 'Demand 100% upfront cash payment or cancel all discussions.', effectivenessScore: 0.2 },
      { text: 'Sign the contract without reading the payment terms.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests commercial risk management, milestone cash-flow protection, FAT/SAT sign-off gates, and bank instruments (ABG/PBG/LC).'
  }
];
