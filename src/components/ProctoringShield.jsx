import React, { useEffect } from 'react';
import { 
  AlertTriangle, 
  EyeOff, 
  Maximize2, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { enterFullscreen } from '../utils/proctoring';

// Audio alert sound using browser Web Audio API
function playAlertBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch {}
}

export default function ProctoringShield({
  isBlurred,
  blurReason,
  isFullscreenExit,
  onResolveBlur,
  onResolveFullscreen,
  violationsCount,
  maxViolations = 5,
  latestViolation = null
}) {
  useEffect(() => {
    if (isBlurred || isFullscreenExit) {
      playAlertBeep();
    }
  }, [isBlurred, isFullscreenExit]);

  if (!isBlurred && !isFullscreenExit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl border-2 border-rose-500 overflow-hidden text-center p-6 sm:p-8 space-y-6">
        
        {/* Violation Icon */}
        <div className="w-16 h-16 rounded-full bg-rose-100 border-2 border-rose-300 flex items-center justify-center mx-auto text-rose-600 animate-bounce">
          {isFullscreenExit ? (
            <Maximize2 className="w-8 h-8" />
          ) : (
            <EyeOff className="w-8 h-8" />
          )}
        </div>

        {/* Header Message */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider border border-rose-200">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Proctoring Alert • Violation Recorded</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            {isFullscreenExit ? 'Fullscreen Mode Exited' : 'Screen Obscured & Blurred'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            {isFullscreenExit
              ? 'You have exited the mandatory fullscreen assessment window. Testing cannot continue in windowed mode.'
              : blurReason || 'The test window lost active focus, switched tabs, or an unauthorized shortcut was triggered.'}
          </p>
        </div>

        {/* Violation Count Badge */}
        <div className="p-3 bg-rose-50/80 rounded-xl border border-rose-200 text-xs">
          <div className="flex justify-between items-center font-bold text-slate-800">
            <span>Recorded Violations:</span>
            <span className="font-mono text-rose-600 text-sm">
              {violationsCount} of {maxViolations} Max
            </span>
          </div>
          {violationsCount >= maxViolations - 1 && (
            <p className="text-rose-700 text-[11px] font-semibold mt-1">
              Warning: Exceeding {maxViolations} violations will trigger automatic submission of your assessment.
            </p>
          )}
        </div>

        {/* Action Button */}
        <div>
          {isFullscreenExit ? (
            <button
              onClick={async () => {
                await enterFullscreen();
                onResolveFullscreen();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-white font-bold text-sm shadow-lg flex items-center justify-center space-x-2 transition"
            >
              <Maximize2 className="w-4 h-4 text-amber-400" />
              <span>Re-Enter Fullscreen & Resume</span>
            </button>
          ) : (
            <button
              onClick={onResolveBlur}
              className="w-full py-3.5 px-6 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-white font-bold text-sm shadow-lg flex items-center justify-center space-x-2 transition"
            >
              <span>Return to Assessment Window</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <p className="text-[11px] text-slate-400">
          Echaar Anti-Cheat Engine • All events time-stamped for administrative review
        </p>

      </div>
    </div>
  );
}
