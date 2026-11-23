# Echaar Equipments Pvt. Ltd. — Role-Based Aptitude & Assessment Portal

A lightweight, self-contained web application built for **Echaar Equipments Pvt. Ltd.** to conduct role-based candidate aptitude, technical domain, and real-life problem-solving assessments with proctoring controls, Excel-backed admin authentication, and automated GET (Graduate Engineer Trainee) department placement recommendation intelligence.

---

## Key Highlights

- **Zero Heavy Infrastructure:** Runs 100% client-side using obfuscated browser storage (`localStorage`) and in-memory parsing. No external paid cloud backend or complex database required.
- **9 Candidate Roles Supported:**
  1. **Graduate Engineer Trainee (GET)**
  2. **Technical Marketing Engineer**
  3. **Production Planning Engineer**
  4. **Quality Engineer**
  5. **Design Engineer**
  6. **Production Engineer**
  7. **Intern Engineer**
  8. **Intern Accounts**
  9. **Intern HR**
- **30-Question Assessment Structure per Role (270 authentic questions total):**
  - **10 General Questions:** Psychometric, behavioral, and situational questions scored on performance and trait alignment (no rigid single correct answer).
  - **15 Role Field Questions:** Rigorous objective domain questions tailored to industrial engineering and Echaar's machinery context, scored automatically.
  - **5 Real-Life Problem-Solving Questions:** Realistic industrial scenario dilemmas with candidate written reasoning and strategic option selection, surfaced for admin review and grading (0–5 marks each).
- **Special GET Trainee Placement Intelligence:**
  - Evaluates trainee aptitude across 5 core functional departments: **Design**, **Production**, **Production Planning (PPC)**, **Quality Assurance**, and **Technical Marketing**.
  - Renders an interactive **Parameter Radar / Spider Chart** and **Department Inclination Bar Chart**.
  - Computes and highlights the **Top 3 Recommended Placement Departments** with matching percentages and tailored rationale.
- **Proctoring & Anti-Cheat Controls:**
  - **Forced Fullscreen Mode:** Enforced on test entry; exits trigger alerts and log timestamped violations.
  - **Inspection Blocking:** Right-click context menu and developer tools shortcuts (`F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+U`, `Ctrl+Shift+C`, `Ctrl+S`, `Ctrl+P`) are blocked.
  - **Screenshot & Focus Blurring:** Test window automatically applies a heavy blur filter whenever window focus is lost or tab switches occur.
  - **Violation Logging:** Tracks every incident with timestamps and attaches total violation counts to the candidate's test record.
- **Excel-Backed Admin Authentication & Dashboard:**
  - Authenticates against an **Excel file (`.xlsx`)** parsed via SheetJS (`xlsx`).
  - Bundled default accounts:
    - `admin@echaar.com` / `Echaar@2025` (Super Administrator)
    - `evaluator@echaar.com` / `Assess#2025` (Technical Evaluator)
    - `hr_lead@echaar.com` / `Talent@Echaar` (HR Recruitment Lead)
  - Admin can upload custom `.xlsx` credentials files or download the sample template.
  - **Question Bank Manager:** Full CRUD editor to view, add, edit, or delete questions and adjust GET parameter weights.
  - **Multi-Sheet Results Export:** Downloads comprehensive Excel reports (`Echaar_Assessment_Results.xlsx`) with Summary, GET Placement Insights, Problem-Solving Responses, and Proctoring Audit Logs.

---

## Getting Started

### 1. Installation & Running Locally
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# The application will be available at http://localhost:3000/

# Or run the production preview build
npm run build
npm run preview
# The production build will be available at http://localhost:4173/
```

### 2. Admin Credentials
The portal authenticates administrators directly from `admin_credentials.xlsx`:
- **Admin ID:** `admin@echaar.com`
- **Password:** `Echaar@2025`
*(You can also upload your own custom `.xlsx` file on the Admin Login screen with `AdminID` and `Password` columns).*
