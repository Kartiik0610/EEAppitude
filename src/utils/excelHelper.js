import * as XLSX from 'xlsx';

export const DEFAULT_ADMIN_ACCOUNTS = [
  {
    AdminID: 'admin@echaar.com',
    Password: 'Echaar@2025',
    RoleName: 'Super Administrator',
    Department: 'Executive / Technical Board',
    CreatedDate: '2025-01-01',
    Status: 'Active'
  },
  {
    AdminID: 'evaluator@echaar.com',
    Password: 'Assess#2025',
    RoleName: 'Technical Evaluator',
    Department: 'Engineering R&D',
    CreatedDate: '2025-01-15',
    Status: 'Active'
  },
  {
    AdminID: 'hr_lead@echaar.com',
    Password: 'Talent@Echaar',
    RoleName: 'HR Recruitment Lead',
    Department: 'Human Resources',
    CreatedDate: '2025-02-01',
    Status: 'Active'
  }
];

/**
 * Generate default Excel binary for Admin Credentials
 */
export function createAdminCredentialsWorkbook() {
  const ws = XLSX.utils.json_to_sheet(DEFAULT_ADMIN_ACCOUNTS);
  
  // Set column widths
  ws['!cols'] = [
    { wch: 25 }, // AdminID
    { wch: 18 }, // Password
    { wch: 24 }, // RoleName
    { wch: 28 }, // Department
    { wch: 15 }, // CreatedDate
    { wch: 10 }  // Status
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Admin_Credentials');
  return wb;
}

/**
 * Download the default Admin Credentials Excel file
 */
export function downloadAdminCredentialsExcel() {
  const wb = createAdminCredentialsWorkbook();
  XLSX.writeFile(wb, 'Echaar_Admin_Credentials.xlsx');
}

/**
 * Parse an uploaded Admin Credentials Excel or CSV file
 * @param {ArrayBuffer} data 
 * @returns {Array<{AdminID: string, Password: string, RoleName?: string}>}
 */
export function parseAdminExcelFile(data) {
  try {
    const workbook = XLSX.read(data, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    if (!Array.isArray(jsonData) || jsonData.length === 0) {
      throw new Error('Excel sheet is empty or improperly formatted.');
    }

    // Normalize keys: find column matching admin id and password
    const credentials = jsonData.map(row => {
      let adminId = '';
      let password = '';
      let roleName = 'Authorized Evaluator';

      for (const key of Object.keys(row)) {
        const cleanKey = key.trim().toLowerCase().replace(/[\s_-]/g, '');
        if (cleanKey.includes('adminid') || cleanKey.includes('username') || cleanKey.includes('login') || cleanKey === 'id' || cleanKey.includes('email')) {
          adminId = String(row[key]).trim();
        } else if (cleanKey.includes('password') || cleanKey.includes('pass') || cleanKey.includes('pwd')) {
          password = String(row[key]).trim();
        } else if (cleanKey.includes('role') || cleanKey.includes('name')) {
          roleName = String(row[key]).trim() || roleName;
        }
      }

      return {
        AdminID: adminId,
        Password: password,
        RoleName: roleName,
        raw: row
      };
    }).filter(c => c.AdminID && c.Password);

    if (credentials.length === 0) {
      throw new Error('No valid rows found with "AdminID" and "Password" columns.');
    }

    return credentials;
  } catch (err) {
    console.error('Error parsing admin Excel:', err);
    throw err;
  }
}

/**
 * Export Candidate assessment test results to a rich multi-sheet Excel file
 */
export function exportResultsToExcel(candidates, questionsMap) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Candidate Overview Summary
  const summaryRows = candidates.map((c, idx) => ({
    'Sr No': idx + 1,
    'Candidate ID': c.id,
    'Full Name': c.name,
    'Selected Role': c.roleTitle || c.roleId,
    'Email Address': c.email,
    'Phone': c.phone,
    'College / Institute': c.college || 'N/A',
    'Degree / Branch': c.degree || 'N/A',
    'Total Score': `${c.totalScore} / ${c.maxScore || 45}`,
    'Tech Score (Field)': `${c.techScore} / 15`,
    'General Alignment %': `${c.generalScore || 0}%`,
    'Problem-Solving Score': `${c.problemSolvingScore ?? 'Pending Review'} / 25`,
    'Decision / Review Status': c.adminReviewStatus || 'Pending Review',
    'Evaluator Notes': c.adminEvaluatorNotes || 'N/A',
    'Proctoring Violations': c.violations?.length || 0,
    'Proctoring Status': (c.violations?.length || 0) > 3 ? 'Flagged (Excessive Violations)' : 'Clean / Normal',
    'Test Date': new Date(c.submittedAt || Date.now()).toLocaleDateString(),
    'Time Taken (mins)': c.timeSpentMinutes ? `${c.timeSpentMinutes} min` : '45 min'
  }));

  const wsSummary = XLSX.utils.json_to_sheet(summaryRows);
  wsSummary['!cols'] = [
    { wch: 8 }, { wch: 16 }, { wch: 22 }, { wch: 28 }, { wch: 26 },
    { wch: 15 }, { wch: 26 }, { wch: 20 }, { wch: 14 }, { wch: 16 },
    { wch: 18 }, { wch: 22 }, { wch: 25 }, { wch: 30 }, { wch: 18 }, { wch: 25 }, { wch: 14 }, { wch: 16 }
  ];
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Candidate_Summary');

  // Sheet 2: GET Placement Analysis (for GET role candidates)
  const getCandidates = candidates.filter(c => c.roleId === 'get' || c.getAnalysis);
  if (getCandidates.length > 0) {
    const getRows = getCandidates.map(c => {
      const p = c.getAnalysis?.parameters || {};
      const top3 = c.getAnalysis?.topDepartments || [];
      return {
        'Candidate ID': c.id,
        'Name': c.name,
        'College': c.college || 'N/A',
        'Design %': `${p.design || 0}%`,
        'Production %': `${p.production || 0}%`,
        'PPC (Planning) %': `${p.ppc || 0}%`,
        'Quality Assurance %': `${p.quality || 0}%`,
        'Technical Marketing %': `${p.tech_marketing || 0}%`,
        '1st Recommended Role': top3[0]?.title || 'N/A',
        '1st Match %': top3[0] ? `${top3[0].score}%` : 'N/A',
        '2nd Recommended Role': top3[1]?.title || 'N/A',
        '2nd Match %': top3[1] ? `${top3[1].score}%` : 'N/A',
        '3rd Recommended Role': top3[2]?.title || 'N/A',
        '3rd Match %': top3[2] ? `${top3[2].score}%` : 'N/A',
        'Recommendation Rationale': top3[0]?.rationale || 'High engineering core alignment'
      };
    });

    const wsGET = XLSX.utils.json_to_sheet(getRows);
    wsGET['!cols'] = [
      { wch: 16 }, { wch: 22 }, { wch: 24 },
      { wch: 12 }, { wch: 14 }, { wch: 16 }, { wch: 18 }, { wch: 22 },
      { wch: 26 }, { wch: 14 }, { wch: 26 }, { wch: 14 }, { wch: 26 }, { wch: 14 },
      { wch: 45 }
    ];
    XLSX.utils.book_append_sheet(wb, wsGET, 'GET_Placement_Insights');
  }

  // Sheet 3: Problem-Solving Responses & Admin Grading
  const psRows = [];
  candidates.forEach(c => {
    if (c.problemSolvingAnswers && Object.keys(c.problemSolvingAnswers).length > 0) {
      Object.entries(c.problemSolvingAnswers).forEach(([qId, ans]) => {
        psRows.push({
          'Candidate ID': c.id,
          'Candidate Name': c.name,
          'Role': c.roleTitle || c.roleId,
          'Question ID': qId,
          'Scenario Title': ans.title || `Problem Scenario ${qId}`,
          'Selected Strategy / Approach': ans.selectedOptionText || 'Custom Approach',
          'Candidate Written Rationale': ans.textResponse || 'N/A',
          'Admin Assigned Score (0-5)': ans.adminScore ?? 'Pending Evaluation',
          'Admin Evaluator Notes': ans.adminNotes || 'Pending review'
        });
      });
    }
  });

  if (psRows.length > 0) {
    const wsPS = XLSX.utils.json_to_sheet(psRows);
    wsPS['!cols'] = [
      { wch: 16 }, { wch: 22 }, { wch: 26 }, { wch: 14 },
      { wch: 30 }, { wch: 35 }, { wch: 45 }, { wch: 22 }, { wch: 30 }
    ];
    XLSX.utils.book_append_sheet(wb, wsPS, 'Problem_Solving_Answers');
  }

  // Sheet 4: Proctoring & Violation Audit Logs
  const violRows = [];
  candidates.forEach(c => {
    if (c.violations && c.violations.length > 0) {
      c.violations.forEach((v, vIdx) => {
        violRows.push({
          'Candidate ID': c.id,
          'Candidate Name': c.name,
          'Violation #': vIdx + 1,
          'Timestamp': v.timestamp || 'N/A',
          'Violation Type': v.type || 'Window Blur / Tab Switch',
          'Details / Action': v.details || 'Candidate unfocused the active test window'
        });
      });
    }
  });

  if (violRows.length > 0) {
    const wsViol = XLSX.utils.json_to_sheet(violRows);
    wsViol['!cols'] = [
      { wch: 16 }, { wch: 22 }, { wch: 14 }, { wch: 20 }, { wch: 28 }, { wch: 45 }
    ];
    XLSX.utils.book_append_sheet(wb, wsViol, 'Proctoring_Violations_Log');
  }

  const filename = `Echaar_Aptitude_Results_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, filename);
}
