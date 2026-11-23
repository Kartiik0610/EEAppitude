import React, { useState } from 'react';
import { 
  X, 
  Award, 
  ShieldAlert, 
  ShieldCheck, 
  FileText, 
  Printer, 
  CheckCircle, 
  XCircle, 
  Clock, 
  GraduationCap, 
  Save, 
  Check, 
  AlertTriangle,
  Building2,
  ChevronRight
} from 'lucide-react';
import GetParameterRadar from './GetParameterRadar';

export default function CandidateReportModal({
  candidate,
  questions,
  onClose,
  onSaveEvaluation
}) {
  if (!candidate) return null;

  const isGET = candidate.roleId === 'get' && candidate.getAnalysis;
  const violations = candidate.violations || [];

  // Local state for problem-solving scores and evaluator notes
  const [psScores, setPsScores] = useState(() => {
    const initial = {};
    if (candidate.problemSolvingAnswers) {
      Object.entries(candidate.problemSolvingAnswers).forEach(([qId, ans]) => {
        initial[qId] = ans.adminScore ?? 3; // default 3/5 if not graded
      });
    }
    return initial;
  });

  const [psNotes, setPsNotes] = useState(() => {
    const initial = {};
    if (candidate.problemSolvingAnswers) {
      Object.entries(candidate.problemSolvingAnswers).forEach(([qId, ans]) => {
        initial[qId] = ans.adminNotes || '';
      });
    }
    return initial;
  });

  const [reviewStatus, setReviewStatus] = useState(() => {
    return candidate.adminReviewStatus || 'Pending Review';
  });

  const [generalNotes, setGeneralNotes] = useState(() => {
    return candidate.adminEvaluatorNotes || '';
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleScoreChange = (qId, val) => {
    setPsScores(prev => ({
      ...prev,
      [qId]: Number(val)
    }));
    setIsSaved(false);
  };

  const handleNoteChange = (qId, val) => {
    setPsNotes(prev => ({
      ...prev,
      [qId]: val
    }));
    setIsSaved(false);
  };

  const handleSaveGrades = async () => {
    setIsSaving(true);
    setSaveMessage('');
    try {
      const mergedNotes = {
        ...psNotes,
        _general: generalNotes
      };
      const res = await onSaveEvaluation(candidate.id, psScores, mergedNotes, reviewStatus);
      setIsSaved(true);
      if (res && res.message) {
        setSaveMessage(res.message);
      } else {
        setSaveMessage('Evaluation saved & synced to Central Evaluation Portal!');
      }
      setTimeout(() => {
        setIsSaved(false);
        setSaveMessage('');
      }, 3500);
    } catch (e) {
      setSaveMessage('Saved locally (network sync pending).');
    } finally {
      setIsSaving(false);
    }
  };

  // Find problem-solving questions
  const psQuestions = questions.filter(q => q.section === 'problem_solving');
  const fieldQuestions = questions.filter(q => q.section === 'field');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 lg:p-6 animate-in fade-in duration-150">
      <div className="w-full sm:w-[94%] max-w-[1600px] bg-white rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl border-x-0 sm:border border-slate-200 overflow-hidden my-0 sm:my-4 h-full sm:h-auto sm:max-h-[96vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="bg-industrial-900 text-white px-6 py-4.5 flex items-center justify-between border-b border-industrial-800 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-industrial-800 border border-industrial-700 flex items-center justify-center font-bold text-amber-400">
              {candidate.roleId === 'get' ? <GraduationCap className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-black text-white">
                  {candidate.name}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {candidate.roleTitle}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Candidate ID: {candidate.id} • {candidate.email} • {candidate.college || 'N/A'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-300 hover:text-white hover:bg-industrial-800 rounded-lg transition"
              title="Print Candidate Scorecard"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-industrial-800 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1">
          
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Field Tech Score
              </span>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="text-2xl font-black text-emerald-600">{candidate.techScore}</span>
                <span className="text-xs text-slate-500">/ 15</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                General Alignment
              </span>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="text-2xl font-black text-indigo-600">{candidate.generalScore}%</span>
                <span className="text-xs text-slate-500">Index</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                Problem-Solving
              </span>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="text-2xl font-black text-amber-600">
                  {candidate.problemSolvingScore ?? Object.values(psScores).reduce((a, b) => a + b, 0)}
                </span>
                <span className="text-xs text-slate-500">/ 25</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border ${
              violations.length > 0 ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
            }`}>
              <span className="text-[11px] font-bold uppercase tracking-wide block">
                Proctoring Flags
              </span>
              <div className="flex items-baseline space-x-1 mt-0.5">
                <span className="text-2xl font-black">
                  {violations.length}
                </span>
                <span className="text-xs opacity-80">Violations</span>
              </div>
            </div>
          </div>

          {/* SPECIAL GET RADAR GRAPH & PLACEMENT SECTION */}
          {isGET && (
            <div className="bg-white p-5 rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4">
              <GetParameterRadar analysis={candidate.getAnalysis} candidateName={candidate.name} />
            </div>
          )}

          {/* SECTION A: Real-Life Problem-Solving Answers & Evaluator Grading */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-2">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>Real-Life Industrial Problem-Solving Scenarios (5 Questions)</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Review the candidate's strategic choices and open written rationale. Assign marks (0 to 5) and evaluator feedback notes.
                </p>
              </div>

              <button
                onClick={handleSaveGrades}
                disabled={isSaving}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition self-start sm:self-auto disabled:opacity-50"
              >
                {isSaving ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : isSaved ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                <span>{isSaving ? 'Syncing to Cloud...' : isSaved ? 'Saved & Synced!' : 'Save & Sync Evaluation'}</span>
              </button>
            </div>

            {saveMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-semibold flex items-center space-x-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{saveMessage}</span>
              </div>
            )}

            {/* Admin Decision & Status Selection Box */}
            <div className="p-4 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-slate-50/90 rounded-2xl border border-blue-200/90 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                    Admin / Evaluator Hiring Decision:
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Set placement status and notes to be dynamically reflected in the Central Evaluation Portal and admin reports.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={reviewStatus}
                    onChange={(e) => {
                      setReviewStatus(e.target.value);
                      setIsSaved(false);
                    }}
                    className="px-3 py-1.5 bg-white font-bold text-xs text-slate-800 rounded-xl border border-slate-300 shadow-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  >
                    <option value="Pending Review">Pending Review</option>
                    <option value="Shortlisted for Technical Round">Shortlisted for Technical Round</option>
                    <option value="Recommended for Plant Interview">Recommended for Plant Interview</option>
                    <option value="Selected for Placement Offer">Selected for Placement Offer</option>
                    <option value="On Hold / Talent Pool">On Hold / Talent Pool</option>
                    <option value="Rejected / Not Shortlisted">Rejected / Not Shortlisted</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Overall Evaluator Board Feedback & Remarks:
                </label>
                <textarea
                  rows={2}
                  placeholder="Enter evaluation notes, technical strengths, or hiring committee comments..."
                  value={generalNotes}
                  onChange={(e) => {
                    setGeneralNotes(e.target.value);
                    setIsSaved(false);
                  }}
                  className="w-full p-2.5 bg-white text-xs text-slate-800 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none shadow-xs"
                />
              </div>
            </div>

            <div className="space-y-4">
              {psQuestions.map((q, idx) => {
                const ans = candidate.problemSolvingAnswers?.[q.id] || {};
                const score = psScores[q.id] ?? 3;
                const notes = psNotes[q.id] || '';

                return (
                  <div key={q.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-industrial-800 uppercase tracking-wide">
                          Scenario #{idx + 1}: {q.title}
                        </span>
                        <p className="text-xs text-slate-600 mt-1 italic">
                          "{q.scenario}"
                        </p>
                      </div>

                      {/* Marks input */}
                      <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300 shadow-xs flex-shrink-0">
                        <span className="text-xs font-bold text-slate-700">Evaluator Marks:</span>
                        <select
                          value={score}
                          onChange={(e) => handleScoreChange(q.id, e.target.value)}
                          className="font-black text-sm text-industrial-900 bg-transparent focus:outline-none"
                        >
                          <option value={0}>0 / 5</option>
                          <option value={1}>1 / 5</option>
                          <option value={2}>2 / 5</option>
                          <option value={3}>3 / 5</option>
                          <option value={4}>4 / 5</option>
                          <option value={5}>5 / 5 (Max)</option>
                        </select>
                      </div>
                    </div>

                    {/* Candidate Choice */}
                    <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-700 block mb-0.5">Selected Strategy / Option:</span>
                      <p className="text-slate-800 font-medium">
                        {ans.selectedOptionText || 'No option selected'}
                      </p>
                    </div>

                    {/* Candidate Written Rationale */}
                    <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                      <span className="font-bold text-slate-700 block mb-0.5">Candidate Written Rationale & Justification:</span>
                      <p className="text-slate-800 leading-relaxed font-sans whitespace-pre-wrap">
                        {ans.textResponse || '(Candidate did not provide written notes for this scenario)'}
                      </p>
                    </div>

                    {/* Evaluator Notes Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Add evaluator feedback / interview follow-up notes..."
                        value={notes}
                        onChange={(e) => handleNoteChange(q.id, e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-1 focus:ring-industrial-800 bg-white"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION B: Field Technical Questions Review (15 Qs) */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 border-b pb-2 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Technical Domain Questions Breakdown (15 Questions)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {fieldQuestions.map((q, idx) => {
                const candAnsIdx = candidate.fieldAnswers?.[q.id];
                const isCorrect = candAnsIdx !== undefined && candAnsIdx === q.correctAnswer;
                const answered = candAnsIdx !== undefined;

                return (
                  <div key={q.id} className={`p-3.5 rounded-xl border ${
                    isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                  }`}>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-bold text-slate-800">
                        Q{idx + 11}: {q.title}
                      </span>
                      {isCorrect ? (
                        <span className="flex items-center text-emerald-700 font-bold text-[11px] bg-emerald-100 px-2 py-0.5 rounded">
                          <Check className="w-3 h-3 mr-0.5" /> Correct (+1)
                        </span>
                      ) : (
                        <span className="flex items-center text-rose-700 font-bold text-[11px] bg-rose-100 px-2 py-0.5 rounded">
                          <X className="w-3 h-3 mr-0.5" /> Incorrect (0)
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 line-clamp-2 mb-2">{q.question}</p>
                    <div className="text-[11px] text-slate-500">
                      <span>Candidate Choice: </span>
                      <strong className="text-slate-800">
                        {answered ? q.options[candAnsIdx]?.text : 'Not Answered'}
                      </strong>
                    </div>
                    {!isCorrect && (
                      <div className="text-[11px] text-emerald-700 mt-0.5">
                        <span>Correct Key: </span>
                        <strong>{q.options[q.correctAnswer]?.text}</strong>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION C: Proctoring & Violation Audit Log */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 border-b pb-2 flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>Proctoring Audit Log ({violations.length} Incidents)</span>
            </h3>

            {violations.length === 0 ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center space-x-3 text-xs text-emerald-800 font-semibold">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Flawless Proctoring Session: No window focus loss, devtools shortcuts, or fullscreen exits were detected during this test.</span>
              </div>
            ) : (
              <div className="space-y-2">
                {violations.map((v, vIdx) => (
                  <div key={vIdx} className="p-3 bg-rose-50/70 border border-rose-200 rounded-lg text-xs flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-rose-950">{v.type || 'Window Blur / Tab Switch'}</span>
                        <p className="text-rose-800 text-[11px]">{v.details}</p>
                      </div>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{v.timestamp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-500">
            Echaar Equipments Pvt. Ltd. Confidential Candidate Assessment Record
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSaveGrades}
              disabled={isSaving}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition disabled:opacity-50"
            >
              {isSaving ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isSaved ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{isSaving ? 'Syncing to Cloud...' : isSaved ? 'Saved & Synced!' : 'Save & Sync Evaluation'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
