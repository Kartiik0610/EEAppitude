import React, { useState } from 'react';
import { 
  ROLES 
} from '../data/roles';
import { 
  Users, 
  GraduationCap, 
  FileSpreadsheet, 
  Edit3, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  Eye, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  TrendingUp, 
  BarChart3,
  Award,
  Layers,
  Database,
  Trash2,
  RefreshCw,
  Link,
  Code2,
  Copy,
  Check,
  Clock
} from 'lucide-react';
import { exportResultsToExcel, parseAdminExcelFile } from '../utils/excelHelper';
import { StorageService } from '../utils/storage';
import { GOOGLE_APPS_SCRIPT_TEMPLATE } from '../utils/security';
import { useTimezoneGreeting } from '../utils/greeting';
import CandidateReportModal from './CandidateReportModal';
import QuestionEditor from './QuestionEditor';
import GetParameterRadar from './GetParameterRadar';

export default function AdminDashboard({
  adminUser,
  candidates,
  questionsMap,
  onUpdateCandidateEvaluation,
  onRefreshFromSheet,
  onPushCandidateToSheet,
  onSaveQuestionsMap,
  onResetQuestionsMap,
  onSeedSampleData,
  onClearAllResults,
  onDeleteCandidate
}) {
  const [activeTab, setActiveTab] = useState('candidates');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [uploadNotice, setUploadNotice] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isSyncingSheet, setIsSyncingSheet] = useState(false);
  const [isPushingAll, setIsPushingAll] = useState(false);
  const [syncNotice, setSyncNotice] = useState('');
  const [lastSyncTime, setLastSyncTime] = useState('');
  const greetingInfo = useTimezoneGreeting(adminUser?.adminId);

  // Auto-fetch fresh submissions from central evaluation repository on mount
  React.useEffect(() => {
    if (onRefreshFromSheet) {
      setIsSyncingSheet(true);
      onRefreshFromSheet().then(res => {
        setIsSyncingSheet(false);
        if (res && res.success) {
          setLastSyncTime(new Date().toLocaleTimeString());
        }
      }).catch(() => setIsSyncingSheet(false));
    }
  }, []);

  const handleManualRefresh = async () => {
    if (!onRefreshFromSheet) return;
    setIsSyncingSheet(true);
    setSyncNotice('');
    try {
      const res = await onRefreshFromSheet();
      setLastSyncTime(new Date().toLocaleTimeString());
      if (res && res.success) {
        setSyncNotice(`Synced ${res.candidates?.length || 0} candidate(s) from Central Directory.`);
      } else {
        setSyncNotice(res?.message || 'Sync completed.');
      }
      setTimeout(() => setSyncNotice(''), 4500);
    } catch (err) {
      setSyncNotice('Sync failed: ' + (err.message || 'Network issue'));
    } finally {
      setIsSyncingSheet(false);
    }
  };

  const handlePushAllLocalToSheet = async () => {
    if (!onPushCandidateToSheet || candidates.length === 0) return;
    setIsPushingAll(true);
    setSyncNotice('Uploading stored candidates to Central Directory...');
    let successCount = 0;
    for (const cand of candidates) {
      try {
        const res = await onPushCandidateToSheet(cand);
        if (res && res.success) successCount++;
      } catch {}
    }
    setIsPushingAll(false);
    setSyncNotice(`Uploaded ${successCount} candidate(s) to Central Directory!`);
    setTimeout(() => setSyncNotice(''), 4500);
  };

  // Filtering candidates
  const filteredCandidates = candidates.filter(c => {
    const matchesRole = roleFilter === 'all' || c.roleId === roleFilter;
    const isPending = !c.adminReviewStatus || c.adminReviewStatus.toLowerCase().includes('pending');
    const matchesStatus = statusFilter === 'all' ||
      (statusFilter === 'pending' && isPending) ||
      (statusFilter === 'reviewed' && !isPending);
    const matchesSearch = !searchQuery ||
      c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.college?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesStatus && matchesSearch;
  });

  const totalAssessed = candidates.length;
  const getCandidates = candidates.filter(c => c.roleId === 'get');
  const flaggedCandidates = candidates.filter(c => (c.violations?.length || 0) > 0);
  const avgTechScore = totalAssessed > 0
    ? (candidates.reduce((sum, c) => sum + (c.techScore || 0), 0) / totalAssessed).toFixed(1)
    : '0.0';

  const handleExportExcel = () => {
    exportResultsToExcel(candidates, questionsMap);
  };

  const handleAdminExcelUpload = (e) => {
    setUploadNotice('');
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const buffer = evt.target?.result;
        const parsed = parseAdminExcelFile(buffer);
        StorageService.saveCustomAdminAccounts(parsed);
        setUploadNotice(`Encrypted & updated: Loaded ${parsed.length} admin account(s) from "${file.name}".`);
        setTimeout(() => setUploadNotice(''), 4000);
      } catch (err) {
        alert(`Error updating admin credentials: ${err.message}`);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="w-full sm:w-[96%] lg:w-[92%] 2xl:w-[90%] max-w-[1800px] mx-auto px-0 sm:px-6 py-0 sm:py-7 space-y-3 sm:space-y-6">
      
      {/* Top Welcome & KPI Metrics Bar (Senior Web Developer Enterprise Spec) */}
      <div className="bg-white/95 backdrop-blur-xl rounded-none sm:rounded-3xl p-4 sm:p-7 border-x-0 sm:border border-y-0 sm:border-y border-slate-200/90 shadow-none sm:shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-5 sm:space-y-6">
        
        {/* Brand & Action Command Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-100 pb-5">
          
          {/* Identity & Metadata */}
          <div className="flex items-start sm:items-center space-x-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 shadow-sm flex items-center justify-center p-1.5 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Echaar Equipments"
                className="h-8 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <div className="min-w-0">
              {/* Dynamic Status / Session Tags */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-900 border border-amber-300/60 shadow-2xs">
                  <span>{greetingInfo.icon}</span>
                  <span className="capitalize font-black">{greetingInfo.greeting}, {adminUser?.adminId || 'Admin'}</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{greetingInfo.timeString} • {greetingInfo.timeZone} {greetingInfo.city ? `(${greetingInfo.city})` : ''}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Live Command Portal</span>
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Echaar Assessment Command Center
              </h1>
              <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center space-x-2">
                <span>Active Session: <strong className="text-slate-700 font-semibold">{adminUser?.adminId}</strong> ({adminUser?.roleName || 'System Administrator'})</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400 font-mono text-[11px]">256-Bit Encrypted</span>
              </p>
            </div>
          </div>

          {/* Action Toolbar - Precision Single-Row Layout */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Sync Button */}
            <button
              onClick={handleManualRefresh}
              disabled={isSyncingSheet}
              className="h-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow flex items-center space-x-2 transition disabled:opacity-50"
              title="Fetch fresh candidate submissions from Central Directory"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-100 ${isSyncingSheet ? 'animate-spin' : ''}`} />
              <span>{isSyncingSheet ? 'Syncing...' : 'Refresh Submissions'}</span>
            </button>

            {/* Export Button */}
            <button
              onClick={handleExportExcel}
              className="h-10 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow flex items-center space-x-2 transition"
            >
              <Download className="w-3.5 h-3.5 text-emerald-100" />
              <span>Export to Excel</span>
            </button>

            {/* Push to Cloud Button */}
            {candidates.length > 0 && (
              <button
                onClick={handlePushAllLocalToSheet}
                disabled={isPushingAll}
                className="h-10 px-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300/90 font-bold text-xs rounded-xl shadow-2xs hover:border-slate-400 flex items-center space-x-1.5 transition disabled:opacity-50"
                title="Upload all candidates to Central Directory"
              >
                <Upload className="w-3.5 h-3.5 text-slate-500" />
                <span>{isPushingAll ? 'Uploading...' : 'Push to Cloud'}</span>
              </button>
            )}

            {/* Clear Records Button */}
            {candidates.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear all candidate records from this dashboard?')) {
                    onClearAllResults();
                  }
                }}
                className="h-10 px-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/90 font-bold text-xs rounded-xl shadow-2xs flex items-center space-x-1.5 transition"
                title="Clear all stored candidate records"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                <span>Clear Records</span>
              </button>
            )}

            {candidates.length === 0 && (
              <button
                onClick={onSeedSampleData}
                className="h-10 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm flex items-center space-x-1.5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                <span>Load Sample Records</span>
              </button>
            )}
          </div>
        </div>

        {/* Sync Status Banner */}
        {syncNotice && (
          <div className="p-3 bg-blue-50/90 border border-blue-200 rounded-xl text-blue-900 text-xs font-semibold flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{syncNotice}</span>
            {lastSyncTime && (
              <span className="text-[10px] text-blue-600 font-mono ml-auto">Last sync: {lastSyncTime}</span>
            )}
          </div>
        )}

        {/* Central Directory Connection Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50/90 rounded-xl border border-slate-200/80 text-xs">
          <div className="flex items-center space-x-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-slate-800">Dynamic Central Directory Sync: Active</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Submissions from candidate devices are securely received and updated in real time.</span>
          </div>
          {lastSyncTime && (
            <span className="text-[11px] font-semibold text-slate-500">
              Last Synced: <strong className="text-slate-700">{lastSyncTime}</strong>
            </span>
          )}
        </div>

        {/* 4 KPI Metrics Cards with Material Glass Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-blue-300/80 transition group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Assessed</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{totalAssessed}</div>
            <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">Across 9 engineering tracks</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-indigo-300/80 transition group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">GET Candidates</span>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200/60 flex items-center justify-center font-bold">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight">{getCandidates.length}</div>
            <span className="text-[11px] text-indigo-700 font-medium mt-0.5 block">Multi-parameter mapped</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-emerald-300/80 transition group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Avg Tech Score</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-950 tracking-tight">
              {avgTechScore} <span className="text-xs font-semibold text-emerald-700">/ 15</span>
            </div>
            <span className="text-[11px] text-emerald-700 font-medium mt-0.5 block">Domain objective benchmark</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-amber-300/80 transition group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Proctoring Flags</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center font-bold">
                <ShieldAlert className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-950 tracking-tight">{flaggedCandidates.length}</div>
            <span className="text-[11px] text-amber-800 font-medium mt-0.5 block">Candidates with violations</span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 flex items-center space-x-1 overflow-x-auto shadow-2xs">
          {[
            { key: 'candidates', label: `Candidate Results (${candidates.length})`, icon: Users },
            { key: 'get_intelligence', label: `GET Placement Intelligence (${getCandidates.length})`, icon: GraduationCap },
            { key: 'questions', label: 'Question Bank Editor (270 Qs)', icon: Edit3 },
            { key: 'export_settings', label: 'Excel Export & Cloud Backup', icon: FileSpreadsheet }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg font-bold text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-blue-700 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: CANDIDATE RESULTS OVERVIEW TABLE */}
      {activeTab === 'candidates' && (
        <div className="bg-white/95 backdrop-blur-xl rounded-none sm:rounded-3xl border-x-0 sm:border border-y-0 sm:border-y border-slate-200/90 shadow-none sm:shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] overflow-hidden space-y-4 p-4 sm:p-6">
          
          {/* Table Filters & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-white/90 focus:outline-none"
                >
                  <option value="all">All Roles ({candidates.length})</option>
                  {ROLES.map(r => (
                    <option key={r.id} value={r.id}>{r.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 bg-white/90 focus:outline-none"
                >
                  <option value="all">All Statuses ({candidates.length})</option>
                  <option value="pending">Pending Evaluation</option>
                  <option value="reviewed">Evaluated & Decided</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search candidates by name, college, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-72 pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50/80 text-slate-600 font-bold uppercase tracking-wider border-y border-slate-200">
                  <th className="py-3.5 px-4">Candidate</th>
                  <th className="py-3.5 px-4">Role Selected</th>
                  <th className="py-3.5 px-4">Tech Score (15)</th>
                  <th className="py-3.5 px-4">General Alignment</th>
                  <th className="py-3.5 px-4">Problem-Solving (25)</th>
                  <th className="py-3.5 px-4">Proctoring Flags</th>
                  <th className="py-3.5 px-4">Decision / Status</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCandidates.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-slate-400">
                      No candidate test records found matching the filter.
                    </td>
                  </tr>
                ) : (
                  filteredCandidates.map((c) => {
                    const violationsCount = c.violations?.length || 0;
                    const psScore = c.problemSolvingScore ?? 'Pending Review';
                    const isPending = !c.adminReviewStatus || c.adminReviewStatus.toLowerCase().includes('pending');

                    return (
                      <tr key={c.id} className="hover:bg-blue-50/50 transition">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-xs shadow-xs flex-shrink-0">
                              {c.name ? c.name.charAt(0).toUpperCase() : 'C'}
                            </div>
                            <div>
                              <div className="font-extrabold text-slate-900 text-xs sm:text-sm">{c.name}</div>
                              <div className="text-[11px] text-slate-500">{c.email} • {c.college || 'N/A'}</div>
                            </div>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-800 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] inline-block">
                            {c.roleTitle || c.roleId}
                          </span>
                        </td>

                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-black text-xs">
                            {c.techScore} / 15
                          </span>
                        </td>

                        <td className="py-3.5 px-4 font-bold text-indigo-700">
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-200 text-xs font-bold">
                            {c.generalScore || 0}%
                          </span>
                        </td>

                        <td className="py-3.5 px-4 font-semibold text-amber-900">
                          {typeof psScore === 'number' ? (
                            <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                              {psScore} / 25
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">Pending</span>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          {violationsCount === 0 ? (
                            <span className="inline-flex items-center text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 mr-1" /> Clean
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-rose-700 font-bold text-[11px] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                              <AlertTriangle className="w-3 h-3 mr-1" /> {violationsCount} Flag(s)
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4">
                          {isPending ? (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold">
                              Pending Review
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                              {c.adminReviewStatus}
                            </span>
                          )}
                        </td>

                        <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                          {new Date(c.submittedAt || Date.now()).toLocaleDateString()}
                        </td>

                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => setSelectedCandidate(c)}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs inline-flex items-center space-x-1.5 transition"
                            >
                              <Eye className="w-3 h-3" />
                              <span>Grade & Decide</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to delete candidate "${c.name}" (${c.id})?`)) {
                                  onDeleteCandidate && onDeleteCandidate(c.id);
                                }
                              }}
                              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/90 font-bold text-xs rounded-xl shadow-2xs inline-flex items-center space-x-1 transition"
                              title={`Delete ${c.name}`}
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                              <span className="hidden sm:inline">Delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: GET PLACEMENT INTELLIGENCE */}
      {activeTab === 'get_intelligence' && (
        <div className="space-y-6">
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-2">
            <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Graduate Engineer Trainee (GET) Placement Intelligence</span>
            </h3>
            <p className="text-xs text-slate-500">
              Multi-parameter aptitude radar graph mapping each GET candidate's functional leanings and computed Top 3 Department placement recommendations.
            </p>
          </div>

          {getCandidates.length === 0 ? (
            <div className="bg-white/80 p-12 text-center rounded-2xl border border-slate-200 text-slate-400 text-xs">
              No GET candidate assessments completed yet. Take a test as a GET candidate to visualize placement analytics.
            </div>
          ) : (
            <div className="space-y-6">
              {getCandidates.map(c => (
                <div key={c.id} className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/70 pb-4 gap-2">
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900">{c.name}</h4>
                      <p className="text-xs text-slate-500">
                        {c.email} • {c.college || 'N/A'} • Tech Score: <strong>{c.techScore}/15</strong>
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedCandidate(c)}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto transition"
                    >
                      Open Complete Candidate Dossier
                    </button>
                  </div>

                  {c.getAnalysis && (
                    <GetParameterRadar analysis={c.getAnalysis} candidateName={c.name} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: QUESTION BANK EDITOR */}
      {activeTab === 'questions' && (
        <QuestionEditor
          questionsMap={questionsMap}
          onSaveQuestionsMap={onSaveQuestionsMap}
          onResetQuestionsMap={onResetQuestionsMap}
        />
      )}

      {/* TAB 4: EXPORT BACKUPS & GOOGLE SHEETS DIRECTORY */}
      {activeTab === 'export_settings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Results Excel Export */}
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-4">
            <div className="flex items-center space-x-3 text-emerald-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Download Assessment Results Excel</h4>
                <p className="text-xs text-slate-500">Multi-sheet comprehensive report (.xlsx)</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Generates a professionally structured Excel workbook containing 4 dedicated sheets:
              <strong> Candidate Summary</strong>, <strong>GET Placement Insights</strong>, <strong>Problem-Solving Answers</strong>, and <strong>Proctoring Audit Logs</strong>.
            </p>

            <button
              onClick={handleExportExcel}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-sm hover:shadow flex items-center justify-center space-x-2 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download Echaar_Assessment_Results.xlsx</span>
            </button>
          </div>

          {/* Card 2: Central Evaluation Cloud Architecture */}
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-4">
            <div className="flex items-center space-x-3 text-blue-900">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm">Central Database & Evaluation Architecture</h4>
                <p className="text-xs text-slate-500">Security Vault: Admin Directory & Live Candidate Submissions</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              When candidates complete the quiz, their responses and objective marks are automatically posted to the <strong>Central Directory</strong>. Evaluators can view submissions dynamically and record Problem-Solving evaluations (0-5) back in real time.
            </p>

            <div className="flex items-center space-x-2 pt-1">
              <button
                type="button"
                onClick={handleManualRefresh}
                disabled={isSyncingSheet}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncingSheet ? 'animate-spin' : ''}`} />
                <span>{isSyncingSheet ? 'Syncing...' : 'Sync Submissions'}</span>
              </button>

              <button
                type="button"
                onClick={handlePushAllLocalToSheet}
                disabled={isPushingAll || candidates.length === 0}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition disabled:opacity-50"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{isPushingAll ? 'Uploading...' : 'Push All to Central Directory'}</span>
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Cloud Endpoint Integration Script:</span>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_TEMPLATE);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-bold flex items-center space-x-1"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Script'}</span>
                </button>
              </div>

              <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-[10px] overflow-x-auto max-h-36 border border-slate-800">
                {GOOGLE_APPS_SCRIPT_TEMPLATE}
              </pre>
            </div>
          </div>

          {/* Card 3: Clear Data / Factory Reset */}
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] space-y-4 md:col-span-2">
            <h4 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2 text-rose-700">
              <Trash2 className="w-4 h-4" />
              <span>Assessment Results Storage Maintenance</span>
            </h4>
            <p className="text-xs text-slate-600">
              Clear all candidate records currently stored in obfuscated browser storage (e.g. for testing a fresh recruitment drive).
            </p>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete all stored candidate test results?')) {
                    onClearAllResults();
                  }
                }}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 font-bold text-xs rounded-xl transition"
              >
                Clear All Candidate Results
              </button>
              <button
                onClick={onSeedSampleData}
                className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs rounded-xl shadow-xs transition"
              >
                Populate Diverse Sample Candidates (Demo)
              </button>
            </div>
          </div>

        </div>
      )}

      {/* DETAILED CANDIDATE DOSSIER MODAL */}
      {selectedCandidate && (
        <CandidateReportModal
          candidate={selectedCandidate}
          questions={questionsMap[selectedCandidate.roleId] || []}
          onClose={() => setSelectedCandidate(null)}
          onSaveEvaluation={async (candId, psScores, psNotes, reviewStatus) => {
            const res = await onUpdateCandidateEvaluation(candId, psScores, psNotes, reviewStatus);
            setSelectedCandidate(prev => ({
              ...prev,
              problemSolvingAnswers: {
                ...(prev.problemSolvingAnswers || {}),
                ...Object.fromEntries(
                  Object.entries(psScores).map(([qId, s]) => [
                    qId,
                    { ...(prev.problemSolvingAnswers?.[qId] || {}), adminScore: s, adminNotes: psNotes[qId] || '' }
                  ])
                )
              },
              problemSolvingScore: Object.values(psScores).reduce((a, b) => a + b, 0),
              adminReviewStatus: reviewStatus,
              adminEvaluatorNotes: psNotes?._general || prev.adminEvaluatorNotes
            }));
            return res;
          }}
        />
      )}

    </div>
  );
}
