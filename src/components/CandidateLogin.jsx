import React, { useState } from 'react';
import { 
  ROLES 
} from '../data/roles';
import { 
  ShieldCheck, 
  AlertCircle, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Maximize2,
  Lock,
  Layers,
  Sparkles,
  User,
  Mail,
  Phone,
  School,
  BookOpen,
  Hash,
  Briefcase,
  ChevronDown
} from 'lucide-react';

export default function CandidateLogin({
  onStartTest,
  onAdminClick
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    rollNo: '',
    roleId: 'get',
    agreedToProctoring: false
  });

  const [error, setError] = useState('');

  const selectedRole = ROLES.find(r => r.id === formData.roleId) || ROLES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid phone number.');
      return;
    }
    if (!formData.college.trim()) {
      setError('Please enter your College / University name.');
      return;
    }
    if (!formData.agreedToProctoring) {
      setError('You must agree to the Proctoring, Fullscreen, and Anti-Cheat regulations to proceed.');
      return;
    }

    onStartTest({
      ...formData,
      roleTitle: selectedRole.title,
      department: selectedRole.department,
      registeredAt: new Date().toISOString()
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-5rem)] py-0 sm:py-8 px-0 sm:px-4 flex items-center justify-center relative">
      
      {/* Background Ambient Lights */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full sm:w-[94%] lg:w-[90%] max-w-[1600px] glass-panel-elevated rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl border-x-0 sm:border border-y-0 sm:border-y border-white/80 overflow-hidden relative">
        
        {/* Compact Banner: Logo on Left, Information on Right (Minimizes Height) */}
        <div className="bg-gradient-to-r from-slate-900 via-industrial-900 to-slate-900 px-4 sm:px-8 py-4 sm:py-5 text-white relative overflow-hidden">
          
          {/* Subtle ambient glow */}
          <div className="absolute -top-10 left-10 w-72 h-32 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            
            {/* Logo on the Left */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Echaar Equipments Pvt. Ltd."
                className="h-10 sm:h-14 md:h-16 w-auto object-contain drop-shadow-lg"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Rest of Header Info on the Right */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right space-y-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Aptitude & Technical Assessment</span>
              </div>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                Candidate Evaluation Center
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm font-medium">
                Echaar Equipments Pvt. Ltd. • Precision Engineering
              </p>
            </div>

          </div>
        </div>

        {/* Content Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
          
          {error && (
            <div className="flex items-center space-x-2.5 p-3 sm:p-4 bg-rose-50/95 border border-rose-200 rounded-xl text-rose-700 text-xs sm:text-sm font-semibold backdrop-blur-md animate-in fade-in">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Section 1: Candidate Identification */}
          <div>
            <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200/80 pb-2 mb-3.5">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white text-[11px] sm:text-xs flex items-center justify-center font-bold">1</span>
              <span>Candidate Information</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul.sharma@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  College / University <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. VJTI Mumbai / COEP"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <School className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Branch / Specialization
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Mechanical / Mechatronics / MBA"
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Roll No. / Application ID (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. ECH-2025-042"
                    value={formData.rollNo}
                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl glass-input text-slate-800 text-sm focus:outline-none"
                  />
                  <Hash className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Role Selection (Full-Title Dropdown - No Truncation) */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 mb-3.5">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white text-[11px] sm:text-xs flex items-center justify-center font-bold">2</span>
                <span>Select Assessment Role</span>
              </h2>
              <span className="text-[11px] font-bold text-blue-600 font-mono">
                9 Roles Available
              </span>
            </div>

            {/* Dropdown Container */}
            <div className="space-y-3">
              <div>
                <label htmlFor="role-select" className="block text-xs font-bold text-slate-700 mb-1.5">
                  Choose Assessment Track <span className="text-rose-500">*</span>
                </label>
                
                <div className="relative">
                  <select
                    id="role-select"
                    value={formData.roleId}
                    onChange={(e) => setFormData({ ...formData, roleId: e.target.value })}
                    className="w-full pl-11 pr-11 py-3 sm:py-3.5 bg-white text-slate-900 text-xs sm:text-sm font-bold rounded-2xl border-2 border-slate-200 hover:border-blue-500 focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15 shadow-sm transition-all appearance-none cursor-pointer"
                  >
                    {ROLES.map((role) => (
                      <option key={role.id} value={role.id} className="text-slate-900 font-semibold py-2">
                        {role.title} ({role.shortCode}) — {role.department}
                      </option>
                    ))}
                  </select>

                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Active Selected Role Card Display */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/80 to-slate-50/90 border border-blue-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center space-x-3 min-w-0">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg border shadow-xs flex-shrink-0 ${selectedRole.badgeColor}`}>
                    {selectedRole.shortCode}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                      {selectedRole.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Department: <strong className="text-slate-700">{selectedRole.department}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                  <span className="text-[11px] font-bold text-blue-800 bg-white/90 px-3 py-1 rounded-full border border-blue-200/80 shadow-xs">
                    30 Questions • 45 Mins
                  </span>
                </div>
              </div>

              {/* Special GET Callout Banner */}
              {selectedRole.isSpecialGET && (
                <div className="p-3.5 sm:p-4 bg-indigo-50/90 border border-indigo-200/90 rounded-2xl flex items-start space-x-3 text-indigo-950 backdrop-blur-md">
                  <GraduationCap className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed space-y-0.5">
                    <span className="font-bold text-indigo-950 block">GET Multi-Parameter Track Active:</span>
                    <p className="text-indigo-800">
                      Calculates an inclination parameter graph across 5 core industrial domains (Design, Production, PPC, Quality, Marketing) and automatically computes your <strong>Top 3 Placement Recommendations</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Assessment Structure & Proctoring (Phone Friendly) */}
          <div className="bg-white/70 p-4 sm:p-5 rounded-2xl border border-slate-200/80 backdrop-blur-md space-y-3.5 shadow-xs">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Assessment Structure & Anti-Cheat System</span>
            </h3>

            {/* 3 Steps Compact Grid on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 text-xs">
              <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-900 block text-[11px] sm:text-xs">Part 1: 10 General Qs</span>
                <span className="text-slate-500 text-[10px] sm:text-[11px]">Behavioral & situational trait alignment.</span>
              </div>
              <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-900 block text-[11px] sm:text-xs">Part 2: 15 Field Qs</span>
                <span className="text-slate-500 text-[10px] sm:text-[11px]">Objective domain engineering questions.</span>
              </div>
              <div className="bg-white/80 p-2.5 sm:p-3 rounded-xl border border-slate-200/80">
                <span className="font-bold text-slate-900 block text-[11px] sm:text-xs">Part 3: 5 Scenario Qs</span>
                <span className="text-slate-500 text-[10px] sm:text-[11px]">Real-life triage with written reasoning.</span>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl text-amber-900 text-[11px] space-y-1">
              <span className="font-bold flex items-center space-x-1.5 text-amber-950">
                <Eye className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Active Proctoring:</span>
              </span>
              <p className="text-amber-800 leading-snug">
                Forced fullscreen is enforced. Window blur, tab switching, or screenshot attempts trigger screen blurring and log timestamped violations.
              </p>
            </div>

            {/* Checkbox */}
            <label className="flex items-start space-x-2.5 cursor-pointer pt-1">
              <input
                type="checkbox"
                required
                checked={formData.agreedToProctoring}
                onChange={(e) => setFormData({ ...formData, agreedToProctoring: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded-md text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer flex-shrink-0"
              />
              <span className="text-[11px] sm:text-xs text-slate-700 leading-snug font-medium">
                I agree to complete this assessment independently in forced fullscreen mode and accept all proctoring regulations.
              </span>
            </label>
          </div>

          {/* Action Button (Full Width on Mobile, Thumb-Friendly) */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-1">
            <div>
              <button
                type="button"
                onClick={onAdminClick}
                className="text-xs text-slate-500 hover:text-blue-600 font-bold flex items-center space-x-1.5 py-2 transition"
              >
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Admin / Evaluator Portal</span>
              </button>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl sm:rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all transform active:scale-[0.98]"
            >
              <Maximize2 className="w-4 h-4 text-amber-300" />
              <span>Start Assessment (Fullscreen)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
