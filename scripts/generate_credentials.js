import * as XLSX from 'xlsx';
import * as fs from 'fs';

const DEFAULT_ADMIN_ACCOUNTS = [
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

const ws = XLSX.utils.json_to_sheet(DEFAULT_ADMIN_ACCOUNTS);
ws['!cols'] = [
  { wch: 25 },
  { wch: 18 },
  { wch: 24 },
  { wch: 28 },
  { wch: 15 },
  { wch: 10 }
];

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Admin_Credentials');
XLSX.writeFile(wb, 'admin_credentials.xlsx');
console.log('Successfully generated admin_credentials.xlsx');
