import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  Lock, 
  User, 
  LogOut, 
  Maximize2,
  FileSpreadsheet,
  Cpu,
  MapPin
} from 'lucide-react';
import { useTimezoneGreeting } from '../utils/greeting';

export default function Header({
  activeView, // 'candidate_login' | 'test' | 'completed' | 'admin_login' | 'admin_dashboard'
  candidate = null,
  adminUser = null,
  timeRemainingSeconds = null,
  violationsCount = 0,
  maxViolations = 5,
  currentQuestionIndex = 0,
  totalQuestions = 30,
  onAdminClick,
  onCandidateExit,
  onEnterFullscreen
}) {
  const [logoError, setLogoError] = useState(false);
  const activeName = adminUser?.adminId || adminUser?.name || candidate?.name || '';
  const greetingInfo = useTimezoneGreeting(activeName);

  const formatTime = (seconds) => {
    if (seconds === null || seconds === undefined) return '--:--';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isTestActive = activeView === 'test';
  const isTimeCritical = timeRemainingSeconds !== null && timeRemainingSeconds < 300;
  const isTimeWarning = timeRemainingSeconds !== null && timeRemainingSeconds < 600;

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white shadow-lg shadow-slate-950/20 transition-all w-full">
      <div className="w-full sm:w-[94%] lg:w-[90%] max-w-[1700px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-18">
          
          {/* Brand Logo & Presentation */}
          <div className="flex items-center space-x-2 sm:space-x-3.5 min-w-0">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Echaar Equipments Pvt. Ltd."
                onError={() => setLogoError(true)}
                className="h-7 sm:h-9 md:h-10 w-auto object-contain flex-shrink-0"
              />
            ) : (
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md flex-shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            )}

            <div className="hidden sm:flex items-center border-l border-white/20 pl-3">
              <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Assessment Center
              </span>
            </div>
          </div>

          {/* Active Test Status & Timer Bar (Mobile Responsive) */}
          {isTestActive && (
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Dynamic Candidate Greeting badge */}
              {candidate?.name && (
                <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold backdrop-blur-md">
                  <span>{greetingInfo.icon}</span>
                  <span>{greetingInfo.greeting}, <strong className="text-white">{candidate.name}</strong></span>
                </div>
              )}

              {/* Question Count Pill (hidden on very small phones, shown on sm+) */}
              <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-slate-400 text-[11px]">Q:</span>
                <span className="font-extrabold text-white">
                  {currentQuestionIndex + 1}/{totalQuestions}
                </span>
              </div>

              {/* Countdown Timer */}
              <div className={`flex items-center space-x-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border font-mono font-bold text-xs sm:text-sm backdrop-blur-md transition-all ${
                isTimeCritical
                  ? 'bg-rose-500/25 border-rose-500/60 text-rose-300 animate-pulse shadow-md shadow-rose-500/20'
                  : isTimeWarning
                  ? 'bg-amber-500/25 border-amber-500/50 text-amber-300'
                  : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
              }`}>
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-current" />
                <span>{formatTime(timeRemainingSeconds)}</span>
              </div>

              {/* Proctoring & Violation Counter */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold border backdrop-blur-md ${
                  violationsCount > 0
                    ? 'bg-rose-950/70 border-rose-600/50 text-rose-300'
                    : 'bg-emerald-950/60 border-emerald-700/50 text-emerald-300'
                }`}>
                  {violationsCount > 0 ? (
                    <AlertTriangle className="w-3 h-3 text-rose-400" />
                  ) : (
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  )}
                  <span className="font-mono">{violationsCount}/{maxViolations}</span>
                </div>

                <button
                  onClick={onEnterFullscreen}
                  title="Enforce Fullscreen Mode"
                  className="p-1 sm:p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Right Navigation Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
            {activeView === 'candidate_login' && (
              <button
                onClick={onAdminClick}
                className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Admin Login</span>
                <span className="sm:hidden">Admin</span>
              </button>
            )}

            {activeView === 'admin_login' && (
              <button
                onClick={onCandidateExit}
                className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all shadow-sm"
              >
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Candidate Portal</span>
                <span className="sm:hidden">Portal</span>
              </button>
            )}

            {activeView === 'admin_dashboard' && (
              <div className="flex items-center space-x-2">
                {/* Greeting on Top */}
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-xs">
                  <span>{greetingInfo.icon}</span>
                  <span>{greetingInfo.greeting}, <strong className="text-white">{adminUser?.adminId || 'Admin'}</strong>!</span>
                </div>

                <span className="hidden xl:inline-flex items-center text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                  <Clock className="w-3 h-3 mr-1 text-slate-400" />
                  {greetingInfo.timeString} • {greetingInfo.timeZone}
                </span>

                <button
                  onClick={onCandidateExit}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold text-rose-300 hover:text-white bg-rose-950/60 hover:bg-rose-900 border border-rose-800/60 backdrop-blur-md transition-all ml-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
