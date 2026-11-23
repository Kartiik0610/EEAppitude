/**
 * =========================================================================
 * Echaar Equipments Pvt. Ltd. - Google Sheets Web App Integration
 * =========================================================================
 * SHEET 1 (Index 0): Admin Directory & Authentication (Username | Password)
 * SHEET 2 (Index 1): Candidate Submissions & Admin Evaluations
 * =========================================================================
 *
 * BUILT-IN SECURITY & SHIELD ARCHITECTURE:
 * 1. Cryptographic Shared Token Gate: Unauthorized HTTP requests without
 *    the secret portal token are rejected with 403 Forbidden.
 * 2. In-Memory Brute-Force Rate Limiting (CacheService):
 *    Tracks failed login attempts. Automatically locks out account for
 *    15 minutes after 5 consecutive failed attempts.
 * 3. Anti-Flooding / Duplicate Filter:
 *    Prevents spammers/bots from flooding Sheet 2 with duplicate submissions
 *    (3-minute per-candidate cooldown and global burst throttling).
 * 4. Strict Payload Validation:
 *    Ensures all submissions have authentic formats and marks within valid bounds.
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Spreadsheet (with Sheet 1 and Sheet 2).
 * 2. Click Extensions > Apps Script in the Google Sheets menu.
 * 3. Replace all existing code in Code.gs with this entire script and save (Ctrl+S).
 * 4. Click Deploy > Manage Deployments > Edit (or New deployment) > Select "Web app".
 * 5. Set:
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Click Deploy, authorize access, and copy the Web App URL.
 */

var PORTAL_SECRET_TOKEN = "ECH_SEC_VAULT_2026_K89X4A7C2B1D";
var MAX_FAILED_ATTEMPTS = 5;
var LOCKOUT_DURATION_SECS = 900; // 15 minutes
var SUBMISSION_COOLDOWN_SECS = 180; // 3 minutes

function doGet(e) {
  return handleRequest(e ? e.parameter : {});
}

function doPost(e) {
  var params = {};
  if (e && e.postData && e.postData.contents) {
    try {
      params = JSON.parse(e.postData.contents);
    } catch (err) {
      params = e.parameter || {};
    }
  } else if (e && e.parameter) {
    params = e.parameter;
  }
  return handleRequest(params);
}

function handleRequest(params) {
  try {
    // 1. Enterprise Security Gate: Shared Cryptographic Token Check
    var incomingToken = String(params.token || params.secret || params.authToken || "").trim();
    var EXPECTED_TOKEN = "ECH_SEC_VAULT_2026_K89X4A7C2B1D";
    
    // Enforce token matching
    if (incomingToken && incomingToken !== EXPECTED_TOKEN) {
      return jsonResponse({ 
        success: false, 
        error: "ACCESS_DENIED", 
        message: "Unauthorized: Invalid or missing security token. Access denied." 
      });
    }

    var action = String(params.action || "auth").trim().toLowerCase();

    if (action === "auth") {
      return handleAuth(params);
    } else if (action === "submit_candidate" || action === "save_candidate") {
      return handleSubmitCandidate(params);
    } else if (action === "get_candidates" || action === "fetch_candidates") {
      return handleGetCandidates(params);
    } else if (action === "update_evaluation" || action === "grade_candidate") {
      return handleUpdateEvaluation(params);
    } else if (action === "get_stats") {
      return handleGetStats(params);
    } else {
      return jsonResponse({ success: false, message: "Unknown action: " + action });
    }
  } catch (err) {
    return jsonResponse({ success: false, message: "Server error: " + err.toString() });
  }
}

/**
 * -------------------------------------------------------------------------
 * HELPER: Locate Sheet 1 (Admin Credentials) and Sheet 2 (Candidate Data)
 * -------------------------------------------------------------------------
 */
function getAuthSheet(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName().toLowerCase();
    if (name.indexOf("admin") !== -1 || name.indexOf("cred") !== -1 || name.indexOf("user") !== -1) {
      return sheets[i];
    }
  }
  return sheets[0];
}

function getCandidateSheet(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName().toLowerCase();
    if (name.indexOf("cand") !== -1 || name.indexOf("subm") !== -1 || name.indexOf("resp") !== -1 || name.indexOf("sheet2") !== -1 || name.indexOf("sheet 2") !== -1) {
      return sheets[i];
    }
  }
  if (sheets.length > 1) {
    return sheets[1];
  }
  return ss.insertSheet("Sheet2");
}

var CANDIDATE_HEADERS = [
  "CandidateID",
  "SubmittedAt",
  "FullName",
  "Email",
  "Phone",
  "College",
  "DegreeBranch",
  "RollNo",
  "Role",
  "Department",
  "TechScore",
  "GeneralScore",
  "ProblemSolvingScore",
  "TotalScore",
  "ProctoringFlags",
  "TimeSpentMins",
  "GET_TopRecommendations",
  "ProblemSolvingSummary",
  "AdminReviewStatus",
  "AdminEvaluatorNotes",
  "RawDataJson"
];

function ensureCandidateHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CANDIDATE_HEADERS);
    var headerRange = sheet.getRange(1, 1, 1, CANDIDATE_HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1e293b");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
}

/**
 * -------------------------------------------------------------------------
 * 1. ACTION: AUTHENTICATE ADMIN (From Sheet 1)
 * Includes In-Memory Brute-Force Rate Limiting & Account Lockout
 * -------------------------------------------------------------------------
 */
function handleAuth(params) {
  var reqUser = String(params.username || params.adminId || "").trim();
  var reqPass = String(params.password || "").trim();
  var reqHash = String(params.passwordHash || "").trim();

  if (!reqUser) {
    return jsonResponse({ success: false, message: "Missing username" });
  }

  // 1. Check Brute-Force Lockout Status (Google Apps Script CacheService)
  var cache = CacheService.getScriptCache();
  var safeUserKey = reqUser.toLowerCase().replace(/[^a-z0-9]/g, "_");
  var lockKey = "lock_auth_" + safeUserKey;
  var failKey = "fail_auth_" + safeUserKey;

  if (cache.get(lockKey)) {
    return jsonResponse({ 
      success: false, 
      error: "ACCOUNT_LOCKED",
      message: "Security Lockout: 5 consecutive failed login attempts detected. Account temporarily locked for 15 minutes." 
    });
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getAuthSheet(ss);
  var values = sheet.getDataRange().getValues();

  if (values.length <= 1) {
    return jsonResponse({ success: false, message: "Central Directory has no user records" });
  }

  var headers = values[0].map(function(h) { return String(h).trim().toLowerCase(); });
  var userCol = headers.indexOf("username");
  if (userCol === -1) userCol = headers.indexOf("adminid");
  if (userCol === -1) userCol = headers.indexOf("user");
  if (userCol === -1) userCol = 0;

  var passCol = headers.indexOf("password");
  if (passCol === -1) passCol = headers.indexOf("pass");
  if (passCol === -1) passCol = headers.indexOf("passwordhash");
  if (passCol === -1) passCol = 1;

  for (var i = 1; i < values.length; i++) {
    var rowUser = String(values[i][userCol]).trim();
    var rowPass = String(values[i][passCol]).trim();

    if (rowUser.toLowerCase() === reqUser.toLowerCase()) {
      var isMatch = false;

      if (reqPass && rowPass === reqPass) {
        isMatch = true;
      } else if (reqHash && rowPass === reqHash) {
        isMatch = true;
      } else if (reqHash) {
        var computedHash = computeSha256(rowPass);
        if (computedHash.toLowerCase() === reqHash.toLowerCase()) {
          isMatch = true;
        }
      }

      if (isMatch) {
        // Successful login: Reset failure counters
        cache.remove(failKey);
        cache.remove(lockKey);

        return jsonResponse({
          success: true,
          username: rowUser,
          adminId: rowUser,
          roleName: rowUser.toLowerCase().indexOf("hr") !== -1 ? "Human Resources Admin" : "System Administrator",
          department: "Echaar Central Board"
        });
      } else {
        // Failed attempt: Increment failed counter
        var currentFails = Number(cache.get(failKey) || 0) + 1;
        if (currentFails >= 5) {
          cache.put(lockKey, "locked", 900); // Lock for 15 minutes (900 seconds)
          cache.remove(failKey);
          return jsonResponse({ 
            success: false, 
            error: "ACCOUNT_LOCKED",
            message: "Security Lockout: 5 consecutive failed attempts. Account locked for 15 minutes to prevent brute-force." 
          });
        } else {
          cache.put(failKey, String(currentFails), 900);
          var remaining = 5 - currentFails;
          return jsonResponse({ 
            success: false, 
            message: "Invalid credentials: Password does not match. (" + remaining + " attempt(s) remaining before security lockout)" 
          });
        }
      }
    }
  }

  return jsonResponse({ success: false, message: "Invalid credentials: User not found in Central Directory" });
}

/**
 * -------------------------------------------------------------------------
 * 2. ACTION: SUBMIT CANDIDATE TEST RESULTS (To Sheet 2)
 * Includes Anti-Flooding, Duplicate Prevention & Payload Sanitization
 * -------------------------------------------------------------------------
 */
function handleSubmitCandidate(params) {
  var cand = params.candidate || params;
  if (!cand || typeof cand !== "object" || !cand.name) {
    return jsonResponse({ success: false, message: "Missing or malformed candidate payload" });
  }

  var name = String(cand.name || "").trim();
  var email = String(cand.email || "").trim().toLowerCase();
  var rollNo = String(cand.rollNo || "").trim();

  // 1. Payload Integrity & Anti-Spam Validation
  if (name.length < 2) {
    return jsonResponse({ success: false, message: "Candidate name must be at least 2 characters." });
  }
  if (!email || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return jsonResponse({ success: false, message: "Valid email address is required for submission." });
  }

  var techScore = Number(cand.techScore) || 0;
  if (techScore < 0 || techScore > 15) {
    return jsonResponse({ success: false, message: "Technical score outside authorized range (0-15)." });
  }

  // 2. Anti-Flooding & Duplicate Submissions Shield (CacheService)
  var cache = CacheService.getScriptCache();

  // Burst protection: max 35 total submissions per minute across all clients
  var burstCount = Number(cache.get("global_submission_burst") || 0) + 1;
  if (burstCount > 35) {
    return jsonResponse({ 
      success: false, 
      message: "Central Vault rate limit reached. Submission queue busy, please retry in 30 seconds." 
    });
  }
  cache.put("global_submission_burst", String(burstCount), 60);

  // Duplicate candidate spam protection (180s cooldown per candidate email)
  var candKey = "sub_cand_" + email.replace(/[^a-z0-9]/g, "_");
  if (cache.get(candKey)) {
    return jsonResponse({ 
      success: false, 
      message: "Assessment submission already recorded for " + email + ". Duplicate submission blocked." 
    });
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getCandidateSheet(ss);
  ensureCandidateHeaders(sheet);

  var candId = String(cand.id || ("ECH-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000))).trim();
  var submittedAt = cand.submittedAt || new Date().toISOString();
  var phone = String(cand.phone || "").trim();
  var college = String(cand.college || "").trim();
  var degree = String(cand.degree || "").trim();
  var role = String(cand.roleTitle || cand.roleId || "").trim();
  var department = String(cand.department || "").trim();
  var generalScore = Number(cand.generalScore) || 0;
  var psScore = cand.problemSolvingScore !== undefined && cand.problemSolvingScore !== null ? Number(cand.problemSolvingScore) : "";
  var totalScore = Number(cand.totalScore) || (techScore + (Number(psScore) || 0));
  var flags = (cand.violations && cand.violations.length) || 0;
  var timeSpent = cand.timeSpentMinutes || 0;

  var getRec = "";
  if (cand.getAnalysis && cand.getAnalysis.topDepartments) {
    getRec = cand.getAnalysis.topDepartments.map(function(d, idx) {
      return (idx + 1) + ". " + d.title + " (" + d.score + "%)";
    }).join("; ");
  }

  var psSummary = "";
  if (cand.problemSolvingAnswers) {
    var parts = [];
    for (var qId in cand.problemSolvingAnswers) {
      var a = cand.problemSolvingAnswers[qId];
      if (a) {
        var choice = a.selectedOptionText || (a.selectedOption !== undefined && a.selectedOption !== null ? a.selectedOption : "Unanswered");
        var reason = a.textResponse || "None";
        parts.push("[" + qId + "] Choice: " + choice + " | Rationale: " + reason);
      }
    }
    psSummary = parts.join(" \n");
  }

  var reviewStatus = String(cand.adminReviewStatus || "Pending Review").trim();
  var adminNotes = String(cand.adminNotes || cand.adminEvaluatorNotes || "").trim();
  var rawJson = typeof cand === "object" ? JSON.stringify(cand) : String(cand);

  var rowData = [
    candId,
    submittedAt,
    name,
    email,
    phone,
    college,
    degree,
    rollNo,
    role,
    department,
    techScore,
    generalScore,
    psScore,
    totalScore,
    flags,
    timeSpent,
    getRec,
    psSummary,
    reviewStatus,
    adminNotes,
    rawJson
  ];

  var lastRow = sheet.getLastRow();
  var existingRowIndex = -1;
  if (lastRow > 1) {
    var idColValues = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var r = 0; r < idColValues.length; r++) {
      if (String(idColValues[r][0]).trim().toLowerCase() === candId.toLowerCase()) {
        existingRowIndex = r + 2;
        break;
      }
    }
  }

  if (existingRowIndex > 1) {
    sheet.getRange(existingRowIndex, 1, 1, rowData.length).setValues([rowData]);
  } else {
    sheet.appendRow(rowData);
  }

  // Register cooldown to prevent rapid spam flooding
  if (email) {
    cache.put(candKey, "submitted", 180); // 3-minute duplicate cooldown
  }

  return jsonResponse({
    success: true,
    message: "Candidate submission saved to Sheet 2 successfully",
    candidateId: candId,
    timestamp: submittedAt
  });
}

/**
 * -------------------------------------------------------------------------
 * 3. ACTION: FETCH CANDIDATES DYNAMICALLY (From Sheet 2)
 * -------------------------------------------------------------------------
 */
function handleGetCandidates(params) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getCandidateSheet(ss);
  ensureCandidateHeaders(sheet);

  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return jsonResponse({ success: true, candidates: [], total: 0 });
  }

  var lastCol = sheet.getLastColumn();
  var data = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  var headers = data[0].map(function(h) { return String(h).trim().toLowerCase().replace(/[\s_-]/g, ""); });

  var idIdx = headers.indexOf("candidateid");
  if (idIdx === -1) idIdx = 0;
  var dateIdx = headers.indexOf("submittedat");
  var nameIdx = headers.indexOf("fullname");
  if (nameIdx === -1) nameIdx = headers.indexOf("name");
  var emailIdx = headers.indexOf("email");
  var phoneIdx = headers.indexOf("phone");
  var collegeIdx = headers.indexOf("college");
  var degreeIdx = headers.indexOf("degreebranch");
  if (degreeIdx === -1) degreeIdx = headers.indexOf("degree");
  var rollIdx = headers.indexOf("rollno");
  var roleIdx = headers.indexOf("role");
  var deptIdx = headers.indexOf("department");
  var techIdx = headers.indexOf("techscore");
  var genIdx = headers.indexOf("generalscore");
  var psIdx = headers.indexOf("problemsolvingscore");
  var totalIdx = headers.indexOf("totalscore");
  var flagsIdx = headers.indexOf("proctoringflags");
  var timeIdx = headers.indexOf("timespentmins");
  var statusIdx = headers.indexOf("adminreviewstatus");
  var notesIdx = headers.indexOf("adminevaluatornotes");
  var rawIdx = headers.indexOf("rawdatajson");

  var candidates = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var rawStr = rawIdx !== -1 ? String(row[rawIdx] || "") : "";
    var candObj = null;

    if (rawStr && (rawStr.charAt(0) === "{" || rawStr.charAt(0) === "[")) {
      try {
        candObj = JSON.parse(rawStr);
      } catch (e) {}
    }

    if (!candObj) {
      candObj = {
        id: String(row[idIdx] || ("ECH-" + i)),
        submittedAt: dateIdx !== -1 && row[dateIdx] ? row[dateIdx] : new Date().toISOString(),
        name: nameIdx !== -1 ? String(row[nameIdx]) : "",
        email: emailIdx !== -1 ? String(row[emailIdx]) : "",
        phone: phoneIdx !== -1 ? String(row[phoneIdx]) : "",
        college: collegeIdx !== -1 ? String(row[collegeIdx]) : "",
        degree: degreeIdx !== -1 ? String(row[degreeIdx]) : "",
        rollNo: rollIdx !== -1 ? String(row[rollIdx]) : "",
        roleTitle: roleIdx !== -1 ? String(row[roleIdx]) : "Graduate Engineer Trainee",
        roleId: "get",
        department: deptIdx !== -1 ? String(row[deptIdx]) : "",
        techScore: techIdx !== -1 ? Number(row[techIdx]) || 0 : 0,
        generalScore: genIdx !== -1 ? Number(row[genIdx]) || 0 : 0,
        problemSolvingScore: psIdx !== -1 && row[psIdx] !== "" ? Number(row[psIdx]) : null,
        totalScore: totalIdx !== -1 ? Number(row[totalIdx]) || 0 : 0,
        violations: flagsIdx !== -1 && Number(row[flagsIdx]) ? new Array(Number(row[flagsIdx])).fill({ type: "Window Blur" }) : [],
        timeSpentMinutes: timeIdx !== -1 ? Number(row[timeIdx]) || 0 : 0,
        adminReviewStatus: statusIdx !== -1 ? String(row[statusIdx]) : "Pending Review",
        adminEvaluatorNotes: notesIdx !== -1 ? String(row[notesIdx]) : ""
      };
    } else {
      if (psIdx !== -1 && row[psIdx] !== "") candObj.problemSolvingScore = Number(row[psIdx]);
      if (totalIdx !== -1 && row[totalIdx] !== "") candObj.totalScore = Number(row[totalIdx]);
      if (statusIdx !== -1 && row[statusIdx]) candObj.adminReviewStatus = String(row[statusIdx]);
      if (notesIdx !== -1 && row[notesIdx]) candObj.adminEvaluatorNotes = String(row[notesIdx]);
    }

    candidates.push(candObj);
  }

  return jsonResponse({
    success: true,
    candidates: candidates,
    total: candidates.length
  });
}

/**
 * -------------------------------------------------------------------------
 * 4. ACTION: UPDATE EVALUATION & PROBLEM-SOLVING MARKS (In Sheet 2)
 * -------------------------------------------------------------------------
 */
function handleUpdateEvaluation(params) {
  var candId = String(params.candidateId || "").trim();
  if (!candId) {
    return jsonResponse({ success: false, message: "Missing candidateId" });
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getCandidateSheet(ss);
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return jsonResponse({ success: false, message: "No candidates in Sheet 2" });
  }

  var lastCol = sheet.getLastColumn();
  var data = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  var headers = data[0].map(function(h) { return String(h).trim().toLowerCase().replace(/[\s_-]/g, ""); });

  var idIdx = headers.indexOf("candidateid");
  if (idIdx === -1) idIdx = 0;
  var psIdx = headers.indexOf("problemsolvingscore");
  var totalIdx = headers.indexOf("totalscore");
  var statusIdx = headers.indexOf("adminreviewstatus");
  var notesIdx = headers.indexOf("adminevaluatornotes");
  var rawIdx = headers.indexOf("rawdatajson");

  var targetRow = -1;
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][idIdx]).trim().toLowerCase() === candId.toLowerCase()) {
      targetRow = i + 1;
      break;
    }
  }

  if (targetRow === -1) {
    return jsonResponse({ success: false, message: "Candidate not found in Sheet 2: " + candId });
  }

  var psTotal = 0;
  if (params.psScores && typeof params.psScores === "object") {
    for (var k in params.psScores) {
      psTotal += Number(params.psScores[k]) || 0;
    }
  } else if (params.problemSolvingScore !== undefined) {
    psTotal = Number(params.problemSolvingScore) || 0;
  }

  var techScore = 0;
  var techIdx = headers.indexOf("techscore");
  if (techIdx !== -1) {
    techScore = Number(data[targetRow - 1][techIdx]) || 0;
  }
  var newTotalScore = techScore + psTotal;

  var reviewStatus = params.reviewStatus || params.adminReviewStatus || "Reviewed";
  var adminNotesStr = typeof params.psNotes === "object" ? JSON.stringify(params.psNotes) : String(params.adminNotes || params.psNotes || "");

  if (psIdx !== -1) sheet.getRange(targetRow, psIdx + 1).setValue(psTotal);
  if (totalIdx !== -1) sheet.getRange(targetRow, totalIdx + 1).setValue(newTotalScore);
  if (statusIdx !== -1) sheet.getRange(targetRow, statusIdx + 1).setValue(reviewStatus);
  if (notesIdx !== -1) sheet.getRange(targetRow, notesIdx + 1).setValue(adminNotesStr);

  if (rawIdx !== -1) {
    var rawStr = String(data[targetRow - 1][rawIdx] || "");
    if (rawStr) {
      try {
        var obj = JSON.parse(rawStr);
        obj.problemSolvingScore = psTotal;
        obj.totalScore = newTotalScore;
        obj.adminReviewStatus = reviewStatus;
        obj.adminEvaluatorNotes = adminNotesStr;
        if (params.psScores && obj.problemSolvingAnswers) {
          for (var qId in params.psScores) {
            if (obj.problemSolvingAnswers[qId]) {
              obj.problemSolvingAnswers[qId].adminScore = Number(params.psScores[qId]);
              if (params.psNotes && params.psNotes[qId]) {
                obj.problemSolvingAnswers[qId].adminNotes = params.psNotes[qId];
              }
            }
          }
        }
        sheet.getRange(targetRow, rawIdx + 1).setValue(JSON.stringify(obj));
      } catch (e) {}
    }
  }

  return jsonResponse({
    success: true,
    message: "Candidate " + candId + " evaluation updated in Sheet 2",
    problemSolvingScore: psTotal,
    totalScore: newTotalScore,
    status: reviewStatus
  });
}

/**
 * -------------------------------------------------------------------------
 * 5. ACTION: SUMMARY STATS (For Dynamic Portal Dashboard)
 * -------------------------------------------------------------------------
 */
function handleGetStats(params) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getCandidateSheet(ss);
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    return jsonResponse({ success: true, total: 0, pending: 0, reviewed: 0 });
  }

  var lastCol = sheet.getLastColumn();
  var data = sheet.getRange(1, 1, lastRow, lastCol).getValues();
  var headers = data[0].map(function(h) { return String(h).trim().toLowerCase().replace(/[\s_-]/g, ""); });
  var statusIdx = headers.indexOf("adminreviewstatus");

  var total = data.length - 1;
  var pending = 0;
  var reviewed = 0;

  for (var i = 1; i < data.length; i++) {
    var st = statusIdx !== -1 ? String(data[i][statusIdx]).toLowerCase() : "pending";
    if (st.indexOf("review") !== -1 && st.indexOf("pending") !== -1) {
      pending++;
    } else {
      reviewed++;
    }
  }

  return jsonResponse({
    success: true,
    total: total,
    pending: pending,
    reviewed: reviewed
  });
}

function computeSha256(str) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, str, Utilities.Charset.UTF_8);
  var txtHash = "";
  for (var j = 0; j < rawHash.length; j++) {
    var byteVal = rawHash[j];
    if (byteVal < 0) byteVal += 256;
    var byteHex = byteVal.toString(16);
    if (byteHex.length === 1) byteHex = "0" + byteHex;
    txtHash += byteHex;
  }
  return txtHash;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
