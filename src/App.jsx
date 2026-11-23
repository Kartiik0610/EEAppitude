import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import CandidateLogin from './components/CandidateLogin';
import TestEngine from './components/TestEngine';
import TestCompleted from './components/TestCompleted';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProctoringShield from './components/ProctoringShield';

import { DEFAULT_QUESTIONS_MAP, getQuestionsForRole } from './data/defaultQuestions';
import { SAMPLE_CANDIDATES } from './data/sampleCandidates';
import { StorageService } from './utils/storage';
import { setupProctoringEngine, enterFullscreen, exitFullscreen } from './utils/proctoring';
import { calculateGetInclination } from './utils/getRecommendation';
import { 
  pushCandidateToGoogleSheet, 
  fetchCandidatesFromGoogleSheet, 
  updateCandidateEvaluationOnGoogleSheet 
} from './utils/googleSheetsService';

export default function App() {
  // Navigation View: 'candidate_login' | 'test' | 'completed' | 'admin_login' | 'admin_dashboard'
  const [activeView, setActiveView] = useState('candidate_login');

  // Candidate Test State
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [currentTestQuestions, setCurrentTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(45 * 60); // 45 minutes default
  const [testCompletedResult, setTestCompletedResult] = useState(null);

  // Candidate Answers: { general: {}, field: {}, problemSolving: {} }
  const [testAnswers, setTestAnswers] = useState({
    general: {},
    field: {},
    problemSolving: {}
  });

  // Proctoring & Anti-Cheat State
  const [violations, setViolations] = useState([]);
  const [isBlurred, setIsBlurred] = useState(false);
  const [blurReason, setBlurReason] = useState('');
  const [isFullscreenExit, setIsFullscreenExit] = useState(false);
  const maxViolations = 5;

  // Admin Portal State
  const [adminUser, setAdminUser] = useState(null);
  const [candidateResults, setCandidateResults] = useState([]);
  const [questionsMap, setQuestionsMap] = useState(DEFAULT_QUESTIONS_MAP);

  // Load persistent results & custom question bank on mount
  useEffect(() => {
    const savedResults = StorageService.getResults();
    // Filter out previous mock demo data so only real submissions appear
    const cleanResults = (savedResults || []).filter(c => 
      c.id !== 'ECH-2025-001' && 
      c.id !== 'ECH-2025-002' && 
      c.id !== 'ECH-2025-003' &&
      c.name !== 'Aditya Deshmukh' &&
      c.name !== 'Sneha Kulkarni' &&
      c.name !== 'Rohan Mehta'
    );

    setCandidateResults(cleanResults);

    const savedQuestions = StorageService.getCustomQuestions();
    if (savedQuestions) {
      setQuestionsMap(savedQuestions);
    }
  }, []);

  // Timer countdown hook for active test
  useEffect(() => {
    if (activeView !== 'test') return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit('TIMEOUT');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeView]);

  // Proctoring Engine Hook
  useEffect(() => {
    if (activeView !== 'test') return;

    const cleanup = setupProctoringEngine({
      isActive: true,
      onViolation: (violation) => {
        setViolations(prev => {
          const updated = [...prev, violation];
          if (updated.length >= maxViolations) {
            // Auto submit test if threshold breached
            handleFinalSubmit('EXCESSIVE_VIOLATIONS');
          }
          return updated;
        });
      },
      onBlurChange: (blurred, reason) => {
        setIsBlurred(blurred);
        if (blurred) {
          setBlurReason(reason || 'Window lost focus');
        }
      },
      onFullscreenExit: () => {
        setIsFullscreenExit(true);
      }
    });

    return () => cleanup();
  }, [activeView]);

  // 1. Candidate Starts Test
  const handleStartCandidateTest = async (candidateData) => {
    // Request Fullscreen
    await enterFullscreen();

    const roleQuestions = getQuestionsForRole(candidateData.roleId, questionsMap);
    setCurrentCandidate(candidateData);
    setCurrentTestQuestions(roleQuestions);
    setCurrentQuestionIndex(0);
    setTestAnswers({
      general: {},
      field: {},
      problemSolving: {}
    });
    setViolations([]);
    setIsBlurred(false);
    setIsFullscreenExit(false);
    setTimeRemainingSeconds((candidateData.timeMinutes || 45) * 60);
    setActiveView('test');
  };

  // 2. Answer Selection Handlers
  const handleAnswerChange = (section, questionId, optionIndex) => {
    setTestAnswers(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [questionId]: optionIndex
      }
    }));
  };

  const handleProblemSolvingChange = (questionId, payload) => {
    setTestAnswers(prev => ({
      ...prev,
      problemSolving: {
        ...prev.problemSolving,
        [questionId]: payload
      }
    }));
  };

  // 3. Final Test Submission & Scoring Calculation
  const handleFinalSubmit = (submissionReason = 'NORMAL') => {
    exitFullscreen();

    // A. Calculate Technical Domain Score (15 questions, objective)
    let techCorrect = 0;
    const fieldQuestions = currentTestQuestions.filter(q => q.section === 'field');
    fieldQuestions.forEach(q => {
      const selected = testAnswers.field[q.id];
      if (selected !== undefined && selected === q.correctAnswer) {
        techCorrect += 1;
      }
    });

    // B. Calculate General Alignment Score (10 questions, trait weighted)
    let generalPoints = 0;
    const generalQuestions = currentTestQuestions.filter(q => q.section === 'general');
    generalQuestions.forEach(q => {
      const selected = testAnswers.general[q.id];
      if (selected !== undefined && q.options && q.options[selected]) {
        const opt = q.options[selected];
        generalPoints += (opt.scoreMultiplier || 1.0) * 10;
      } else {
        generalPoints += 5; // default neutral if unanswered
      }
    });
    const generalScorePercent = Math.min(98, Math.max(30, Math.round(generalPoints)));

    // C. Problem-Solving Answers & Initial Default Score
    let initialPsScore = 0;
    const psAnswers = { ...(testAnswers.problemSolving || {}) };
    const psQuestions = currentTestQuestions.filter(q => q.section === 'problem_solving');
    psQuestions.forEach(q => {
      const ans = psAnswers[q.id];
      if (ans && ans.selectedOption !== undefined && ans.selectedOption !== null) {
        const opt = (q.options && q.options[ans.selectedOption]) ? q.options[ans.selectedOption] : null;
        const initialMark = opt && opt.effectivenessScore ? Math.round(opt.effectivenessScore * 5) : 3;
        initialPsScore += initialMark;
        ans.adminScore = initialMark;
      } else {
        psAnswers[q.id] = {
          selectedOption: null,
          selectedOptionText: 'Unanswered',
          textResponse: ans?.textResponse || '',
          title: q.title || '',
          adminScore: 0
        };
      }
    });

    // D. Special GET Analysis & Top 3 Placement Recommendation
    let getAnalysisData = null;
    if (currentCandidate.roleId === 'get') {
      getAnalysisData = calculateGetInclination(
        currentTestQuestions,
        testAnswers.general,
        testAnswers.field,
        testAnswers.problemSolving
      );
    }

    const finalResult = {
      id: `ECH-${new Date().getFullYear()}-${String(Date.now()).slice(-4)}`,
      name: currentCandidate.name,
      email: currentCandidate.email,
      phone: currentCandidate.phone,
      college: currentCandidate.college,
      degree: currentCandidate.degree,
      rollNo: currentCandidate.rollNo,
      roleId: currentCandidate.roleId,
      roleTitle: currentCandidate.roleTitle,
      department: currentCandidate.department,
      submittedAt: new Date().toISOString(),
      timeSpentMinutes: Math.round(((currentCandidate.timeMinutes || 45) * 60 - timeRemainingSeconds) / 60),
      techScore: techCorrect, // out of 15
      generalScore: generalScorePercent, // %
      problemSolvingScore: initialPsScore, // out of 25
      totalScore: techCorrect + initialPsScore,
      maxScore: 40,
      submissionReason,
      violations: [...violations],
      fieldAnswers: { ...testAnswers.field },
      generalAnswers: { ...testAnswers.general },
      problemSolvingAnswers: psAnswers,
      getAnalysis: getAnalysisData,
      adminReviewStatus: 'Pending Review',
      cloudSyncStatus: 'uploading',
      cloudSyncMessage: 'Transmitting responses to Central Evaluation Cloud...'
    };

    // Save result persistently in local storage
    StorageService.saveResult(finalResult);
    setCandidateResults(prev => [finalResult, ...prev]);

    setTestCompletedResult(finalResult);
    setActiveView('completed');

    // Asynchronously push to central evaluation endpoint
    pushCandidateToGoogleSheet(finalResult).then(res => {
      if (res.success) {
        const synced = {
          ...finalResult,
          cloudSyncStatus: 'synced',
          cloudSyncMessage: 'Saved to Central Evaluation Vault successfully',
          cloudSyncedAt: new Date().toISOString()
        };
        StorageService.saveResult(synced);
        setTestCompletedResult(synced);
        setCandidateResults(prev => prev.map(c => c.id === finalResult.id ? synced : c));
      } else {
        const failed = {
          ...finalResult,
          cloudSyncStatus: 'failed',
          cloudSyncMessage: res.message || 'Evaluation saved locally'
        };
        StorageService.saveResult(failed);
        setTestCompletedResult(failed);
      }
    }).catch(err => {
      const failed = {
        ...finalResult,
        cloudSyncStatus: 'failed',
        cloudSyncMessage: err.message || 'Local copy secured'
      };
      StorageService.saveResult(failed);
      setTestCompletedResult(failed);
    });
  };

  // Retry cloud upload from completion screen
  const handleRetryCloudSync = async (candidate) => {
    if (!candidate) return;
    setTestCompletedResult(prev => ({
      ...prev,
      cloudSyncStatus: 'uploading',
      cloudSyncMessage: 'Re-transmitting to Central Evaluation Cloud...'
    }));

    const res = await pushCandidateToGoogleSheet(candidate);
    if (res.success) {
      const synced = {
        ...candidate,
        cloudSyncStatus: 'synced',
        cloudSyncMessage: 'Saved to Central Evaluation Vault successfully',
        cloudSyncedAt: new Date().toISOString()
      };
      StorageService.saveResult(synced);
      setTestCompletedResult(synced);
      setCandidateResults(prev => prev.map(c => c.id === candidate.id ? synced : c));
    } else {
      const failed = {
        ...candidate,
        cloudSyncStatus: 'failed',
        cloudSyncMessage: res.message || 'Upload failed. Check network connection.'
      };
      StorageService.saveResult(failed);
      setTestCompletedResult(failed);
    }
  };

  // 4. Admin Login & Logout Handlers
  const handleAdminLoginSuccess = (adminDetails) => {
    setAdminUser(adminDetails);
    setActiveView('admin_dashboard');
    handleRefreshFromSheet();
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
    setActiveView('candidate_login');
  };

  // Refresh candidates from Google Sheet 2
  const handleRefreshFromSheet = async () => {
    const res = await fetchCandidatesFromGoogleSheet();
    if (res.success && res.candidates && res.candidates.length > 0) {
      setCandidateResults(prev => {
        const map = new Map();
        prev.forEach(c => map.set(c.id, c));
        res.candidates.forEach(c => map.set(c.id, c));
        return Array.from(map.values());
      });
      return res;
    }
    return res;
  };

  // Push single or multiple candidates to Google Sheet 2
  const handlePushCandidateToSheet = async (candidate) => {
    return await pushCandidateToGoogleSheet(candidate);
  };

  // 5. Admin Problem-Solving Grading Update & Sheet 2 Sync
  const handleUpdateCandidateEvaluation = async (candidateId, psScores, psNotes, reviewStatus = 'Reviewed') => {
    StorageService.updateResultReview(candidateId, psScores, psNotes);
    setCandidateResults(prev => {
      return prev.map(c => {
        if (c.id === candidateId) {
          let psTotal = 0;
          const updatedPS = { ...(c.problemSolvingAnswers || {}) };
          Object.entries(psScores).forEach(([qId, s]) => {
            const num = Number(s) || 0;
            psTotal += num;
            if (updatedPS[qId]) {
              updatedPS[qId].adminScore = num;
              if (psNotes && psNotes[qId]) {
                updatedPS[qId].adminNotes = psNotes[qId];
              }
            }
          });
          return {
            ...c,
            problemSolvingAnswers: updatedPS,
            problemSolvingScore: psTotal,
            totalScore: (c.techScore || 0) + psTotal,
            adminReviewStatus: reviewStatus,
            reviewedAt: new Date().toISOString()
          };
        }
        return c;
      });
    });

    // Sync evaluation updates directly to Sheet 2
    return await updateCandidateEvaluationOnGoogleSheet(candidateId, psScores, psNotes, reviewStatus);
  };

  // 6. Question Bank Updates
  const handleSaveQuestionsMap = (newMap) => {
    setQuestionsMap(newMap);
    StorageService.saveCustomQuestions(newMap);
  };

  const handleResetQuestionsMap = () => {
    setQuestionsMap(DEFAULT_QUESTIONS_MAP);
    StorageService.resetQuestionBank();
  };

  // 7. Seed & Clear Candidate Results
  const handleSeedSampleData = () => {
    SAMPLE_CANDIDATES.forEach(c => StorageService.saveResult(c));
    setCandidateResults(StorageService.getResults());
  };

  const handleClearAllResults = () => {
    StorageService.clearAllData();
    setCandidateResults([]);
  };

  const handleDeleteCandidate = (candidateId) => {
    StorageService.deleteResult(candidateId);
    setCandidateResults(prev => prev.filter(c => c.id !== candidateId));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 font-sans text-slate-800">
      
      {/* Global Navigation Header */}
      <Header
        activeView={activeView}
        candidate={currentCandidate}
        adminUser={adminUser}
        timeRemainingSeconds={timeRemainingSeconds}
        violationsCount={violations.length}
        maxViolations={maxViolations}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={currentTestQuestions.length || 30}
        onAdminClick={() => setActiveView('admin_login')}
        onCandidateExit={handleAdminLogout}
        onEnterFullscreen={() => enterFullscreen()}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activeView === 'candidate_login' && (
          <CandidateLogin
            onStartTest={handleStartCandidateTest}
            onAdminClick={() => setActiveView('admin_login')}
          />
        )}

        {activeView === 'test' && (
          <div className="relative">
            {/* Screen Obscuring & Focus Protection Overlay */}
            <ProctoringShield
              isBlurred={isBlurred}
              blurReason={blurReason}
              isFullscreenExit={isFullscreenExit}
              violationsCount={violations.length}
              maxViolations={maxViolations}
              onResolveBlur={() => setIsBlurred(false)}
              onResolveFullscreen={() => {
                setIsFullscreenExit(false);
                setIsBlurred(false);
              }}
            />

            {/* Test Engine Content (automatically blurred when unfocused) */}
            <div className={isBlurred || isFullscreenExit ? 'proctoring-blur-active' : ''}>
              <TestEngine
                candidate={currentCandidate}
                questions={currentTestQuestions}
                answers={testAnswers}
                onAnswerChange={handleAnswerChange}
                onProblemSolvingChange={handleProblemSolvingChange}
                currentIndex={currentQuestionIndex}
                onNavigateQuestion={(idx) => setCurrentQuestionIndex(idx)}
                onSubmitTest={() => handleFinalSubmit('NORMAL')}
              />
            </div>
          </div>
        )}

        {activeView === 'completed' && (
          <TestCompleted
            result={testCompletedResult}
            onReturnHome={() => setActiveView('candidate_login')}
            onRetryCloudSync={handleRetryCloudSync}
          />
        )}

        {activeView === 'admin_login' && (
          <AdminLogin
            onLoginSuccess={handleAdminLoginSuccess}
            onBackToCandidate={() => setActiveView('candidate_login')}
          />
        )}

        {activeView === 'admin_dashboard' && (
          <AdminDashboard
            adminUser={adminUser}
            candidates={candidateResults}
            questionsMap={questionsMap}
            onUpdateCandidateEvaluation={handleUpdateCandidateEvaluation}
            onRefreshFromSheet={handleRefreshFromSheet}
            onPushCandidateToSheet={handlePushCandidateToSheet}
            onSaveQuestionsMap={handleSaveQuestionsMap}
            onResetQuestionsMap={handleResetQuestionsMap}
            onSeedSampleData={handleSeedSampleData}
            onClearAllResults={handleClearAllResults}
            onDeleteCandidate={handleDeleteCandidate}
          />
        )}
      </main>

      {/* Corporate Industrial Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-md border-t border-white/10 text-slate-400 py-4 px-2 sm:px-4 text-xs">
        <div className="w-full sm:w-[94%] lg:w-[90%] max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <span className="font-extrabold text-slate-200">Echaar Equipments Pvt. Ltd.</span>
            <span className="mx-2">•</span>
            <span>Excellence in Precision Engineering & CI Flexographic Machinery</span>
          </div>
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Echaar Equipments Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
