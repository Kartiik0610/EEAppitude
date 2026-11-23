import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  FileCheck, 
  ArrowRight,
  GraduationCap,
  Building2,
  TrendingUp,
  Download,
  Sparkles,
  Cloud,
  CloudUpload,
  RefreshCw,
  Printer,
  User,
  Mail,
  Phone,
  School,
  BookOpen,
  Hash,
  Briefcase,
  Check
} from 'lucide-react';
import GetParameterRadar from './GetParameterRadar';

export default function TestCompleted({
  result,
  onReturnHome,
  onRetryCloudSync
}) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
  }, []);

  if (!result) return null;

  const isGET = result.roleId === 'get' && result.getAnalysis;
  const violationsCount = result.violations?.length || 0;
  const techScore = Number(result.techScore) || 0;
  const techPercent = Math.round((techScore / 15) * 100);
  const generalScore = Number(result.generalScore) || 0;

  return (
    <div className="w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-5rem)] py-0 sm:py-8 px-0 sm:px-4 lg:px-8 flex items-center justify-center relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main Container - Full Edge-to-Edge on Mobile, 90% on Desktop */}
      <div className="w-full sm:w-[94%] lg:w-[90%] max-w-[1700px] glass-panel-elevated rounded-none sm:rounded-[32px] shadow-none sm:shadow-2xl border-x-0 sm:border border-y-0 sm:border-y border-white/90 overflow-hidden relative mx-auto">
        
        {/* Executive Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-industrial-900 to-slate-900 text-white px-4 sm:px-8 lg:px-10 py-5 sm:py-8 relative overflow-hidden">
          
          <div className="absolute -top-12 left-10 w-80 h-36 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 right-20 w-80 h-36 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
            
            {/* Logo and Assessment Header */}
            <div className="flex items-center space-x-3.5 sm:space-x-5">
              <div className="p-2 sm:p-2.5 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Echaar Equipments Pvt. Ltd."
                  className="h-9 sm:h-14 w-auto object-contain drop-shadow-md"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Test Submission</span>
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                  Assessment Completed Successfully
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm font-medium mt-0.5">
                  Candidate: <strong className="text-white">{result.name}</strong> • Record ID: <span className="font-mono text-amber-300 font-bold">{result.id}</span>
                </p>
              </div>
            </div>

            {/* Top Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 self-stretch lg:self-auto justify-end">
              <button
                onClick={() => window.print()}
                className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-md flex items-center space-x-2 transition shadow-xs"
              >
                <Printer className="w-4 h-4 text-slate-300" />
                <span>Print Scorecard</span>
              </button>

              <button
                onClick={onReturnHome}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl sm:rounded-2xl shadow-lg shadow-blue-600/30 flex items-center space-x-2 transition"
              >
                <span>Return to Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-6 lg:p-10 space-y-4 sm:space-y-8">
          
          {/* Cloud Upload Status Card */}
          <div className="rounded-2xl overflow-hidden transition-all shadow-xs">
            {result.cloudSyncStatus === 'synced' && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-50/95 via-teal-50/80 to-slate-50/90 border border-emerald-200/90 p-3.5 sm:p-5 rounded-2xl text-emerald-950">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-500/20 text-emerald-700 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-black text-sm sm:text-base text-emerald-950">
                        Recorded in Central Evaluation Vault
                      </span>
                      <span className="text-[10px] font-black bg-emerald-200/80 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300 uppercase tracking-wide">
                        Cloud Synced
                      </span>
                    </div>
                    <p className="text-xs text-emerald-800 mt-0.5 font-medium">
                      Your test responses, objective domain score, situational trait profile, and problem-solving answers have been secured in the Central Evaluation Vault and are active for administrative review.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-white/90 px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs">
                    Record ID: {result.id}
                  </span>
                </div>
              </div>
            )}

            {result.cloudSyncStatus === 'uploading' && (
              <div className="flex items-center space-x-3.5 bg-blue-50/90 border border-blue-200/90 p-3.5 sm:p-5 rounded-2xl text-blue-950 animate-pulse">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div>
                  <span className="font-extrabold text-sm sm:text-base text-blue-950 block">Connecting to Evaluation Cloud...</span>
                  <p className="text-xs text-blue-800 mt-0.5">
                    Encrypting and posting your assessment submission to the Echaar evaluation command center.
                  </p>
                </div>
              </div>
            )}

            {(!result.cloudSyncStatus || result.cloudSyncStatus === 'failed') && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/90 border border-amber-200/90 p-3.5 sm:p-5 rounded-2xl text-amber-950">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm sm:text-base text-amber-950 block">Assessment Stored Safely On This Device</span>
                    <p className="text-xs text-amber-800 mt-0.5">
                      {result.cloudSyncMessage || 'Cloud upload paused. Your answers are stored locally. Click retry to transmit to evaluation portal.'}
                    </p>
                  </div>
                </div>
                {onRetryCloudSync && (
                  <button
                    type="button"
                    onClick={() => onRetryCloudSync(result)}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition flex-shrink-0 self-start sm:self-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retry Cloud Sync</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Candidate Overview Ribbon (Full 5-Column Executive Card) */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/90 border border-slate-200/90 backdrop-blur-md shadow-xs">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3.5 flex items-center space-x-2 border-b border-slate-200 pb-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>Candidate Registration Dossier</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Candidate Name</span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base block mt-0.5">{result.name}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Assessed Track / Role</span>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="font-extrabold text-blue-700 text-xs sm:text-sm">{result.roleTitle}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">({result.department})</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">College / University</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm block mt-0.5 truncate" title={result.college}>
                  {result.college || 'N/A'}
                </span>
                <span className="text-[11px] text-slate-500 truncate block">{result.degree || 'Engineering'}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Contact & Identifiers</span>
                <span className="font-bold text-slate-800 text-xs block mt-0.5 truncate">{result.email}</span>
                <span className="text-[11px] text-slate-500 font-mono">{result.phone || result.rollNo || 'N/A'}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] font-semibold">Test Completion Time</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm block mt-0.5">
                  {new Date(result.submittedAt).toLocaleDateString()} • {new Date(result.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                <span className="text-[11px] text-slate-500">Duration: {result.timeSpentMinutes || 45} mins</span>
              </div>
            </div>
          </div>

          {/* Performance Analytics: 4 High-Impact KPI Cards (Full Width) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* 1. Field Technical Domain */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/30 border-2 border-emerald-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                    Field Technical Domain
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Auto-Evaluated
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 my-2">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-950">{techScore}</span>
                  <span className="text-sm font-extrabold text-emerald-700">/ 15 Marks</span>
                </div>

                <div className="w-full bg-emerald-200/60 rounded-full h-2 my-2 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(5, techPercent))}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-[11px] text-emerald-800 font-medium leading-snug mt-2">
                Objective domain engineering knowledge tailored to machinery operations & mechanics.
              </p>
            </div>

            {/* 2. General & Behavioral Trait */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/30 border-2 border-indigo-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-indigo-800 uppercase tracking-wider">
                    General & Behavioral
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
                    Trait Alignment
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 my-2">
                  <span className="text-3xl sm:text-4xl font-black text-indigo-950">{generalScore}%</span>
                  <span className="text-sm font-extrabold text-indigo-700">Index</span>
                </div>

                <div className="w-full bg-indigo-200/60 rounded-full h-2 my-2 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(5, generalScore))}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-[11px] text-indigo-800 font-medium leading-snug mt-2">
                Evaluates situational integrity, precision, safety ethics, and industrial teamwork.
              </p>
            </div>

            {/* 3. Problem Solving Scenarios */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-amber-50/30 border-2 border-amber-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
                    Problem-Solving (5 Qs)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Board Review
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 my-2">
                  <span className="text-xl sm:text-2xl font-black text-amber-950">Submitted</span>
                  <span className="text-xs font-bold text-amber-700">to Committee</span>
                </div>

                <div className="w-full bg-amber-200/60 rounded-full h-2 my-2 overflow-hidden">
                  <div className="bg-amber-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <p className="text-[11px] text-amber-800 font-medium leading-snug mt-2">
                Candidate triage approach and written rationales queued for admin marks (0 to 5 each).
              </p>
            </div>

            {/* 4. Proctoring Security Status */}
            <div className={`p-5 sm:p-6 rounded-3xl border-2 shadow-sm flex flex-col justify-between ${
              violationsCount > 0
                ? 'bg-gradient-to-br from-rose-50/90 via-white to-rose-50/30 border-rose-200/90 text-rose-950'
                : 'bg-gradient-to-br from-teal-50/90 via-white to-teal-50/30 border-teal-200/90 text-teal-950'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider">
                    Proctoring Audit
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    violationsCount > 0 ? 'bg-rose-100 text-rose-800 border-rose-300' : 'bg-teal-100 text-teal-800 border-teal-300'
                  }`}>
                    {violationsCount === 0 ? 'Clean Session' : 'Audit Flags'}
                  </span>
                </div>

                <div className="flex items-baseline space-x-2 my-2">
                  <span className="text-3xl sm:text-4xl font-black">
                    {violationsCount === 0 ? '0' : violationsCount}
                  </span>
                  <span className="text-sm font-extrabold opacity-80">
                    {violationsCount === 1 ? 'Violation' : 'Violations Logged'}
                  </span>
                </div>

                <div className={`w-full rounded-full h-2 my-2 overflow-hidden ${violationsCount > 0 ? 'bg-rose-200' : 'bg-teal-200'}`}>
                  <div className={`h-2 rounded-full ${violationsCount > 0 ? 'bg-rose-600 w-full' : 'bg-teal-600 w-full'}`}></div>
                </div>
              </div>

              <p className="text-[11px] opacity-80 font-medium leading-snug mt-2">
                {violationsCount === 0
                  ? 'No window focus losses, devtools shortcuts, or fullscreen departures recorded.'
                  : 'Focus losses & fullscreen departures logged with timestamps for administrative audit.'}
              </p>
            </div>

          </div>

          {/* SPECIAL GET CANDIDATE PLACEMENT INSIGHTS (Full Widescreen View) */}
          {isGET && (
            <div className="pt-2">
              <div className="border-t border-slate-200/80 pt-8">
                <GetParameterRadar analysis={result.getAnalysis} candidateName={result.name} />
              </div>
            </div>
          )}

          {/* Next Steps Information Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 backdrop-blur-md">
            <h4 className="font-black text-slate-900 flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Next Steps with Echaar Equipments Recruitment Board:</span>
            </h4>
            <p className="leading-relaxed text-slate-600">
              The technical evaluation committee reviews objective marks, scenario triage justifications, and proctoring logs directly from the Central Evaluation Directory. Shortlisted candidates will be contacted for face-to-face technical interviews and plant visits at Echaar’s manufacturing facilities.
            </p>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Echaar Equipments Pvt. Ltd. • Official Candidate Assessment Report</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => window.print()}
                className="flex-1 sm:flex-none px-6 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center space-x-2 transition shadow-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Print Scorecard</span>
              </button>

              <button
                onClick={onReturnHome}
                className="flex-1 sm:flex-none px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 flex items-center justify-center space-x-2 transition"
              >
                <span>Return to Home</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
