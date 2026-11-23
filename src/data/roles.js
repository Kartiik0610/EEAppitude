export const ROLES = [
  {
    id: 'get',
    title: 'Graduate Engineer Trainee (GET)',
    shortCode: 'GET',
    department: 'Engineering Trainee / Rotational',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: 'GraduationCap',
    description: 'Multi-disciplinary engineering evaluation to discover candidate aptitude and determine optimal functional placement across Design, Production, Planning, Quality, and Marketing.',
    targetAudience: 'B.E. / B.Tech Graduates (Mechanical, Mechatronics, Production, Electrical)',
    isSpecialGET: true,
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'design',
    title: 'Design Engineer',
    shortCode: 'DES',
    department: 'Research & Design (R&D)',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    icon: 'Compass',
    description: 'CAD/CAM 3D modeling, FEA, flexo printing press mechanics, web handling dynamics, roller kinematics, and precision machine design.',
    targetAudience: 'Mechanical / Machine Design Engineers',
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'production',
    title: 'Production Engineer',
    shortCode: 'PRD',
    department: 'Manufacturing & Assembly',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: 'Wrench',
    description: 'Shop floor operations, heavy CNC turning/milling, machine fabrication, precision sub-assembly, cycle time optimization, and 5S/Kaizen.',
    targetAudience: 'Mechanical / Production Engineers with shopfloor focus',
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'ppc',
    title: 'Production Planning Engineer',
    shortCode: 'PPC',
    department: 'Production Planning & Control (PPC)',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: 'CalendarClock',
    description: 'Material requirements planning (MRP), ERP routing, raw material procurement lead-time, machine capacity allocation, and assembly line scheduling.',
    targetAudience: 'Industrial / Production / Mechanical Engineers in PPC/Supply Chain',
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'quality',
    title: 'Quality Engineer',
    shortCode: 'QA',
    department: 'Quality Assurance & Control (QA/QC)',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    icon: 'CheckCircle2',
    description: 'Precision metrology, CMM, GD&T, run-out tolerances on printing cylinders, ISO 9001, Root Cause Analysis (8D, Fishbone), and vendor inspection.',
    targetAudience: 'Mechanical / Quality Assurance Engineers',
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'tech_marketing',
    title: 'Technical Marketing Engineer',
    shortCode: 'TME',
    department: 'Sales & Technical Marketing',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: 'TrendingUp',
    description: 'Capital equipment sales engineering, technical proposals for flexographic presses, client application study, ROI calculations, and market intelligence.',
    targetAudience: 'Engineers with strong commercial and consultative sales acumen',
    totalQuestions: 30,
    timeMinutes: 45
  },
  {
    id: 'intern_eng',
    title: 'Intern Engineer',
    shortCode: 'INT-ENG',
    department: 'General Engineering Internship',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: 'BookOpen',
    description: 'Fundamental mechanical concepts, engineering drawings interpretation, basic fabrication techniques, industrial safety, and workshop aptitude.',
    targetAudience: 'Final year / Pre-final year Diploma or Degree Engineering Students',
    totalQuestions: 30,
    timeMinutes: 40
  },
  {
    id: 'intern_accounts',
    title: 'Intern Accounts',
    shortCode: 'INT-ACC',
    department: 'Finance & Accounts',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    icon: 'Receipt',
    description: 'Manufacturing cost accounting, GST/TDS compliance in industrial equipment, ERP vouchers, invoice 3-way matching, depreciation, and inventory valuation.',
    targetAudience: 'B.Com / M.Com / Inter-CA / MBA Finance Interns',
    totalQuestions: 30,
    timeMinutes: 40
  },
  {
    id: 'intern_hr',
    title: 'Intern HR',
    shortCode: 'INT-HR',
    department: 'Human Resources',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
    icon: 'Users',
    description: 'Engineering talent sourcing, shopfloor employee relations, attendance/payroll cycles, compliance under Factories Act, and onboarding programs.',
    targetAudience: 'BBA / MBA HR / MSW Interns',
    totalQuestions: 30,
    timeMinutes: 40
  }
];

export const GET_DEPARTMENTS = [
  { key: 'design', label: 'Design Engineering', color: '#0284C7', icon: 'Compass', description: 'CAD modeling, stress analysis, kinematics & precision mechanism design.' },
  { key: 'production', label: 'Production & Manufacturing', color: '#059669', icon: 'Wrench', description: 'CNC operations, machine fabrication, assembly line & shop-floor execution.' },
  { key: 'ppc', label: 'Production Planning & Control (PPC)', color: '#D97706', icon: 'CalendarClock', description: 'BOM planning, ERP scheduling, capacity utilization & supply chain management.' },
  { key: 'quality', label: 'Quality Assurance & Control', color: '#E11D48', icon: 'CheckCircle2', description: 'Metrology, GD&T, CMM inspection, ISO 9001 & defect root cause analysis.' },
  { key: 'tech_marketing', label: 'Technical Marketing & Sales', color: '#7C3AED', icon: 'TrendingUp', description: 'Client application engineering, technical proposals, ROI & machinery sales.' }
];
