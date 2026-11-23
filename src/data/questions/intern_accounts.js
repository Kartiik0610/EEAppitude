/**
 * 30 Questions for Intern Accounts
 * Echaar Equipments Pvt. Ltd. (Industrial Machinery Finance & Costing)
 */

export const internAccountsQuestions = [
  // SECTION 1: 10 GENERAL & WORKPLACE BEHAVIORAL QUESTIONS
  {
    id: 'acc_gen_1',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Financial Confidentiality & Ethical Discretion',
    question: 'A shop-floor technician approaches you casually and asks how much the company pays for direct-drive servo motors or what the salary of a senior engineer is. How do you respond?',
    options: [
      { text: 'Politely and firmly maintain professional confidentiality: explain that supplier commercial rates, cost data, and payroll figures are strictly proprietary and cannot be shared.', scoreMultiplier: 1.0 },
      { text: 'Print out the confidential payroll sheet and hand it to the technician.', scoreMultiplier: 0.1 },
      { text: 'Post company vendor purchase invoices on social media.', scoreMultiplier: 0.1 },
      { text: 'Make up fake numbers and gossip with other employees.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_2',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Invoice Discrepancy Resolution with Vendor',
    question: 'A supplier sends an invoice for ₹4,50,000 for fabricated sheet metal guards, but the approved Purchase Order rate totals ₹4,00,000. What is your accounting action?',
    options: [
      { text: 'Halt payment processing; check the Goods Receipt Note (GRN) and PO terms; contact the Procurement Engineer to verify if an authorized amendment exists; if not, notify the vendor with a formal debit note or request a revised invoice.', scoreMultiplier: 1.0 },
      { text: 'Blindly pass the higher ₹4,50,000 invoice without checking the PO.', scoreMultiplier: 0.2 },
      { text: 'Throw the invoice into the wastepaper basket and ignore the vendor.', scoreMultiplier: 0.1 },
      { text: 'Pay ₹2,00,000 in cash out of petty cash.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_3',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Attention to Mathematical Precision & Decimal Detail',
    question: 'When reconciling monthly bank statements against the company cash book, there is an unexplained difference of ₹12.50. What is your stance as an accounting intern?',
    options: [
      { text: 'Investigate the ₹12.50 difference: check for bank service charges, SMS alert fees, or rounding differences; identify and record the exact ledger entry so accounts balance 100%.', scoreMultiplier: 1.0 },
      { text: 'Ignore it because ₹12.50 is a small amount of money.', scoreMultiplier: 0.2 },
      { text: 'Falsify a customer deposit entry to make the sheet balance.', scoreMultiplier: 0.1 },
      { text: 'Delete the entire month’s ledger in frustration.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_4',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Meeting Statutory Compliance Deadlines (GST/TDS)',
    question: 'Statutory TDS payment deposit is due by the 7th of the month. On the 6th, several vendor bills are still awaiting HOD approval. What do you do?',
    options: [
      { text: 'Proactively follow up with the concerned department heads early in the day, explain the statutory late interest penalty under Income Tax law, get approvals cleared, and prepare the challan on time.', scoreMultiplier: 1.0 },
      { text: 'Wait until the 15th of the month and pay late penalties without caring.', scoreMultiplier: 0.2 },
      { text: 'Skip paying TDS altogether.', scoreMultiplier: 0.1 },
      { text: 'Blame the government for having tax laws.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_5',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Handling Petty Cash Integrity',
    question: 'An employee submits a crumpled taxi receipt for ₹850 with no date and no travel destination written on it, demanding immediate reimbursement from petty cash. What is your response?',
    options: [
      { text: 'Politely inform the employee about company expense reimbursement policy: request they complete the official expense claim voucher with date, business purpose, and HOD approval before cash disbursement.', scoreMultiplier: 1.0 },
      { text: 'Give them ₹850 immediately from the cash drawer without any voucher.', scoreMultiplier: 0.1 },
      { text: 'Take ₹850 for yourself as well.', scoreMultiplier: 0.1 },
      { text: 'Shout at the employee in the hallway.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_6',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Collaborating with Machine Stores & Warehouse Team',
    question: 'When conducting physical stock audits in the raw material and bearing stores, how do you work with the stores in-charge?',
    options: [
      { text: 'Conduct an organized joint audit: sample high-value items systematically, cross-check bin cards against ERP ledger quantities, listen to practical stores explanations, and document physical variations neutrally.', scoreMultiplier: 1.0 },
      { text: 'Treat the stores team as criminals without inspecting any parts.', scoreMultiplier: 0.1 },
      { text: 'Sign the stock verification sheet from your office desk without visiting the warehouse.', scoreMultiplier: 0.1 },
      { text: 'Count parts blindly while ignoring serial numbers.', scoreMultiplier: 0.2 }
    ]
  },
  {
    id: 'acc_gen_7',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Adoption of ERP & Accounting Automation',
    question: 'Echaar’s finance team transitions from manual Excel spreadsheets to an integrated ERP accounting module. How do you embrace this?',
    options: [
      { text: 'Actively learn the ERP voucher entry system, master automated 3-way matching rules, read user manuals, and leverage reporting tools to speed up daily ledger reconciliation.', scoreMultiplier: 1.0 },
      { text: 'Refuse to touch the computer and insist on using physical paper ledgers from 1980.', scoreMultiplier: 0.2 },
      { text: 'Complain that software makes accountants lose their jobs.', scoreMultiplier: 0.1 },
      { text: 'Input random numbers into the ERP to test if it crashes.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_8',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Internal Audit Preparation & Documentation Trail',
    question: 'The external statutory auditors are visiting next week. You are asked to organize the fixed assets and machine purchase files. What is your filing approach?',
    options: [
      { text: 'Organize files chronologically with complete audit trails: attach Purchase Order, Commercial Invoice, Bill of Entry/Customs documents, GRN, Installation Certificate, and Depreciation Schedule.', scoreMultiplier: 1.0 },
      { text: 'Throw all invoices into an unlabelled cardboard box on the floor.', scoreMultiplier: 0.1 },
      { text: 'Hide the files in your locker so auditors cannot see them.', scoreMultiplier: 0.1 },
      { text: 'Shred old invoices because they take up shelf space.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_9',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Professional Skepticism in Cost Verification',
    question: 'A contractor submits a monthly invoice for 120 hours of shop-floor maintenance overtime, which is 3 times higher than usual. What is your professional response?',
    options: [
      { text: 'Exercise healthy professional skepticism: cross-verify the claimed hours against security gate biometric in/out logs and the maintenance supervisor’s job work cards before certifying payment.', scoreMultiplier: 1.0 },
      { text: 'Approve the invoice immediately without any verification.', scoreMultiplier: 0.2 },
      { text: 'Refuse to pay the contractor anything ever again.', scoreMultiplier: 0.1 },
      { text: 'Ask the contractor for a personal commission to approve it.', scoreMultiplier: 0.1 }
    ]
  },
  {
    id: 'acc_gen_10',
    roleId: 'intern_accounts',
    section: 'general',
    type: 'behavioral',
    title: 'Eagerness for Cost Accounting & Industrial Finance',
    question: 'Why is understanding how custom flexo printing machinery is built beneficial for an industrial accountant at Echaar?',
    options: [
      { text: 'It enables accurate product costing, realistic allocation of machine shop overheads, precise Work-In-Progress (WIP) valuation, and meaningful profitability analysis per machine order.', scoreMultiplier: 1.0 },
      { text: 'Accountants should never know what the company manufactures.', scoreMultiplier: 0.1 },
      { text: 'Only to criticize engineers during lunch.', scoreMultiplier: 0.1 },
      { text: 'It has no connection to debit and credit.', scoreMultiplier: 0.1 }
    ]
  },

  // SECTION 2: 15 ROLE-RELATED FIELD QUESTIONS (Objective/Technical Scored)
  {
    id: 'acc_tech_1',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'GST: Interstate vs Intrastate Supply',
    question: 'When Echaar Equipments (located in Maharashtra) sells an industrial printing press to a customer located in Gujarat, what type of GST is levied on the tax invoice?',
    options: [
      { text: 'Integrated Goods and Services Tax (IGST)' },
      { text: 'Central GST (CGST) and State GST (SGST)' },
      { text: 'VAT and Service Tax' },
      { text: 'Zero tax under all conditions' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_2',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: '3-Way Matching Principle in Accounts Payable',
    question: 'Before releasing payment for raw material alloy steel bars, which three documents must match under standard 3-Way Matching control?',
    options: [
      { text: 'Purchase Order (PO), Goods Receipt Note (GRN / MRN), and Vendor Tax Invoice' },
      { text: 'Customer Cheque, Bank Passbook, and Employee ID card' },
      { text: 'Electricity Bill, Rent Receipt, and Visiting Card' },
      { text: 'Brochure, Business Card, and Quotation' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_3',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'TDS Deduction on Contractor Works: Section 194C',
    question: 'Under Section 194C of the Indian Income Tax Act, what is the TDS deduction rate on payments made to a company contractor (e.g. fabricated machine frame work) exceeding statutory thresholds?',
    options: [
      { text: '2% (for company / firm contractors; 1% for individuals/HUFs)' },
      { text: '10%' },
      { text: '30%' },
      { text: '0.1%' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_4',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Depreciation under Companies Act 2013 (Schedule II)',
    question: 'Under Schedule II of the Companies Act 2013, what is the standard useful life prescribed for general plant and machinery used in a manufacturing factory (operating single shift)?',
    options: [
      { text: '15 Years' },
      { text: '3 Years' },
      { text: '50 Years' },
      { text: '1 Year' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_5',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Input Tax Credit (ITC) Eligibility: Section 16 of CGST Act',
    question: 'Which of the following is a mandatory condition under Section 16 of the CGST Act for Echaar to claim Input Tax Credit (ITC) on purchased CNC machine parts?',
    options: [
      { text: 'The supplier has filed GSTR-1, the tax invoice details appear in Echaar’s GSTR-2B, goods are received, and tax is paid to the government' },
      { text: 'The parts must be made of pure gold' },
      { text: 'The invoice can be handwritten on plain paper without a GSTIN' },
      { text: 'ITC is only allowed on imported items from Germany' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_6',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Manufacturing Cost Elements: Prime Cost',
    question: 'In a manufacturing cost sheet, how is "Prime Cost" calculated?',
    options: [
      { text: 'Direct Raw Materials Consumed + Direct Labor Wages + Direct Expenses' },
      { text: 'Factory Overheads + Administrative Overheads' },
      { text: 'Selling Price minus Net Profit' },
      { text: 'Total Bank Balance divided by Number of Machines' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_7',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Accrual Accounting Concept (Mercantile Basis)',
    question: 'Under the Accrual basis of accounting, when should revenue from an equipment sale contract be recognized in the books of accounts?',
    options: [
      { text: 'When risks and rewards of ownership / performance obligations are transferred to the customer (e.g. Upon FAT sign-off / machine delivery), regardless of when cash is received' },
      { text: 'Only when physical cash notes are counted in the office' },
      { text: 'When the sales engineer first speaks to the client on the phone' },
      { text: 'At the end of every calendar year arbitrarily' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_8',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Bank Reconciliation Statement (BRS): Outstanding Cheques',
    question: 'In a Bank Reconciliation Statement, if cheques totaling ₹12,00,000 have been issued to suppliers and recorded in the Cash Book, but have not yet been presented to the bank for payment, how does this affect the Bank Passbook balance compared to the Cash Book?',
    options: [
      { text: 'The Bank Passbook balance will show a HIGHER balance than the Cash Book by ₹12,00,000' },
      { text: 'The Bank Passbook balance will be lower' },
      { text: 'Both balances will be identical' },
      { text: 'The bank account is automatically frozen' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_9',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Capital Expenditure (CAPEX) vs Revenue Expenditure (OPEX)',
    question: 'Purchasing a new 5-axis CNC portal milling machine for ₹3.2 Crores is classified as which type of expenditure?',
    options: [
      { text: 'Capital Expenditure (CAPEX) — capitalized on the Balance Sheet as a Fixed Asset and depreciated over its useful life' },
      { text: 'Revenue Expenditure (OPEX) — expensed 100% immediately in the current month’s P&L' },
      { text: 'Petty Cash expense' },
      { text: 'Deferred contingent tax liability' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_10',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Valuation of Inventories (AS 2 / Ind AS 2)',
    question: 'According to Accounting Standard 2 (AS 2 / Ind AS 2), how must Work-In-Progress (WIP) and finished goods inventory be valued on the balance sheet?',
    options: [
      { text: 'At the Lower of Cost and Net Realizable Value (NRV)' },
      { text: 'At maximum historical replacement cost' },
      { text: 'At estimated future retail selling price' },
      { text: 'At zero value' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_11',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'TDS on Purchase of Goods: Section 194Q',
    question: 'Under Section 194Q introduced in the Income Tax Act, what is the TDS deduction requirement on purchase of goods from a resident seller exceeding ₹50 Lakhs in a financial year (for buyers with turnover > ₹10 Crores)?',
    options: [
      { text: '0.1% on the amount exceeding ₹50 Lakhs' },
      { text: '5.0%' },
      { text: '20%' },
      { text: 'No TDS is required on goods' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_12',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'E-Invoicing under GST in India',
    question: 'For enterprises exceeding the notified turnover threshold, what mandatory feature must be generated on B2B tax invoices via the government Invoice Registration Portal (IRP)?',
    options: [
      { text: 'Invoice Reference Number (IRN) and a signed QR Code' },
      { text: 'A handwritten signature in red fountain pen' },
      { text: 'A photograph of the company factory' },
      { text: 'A post office postage stamp' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_13',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Double Entry Principle: Machine Purchase on Credit',
    question: 'When Echaar purchases raw steel sheets worth ₹8,00,000 + 18% GST (₹1,44,000) on credit from a vendor, what is the correct journal entry?',
    options: [
      { text: 'Debit: Raw Material Inventory ₹8,00,000; Debit: Input CGST/SGST/IGST ₹1,44,000; Credit: Sundry Creditors (Vendor) ₹9,44,000' },
      { text: 'Debit: Cash ₹9,44,000; Credit: Sales ₹9,44,000' },
      { text: 'Debit: Depreciation ₹1,44,000; Credit: Bank ₹8,00,000' },
      { text: 'Debit: Sundry Creditors ₹9,44,000; Credit: Profit & Loss ₹9,44,000' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_14',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Factory Overhead Absorption Rate',
    question: 'If total estimated factory electricity and maintenance overheads are ₹60,00,000 for the year and total budgeted machine shop operating hours are 20,000 hours, what is the Machine Hour Overhead Absorption Rate?',
    options: [
      { text: '₹300 per machine hour ($60,00,000 / 20,000$)' },
      { text: '₹30 per machine hour' },
      { text: '₹3,000 per machine hour' },
      { text: '₹0.33 per machine hour' }
    ],
    correctAnswer: 0
  },
  {
    id: 'acc_tech_15',
    roleId: 'intern_accounts',
    section: 'field',
    type: 'objective',
    title: 'Customer Advance: GST Liability Timing',
    question: 'When a customer pays an advance of ₹50,00,000 for the manufacture of capital equipment machinery, when is GST payable under current GST rules for supply of goods?',
    options: [
      { text: 'Under current GST notifications for supply of goods, GST is payable at the time of issuance of the final Tax Invoice upon delivery, not at the time of receipt of advance' },
      { text: 'GST must be paid within 1 hour of receiving advance' },
      { text: 'No GST is ever paid on machinery' },
      { text: 'GST is only paid if the customer is located in the same city' }
    ],
    correctAnswer: 0
  },

  // SECTION 3: 5 REAL-LIFE PROBLEM-SOLVING ABILITY QUESTIONS
  {
    id: 'acc_prob_1',
    roleId: 'intern_accounts',
    section: 'problem_solving',
    type: 'scenario',
    title: '3-Way Matching Failure on Bearing Invoice',
    scenario: 'A vendor submits an invoice for 20 units of precision linear guide rails at ₹18,000 each (Total ₹3,60,000). The Purchase Order specifies ₹16,500 each, and the warehouse Goods Receipt Note (GRN) confirms only 18 units were accepted (2 rejected for transit rust).',
    question: 'How do you calculate the verified payable amount and handle the discrepancy?',
    options: [
      { text: 'Calculate payable on accepted goods at PO rate: $18 \\text{ units} \\times ₹16,500 = ₹2,97,000$ + applicable GST; issue a formal Debit Note / Rejection Note for ₹63,000 + GST difference, and notify the vendor and purchase officer before clearing payment.', effectivenessScore: 1.0 },
      { text: 'Pay the full ₹3,60,000 claimed by the vendor without questioning.', effectivenessScore: 0.2 },
      { text: 'Refuse to pay anything forever.', effectivenessScore: 0.1 },
      { text: 'Manually change the GRN in the warehouse to show 20 units accepted.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates 3-way matching mechanics, debit note generation, and accepted quantity verification.'
  },
  {
    id: 'acc_prob_2',
    roleId: 'intern_accounts',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Reconciling GSTR-2B Input Tax Credit Mismatch',
    scenario: 'During month-end GST filing, Echaar’s ERP purchase register shows eligible Input Tax Credit of ₹14,20,000, but the government auto-drafted GSTR-2B shows only ₹11,80,000. Three major supplier invoices totaling ₹2,40,000 are missing from GSTR-2B.',
    question: 'What is your compliance procedure regarding claiming this ITC?',
    options: [
      { text: 'Under Section 16(2)(aa) of CGST Act, restrict ITC claim to the ₹11,80,000 appearing in GSTR-2B; generate an immediate supplier mismatch report, contact the three defaulting vendors to ensure they file their overdue GSTR-1, and claim the remaining ₹2,40,000 in the following month upon reflection.', effectivenessScore: 1.0 },
      { text: 'Claim the missing ₹2,40,000 illegally in GSTR-3B anyway, risking tax demand notices and 18% interest penalties.', effectivenessScore: 0.2 },
      { text: 'Cancel the supplier purchase orders retroactively.', effectivenessScore: 0.1 },
      { text: 'Stop paying GST to the government.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests statutory GST ITC compliance under Section 16(2)(aa), GSTR-2B reconciliation, and vendor communication.'
  },
  {
    id: 'acc_prob_3',
    roleId: 'intern_accounts',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Allocating Shared Factory Overheads to Custom Machine Orders',
    scenario: 'The plant operates 3 custom press orders simultaneously. In March, factory electricity bill is ₹8,40,000. Machine Job #1 used 450 CNC machine hours, Job #2 used 250 hours, and Job #3 used 100 hours (Total 800 hours).',
    question: 'How do you accurately allocate the electricity overhead cost to each job on the cost sheet?',
    options: [
      { text: 'Calculate machine hour rate: $₹8,40,000 / 800\\text{ hrs} = ₹1,050\\text{ /hr}$. Allocate Job #1: $450 \\times 1,050 = ₹4,72,500$; Job #2: $250 \\times 1,050 = ₹2,62,500$; Job #3: $100 \\times 1,050 = ₹1,05,000$.', effectivenessScore: 1.0 },
      { text: 'Divide ₹8,40,000 equally by 3 (₹2,80,000 each) ignoring actual machine hours used.', effectivenessScore: 0.3 },
      { text: 'Charge the entire ₹8,40,000 to Job #3 because it is running late.', effectivenessScore: 0.1 },
      { text: 'Omit electricity cost from machine pricing entirely.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates activity-based machine hour overhead absorption and accurate product costing.'
  },
  {
    id: 'acc_prob_4',
    roleId: 'intern_accounts',
    section: 'problem_solving',
    type: 'scenario',
    title: 'Bank Reconciliation Statement (BRS) Month-End Timing Trace',
    scenario: 'On March 31, Echaar’s bank passbook balance is ₹1,45,00,000 while the Cash Book shows ₹1,20,00,000. Investigation shows customer cheques of ₹30,00,000 deposited in bank but not yet entered in cash book, and supplier cheques of ₹5,00,000 issued by Echaar but not yet presented.',
    question: 'How do you reconcile and balance the BRS statement?',
    options: [
      { text: 'Start with Cash Book (₹1,20,00,000) + Direct deposits in bank not in cash book (₹30,00,000) - Cheques issued but not presented (₹5,00,000) = ₹1,45,00,000 matching the Bank Passbook exactly; record the customer cheques into the cash book.', effectivenessScore: 1.0 },
      { text: 'Declare that the bank made a mistake of ₹25 Lakhs without investigating.', effectivenessScore: 0.1 },
      { text: 'Withdraw ₹25 Lakhs in cash and put it in your personal account.', effectivenessScore: 0.1 },
      { text: 'Ignore the reconciliation until next year.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Tests understanding of Bank Reconciliation Statement (BRS) add/less timing differences.'
  },
  {
    id: 'acc_prob_5',
    roleId: 'intern_accounts',
    section: 'problem_solving',
    type: 'scenario',
    title: 'TDS & Equalization Levy on Foreign CAD Software License',
    scenario: 'The R&D team purchases an annual engineering simulation software cloud license from a German software provider for €20,000 (~₹18,00,000). The German vendor does not have a permanent establishment in India.',
    question: 'How do you structure the tax deduction and Form 15CA/15CB documentation before international wire remittance?',
    options: [
      { text: 'Evaluate Double Taxation Avoidance Agreement (DTAA) between India and Germany; obtain Tax Residency Certificate (TRC) and Form 10F from the vendor; arrange Chartered Accountant certification under Form 15CB, file Form 15CA on the IT portal, and deduct appropriate withholding tax before remitting.', effectivenessScore: 1.0 },
      { text: 'Send an international wire transfer without reviewing any tax treaty or filing 15CA/15CB.', effectivenessScore: 0.2 },
      { text: 'Tell the R&D team to download pirated software to avoid foreign taxes.', effectivenessScore: 0.1 },
      { text: 'Refuse to process the payment because German words look difficult.', effectivenessScore: 0.1 }
    ],
    evaluationRubric: 'Demonstrates international tax remittance compliance, Section 195 withholding, Form 15CA/CB, and DTAA treaties.'
  }
];
