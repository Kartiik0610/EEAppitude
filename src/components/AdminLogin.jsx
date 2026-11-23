import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  ArrowLeft,
  KeyRound,
  Shield,
  ShieldCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import { 
  DEFAULT_ENCRYPTED_ADMINS, 
  verifyAdminCredentials, 
  authenticateViaGoogleSheet,
  getEmbeddedGoogleSheetEndpoint
} from '../utils/security';
import { parseAdminExcelFile } from '../utils/excelHelper';
import { StorageService } from '../utils/storage';
import { fetchSheetStats } from '../utils/googleSheetsService';

export default function AdminLogin({
  onLoginSuccess,
  onBackToCandidate
}) {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loadedAccounts, setLoadedAccounts] = useState(DEFAULT_ENCRYPTED_ADMINS);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState('');
  const [error, setError] = useState('');
  const [sheetStats, setSheetStats] = useState(null);

  // Load custom admin accounts and fetch dynamic Sheet 2 submission stats on mount
  useEffect(() => {
    const custom = StorageService.getCustomAdminAccounts();
    if (custom && Array.isArray(custom) && custom.length > 0) {
      setLoadedAccounts(custom);
    }

    fetchSheetStats().then(stats => {
      if (stats) setSheetStats(stats);
    }).catch(() => {});
  }, []);

  // Handle Custom Excel File Upload (Stores encrypted records)
  const handleFileUpload = (e) => {
    setError('');
    setUploadSuccessMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const buffer = evt.target?.result;
        const parsed = parseAdminExcelFile(buffer);
        if (parsed.length === 0) {
          throw new Error('No valid AdminID and Password columns found in the sheet.');
        }

        setLoadedAccounts(parsed);
        StorageService.saveCustomAdminAccounts(parsed);
        setUploadSuccessMsg(`Encrypted and loaded ${parsed.length} admin account(s) from "${file.name}"`);
      } catch (err) {
        setError(`Failed to parse Excel file: ${err.message || 'Ensure columns "AdminID" and "Password" exist.'}`);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Main Authentication Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const trimmedId = adminId.trim();
    const trimmedPass = password.trim();

    if (!trimmedId || !trimmedPass) {
      setError('Please enter both Username and Password.');
      setIsLoading(false);
      return;
    }

    try {
      const activeEndpoint = localStorage.getItem('_ech_gsheet_endpoint_url') || getEmbeddedGoogleSheetEndpoint();

      // Authenticate via Google Sheet / Apps Script Web App
      if (activeEndpoint) {
        const res = await authenticateViaGoogleSheet(activeEndpoint, trimmedId, trimmedPass);
        if (res.success) {
          onLoginSuccess({
            adminId: res.account.AdminID,
            roleName: res.account.RoleName || (trimmedId.toLowerCase().includes('hr') ? 'Human Resources Admin' : 'System Administrator'),
            authSource: 'Central Authentication Directory',
            loginTime: new Date().toISOString()
          });
          return;
        } else {
          let errText = res.message || 'Invalid Username or Password. Please check your credentials.';
          if (/sheet|script/i.test(errText)) {
            errText = 'Invalid Username or Password. Please check your credentials.';
          }
          setError(errText);
          setIsLoading(false);
          return;
        }
      }

      // Fallback: Verify against default accounts if no Web App URL is specified
      const res = await verifyAdminCredentials(trimmedId, trimmedPass, loadedAccounts);
      if (res.success) {
        onLoginSuccess({
          adminId: res.account.AdminID,
          roleName: res.account.RoleName || 'Administrator',
          authSource: 'Encrypted Directory',
          loginTime: new Date().toISOString()
        });
      } else {
        setError('Invalid Username or Password. Please check your credentials.');
      }
    } catch (err) {
      let errMsg = err.message || 'An unexpected authentication error occurred.';
      if (/sheet|script/i.test(errMsg)) {
        errMsg = 'Invalid Username or Password. Please check your credentials.';
      }
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-5rem)] py-0 sm:py-10 px-0 sm:px-6 lg:px-8 flex items-center justify-center relative">
      
      {/* Background Ambient Glass Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* 90% Widescreen Container */}
      <div className="w-full sm:w-[96%] lg:w-[92%] 2xl:w-[90%] max-w-[1700px] glass-panel-elevated rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl border-x-0 sm:border border-y-0 sm:border-y border-white/80 overflow-hidden relative mx-auto">
        
        {/* Compact Banner: Logo on Left, Information on Right */}
        <div className="bg-gradient-to-r from-slate-900 via-industrial-900 to-slate-900 text-white px-4 sm:px-8 py-4 sm:py-6 relative overflow-hidden">
          
          <div className="absolute -top-10 left-10 w-72 h-32 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            {/* Logo on Left */}
            <div className="flex items-center space-x-3.5 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Echaar Equipments Pvt. Ltd."
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Information on Right */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                <span>Administrator Command Portal</span>
              </div>
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-tight">
                Evaluation Center Login
              </h1>
              <p className="text-slate-300 text-[11px] sm:text-xs font-medium">
                Echaar Equipments Pvt. Ltd. • Secure Access
              </p>
            </div>
          </div>
        </div>

        {/* Content Body: 2-Column Senior Enterprise Layout */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Command Center Intelligence Overview (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Echaar Assessment & Evaluation Command</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Industrial Recruitment & Candidate Evaluation Portal
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Authorized administrative gateway for evaluating engineering trainees and technical specialists across Echaar’s manufacturing divisions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-slate-50/90 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>9 Technical Disciplines</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Live submissions across Mechanical Design, Production & CNC, Quality, and Marketing.
                  </p>
                </div>

                <div className="bg-slate-50/90 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>GET Placement Radar</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Automated multi-axis spider trait benchmarking and top-3 department placement.
                  </p>
                </div>

                <div className="bg-slate-50/90 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Problem-Solving Scoring</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Direct 0–5 situational rubric evaluation with synchronized candidate feedback.
                  </p>
                </div>

                <div className="bg-slate-50/90 p-4 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center space-x-2 text-amber-700 font-bold text-xs">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span>Anti-Cheat Audit Trail</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Real-time proctoring telemetry logging window focus departures and inspection flags.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Login Form (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-5 shadow-xs">
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Administrator Sign In</h3>
                <p className="text-xs text-slate-500 mt-0.5">Please provide your authorized credentials to proceed.</p>
              </div>

              {error && (
                <div className="flex items-center space-x-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold animate-in fade-in">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {uploadSuccessMsg && (
                <div className="flex items-center space-x-3 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{uploadSuccessMsg}</span>
                </div>
              )}

              {/* Login Credentials Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Username / Admin ID <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Admin or HR"
                      value={adminId}
                      onChange={(e) => setAdminId(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15 transition shadow-2xs"
                    />
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15 transition shadow-2xs"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/25 flex items-center justify-center space-x-2 transition-all transform active:scale-[0.99] disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-amber-300" />
                        <span>Authenticate & Access Dashboard</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Return to Candidate Portal */}
              <div className="text-center pt-3 border-t border-slate-200/80">
                <button
                  type="button"
                  onClick={onBackToCandidate}
                  className="text-xs text-slate-500 hover:text-blue-600 font-bold inline-flex items-center space-x-1.5 py-1 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                  <span>Return to Candidate Assessment Portal</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
