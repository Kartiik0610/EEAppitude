import React, { useState } from 'react';
import { 
  ROLES, 
  GET_DEPARTMENTS 
} from '../data/roles';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Search, 
  CheckCircle, 
  Save, 
  X, 
  FileSpreadsheet, 
  Download,
  Upload,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import * as XLSX from 'xlsx';

export default function QuestionEditor({
  questionsMap,
  onSaveQuestionsMap,
  onResetQuestionsMap
}) {
  const [selectedRoleId, setSelectedRoleId] = useState('get');
  const [selectedSection, setSelectedSection] = useState('all'); // 'all' | 'general' | 'field' | 'problem_solving'
  const [searchQuery, setSearchQuery] = useState('');
  const [editingQuestion, setEditingQuestion] = useState(null); // null or question object
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const currentQuestions = questionsMap[selectedRoleId] || [];
  const selectedRole = ROLES.find(r => r.id === selectedRoleId) || ROLES[0];
  const isGET = selectedRoleId === 'get';

  // Filter questions
  const filteredQuestions = currentQuestions.filter(q => {
    const matchesSection = selectedSection === 'all' || q.section === selectedSection;
    const matchesSearch = !searchQuery || 
      q.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.scenario?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  const handleEditClick = (q) => {
    setIsNewQuestion(false);
    setEditingQuestion({
      ...q,
      options: q.options ? JSON.parse(JSON.stringify(q.options)) : [
        { text: '' }, { text: '' }, { text: '' }, { text: '' }
      ],
      weights: q.weights ? { ...q.weights } : { design: 0.5, production: 0.5, ppc: 0.5, quality: 0.5, tech_marketing: 0.5 }
    });
  };

  const handleAddNewClick = () => {
    setIsNewQuestion(true);
    setEditingQuestion({
      id: `${selectedRoleId}_custom_${Date.now()}`,
      roleId: selectedRoleId,
      section: selectedSection === 'all' ? 'field' : selectedSection,
      type: selectedSection === 'general' ? 'behavioral' : selectedSection === 'problem_solving' ? 'scenario' : 'objective',
      title: 'New Custom Engineering Question',
      question: '',
      scenario: selectedSection === 'problem_solving' ? 'Describe the practical industrial scenario here...' : '',
      options: [
        { text: 'Option A' },
        { text: 'Option B' },
        { text: 'Option C' },
        { text: 'Option D' }
      ],
      correctAnswer: 0,
      weights: { design: 0.5, production: 0.5, ppc: 0.5, quality: 0.5, tech_marketing: 0.5 }
    });
  };

  const handleDeleteClick = (qId) => {
    if (confirm('Are you sure you want to delete this question from the bank?')) {
      const updatedList = currentQuestions.filter(q => q.id !== qId);
      const updatedMap = {
        ...questionsMap,
        [selectedRoleId]: updatedList
      };
      onSaveQuestionsMap(updatedMap);
      setStatusMsg('Question deleted successfully.');
      setTimeout(() => setStatusMsg(''), 3000);
    }
  };

  const handleSaveModal = (e) => {
    e.preventDefault();
    if (!editingQuestion.title.trim() || !editingQuestion.question.trim()) {
      alert('Please fill out the question title and prompt text.');
      return;
    }

    let updatedList = [...currentQuestions];
    if (isNewQuestion) {
      updatedList.push(editingQuestion);
    } else {
      updatedList = updatedList.map(q => q.id === editingQuestion.id ? editingQuestion : q);
    }

    const updatedMap = {
      ...questionsMap,
      [selectedRoleId]: updatedList
    };

    onSaveQuestionsMap(updatedMap);
    setEditingQuestion(null);
    setStatusMsg(`Question "${editingQuestion.title}" saved persistently.`);
    setTimeout(() => setStatusMsg(''), 3000);
  };

  // Export questions to Excel
  const handleExportQuestionsExcel = () => {
    const wb = XLSX.utils.book_new();

    ROLES.forEach(r => {
      const list = questionsMap[r.id] || [];
      const rows = list.map((q, idx) => ({
        'ID': q.id,
        'No': idx + 1,
        'Section': q.section,
        'Title': q.title,
        'Question Prompt': q.question,
        'Scenario': q.scenario || '',
        'Option A': q.options?.[0]?.text || '',
        'Option B': q.options?.[1]?.text || '',
        'Option C': q.options?.[2]?.text || '',
        'Option D': q.options?.[3]?.text || '',
        'Correct Option (0-3)': q.correctAnswer ?? '',
        'Design Weight': q.weights?.design ?? '',
        'Production Weight': q.weights?.production ?? '',
        'PPC Weight': q.weights?.ppc ?? '',
        'Quality Weight': q.weights?.quality ?? '',
        'Marketing Weight': q.weights?.tech_marketing ?? ''
      }));

      const ws = XLSX.utils.json_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, r.shortCode);
    });

    XLSX.writeFile(wb, `Echaar_Question_Bank_${selectedRoleId.toUpperCase()}.xlsx`);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controller Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-none sm:rounded-2xl shadow-none sm:shadow-sm border-x-0 sm:border border-y-0 sm:border-y border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight">
              Question Bank Manager
            </h3>
            <p className="text-xs text-slate-500">
              Add, edit, or configure questions, correct keys, and GET departmental weights across all 9 roles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAddNewClick}
              className="px-4 py-2 bg-industrial-900 hover:bg-industrial-800 text-white font-bold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Add New Question</span>
            </button>

            <button
              onClick={handleExportQuestionsExcel}
              className="px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl shadow-xs flex items-center space-x-1.5 transition"
              title="Download Questions as Excel"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Export Bank (.xlsx)</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Reset question bank back to factory defaults for all roles?')) {
                  onResetQuestionsMap();
                  setStatusMsg('Question bank reset to factory defaults.');
                  setTimeout(() => setStatusMsg(''), 3000);
                }
              }}
              className="px-3 py-2 text-rose-600 hover:bg-rose-50 border border-rose-200 font-semibold text-xs rounded-xl transition"
              title="Reset questions to original default"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1 inline" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {statusMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{statusMsg}</span>
          </div>
        )}

        {/* Role Selector Tabs (Horizontal Scroll) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {ROLES.map(role => (
            <button
              key={role.id}
              onClick={() => {
                setSelectedRoleId(role.id);
                setSelectedSection('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center space-x-1.5 ${
                selectedRoleId === role.id
                  ? 'bg-industrial-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <span>{role.shortCode}</span>
              <span className="font-normal opacity-80">({questionsMap[role.id]?.length || 0})</span>
            </button>
          ))}
        </div>

        {/* Section Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center space-x-1.5">
            {[
              { key: 'all', label: 'All Sections' },
              { key: 'general', label: 'General (10 Qs)' },
              { key: 'field', label: 'Field Tech (15 Qs)' },
              { key: 'problem_solving', label: 'Scenarios (5 Qs)' }
            ].map(sec => (
              <button
                key={sec.key}
                onClick={() => setSelectedSection(sec.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedSection === sec.key
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search in questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-9 pr-3.5 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-industrial-800"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-500 text-xs">
            No questions found matching your filter/search criteria.
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isObjective = q.section === 'field';
            const isScenario = q.section === 'problem_solving';

            return (
              <div
                key={q.id}
                className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 hover:border-slate-300 transition space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 border text-slate-700 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                      q.section === 'general'
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : q.section === 'field'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {q.section}
                    </span>
                    <h4 className="font-extrabold text-sm text-slate-900">
                      {q.title}
                    </h4>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => handleEditClick(q)}
                      className="p-1.5 text-slate-500 hover:text-industrial-900 hover:bg-slate-100 rounded-lg transition"
                      title="Edit Question"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(q.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Delete Question"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Scenario text if present */}
                {q.scenario && (
                  <p className="text-xs text-amber-900 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 font-medium">
                    <strong>Scenario:</strong> {q.scenario}
                  </p>
                )}

                {/* Question Prompt */}
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {q.question}
                </p>

                {/* Options display */}
                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = isObjective && q.correctAnswer === optIdx;
                      const letter = String.fromCharCode(65 + optIdx);

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border text-[11px] flex items-start space-x-2 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                              : 'bg-slate-50/70 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded text-[10px] font-bold flex items-center justify-center flex-shrink-0 ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}>
                            {letter}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* GET Weights Badge if role is GET */}
                {isGET && q.weights && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                    <span className="font-bold text-slate-400">Department Weights:</span>
                    {Object.entries(q.weights).map(([dKey, weight]) => (
                      <span key={dKey} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {dKey}: {weight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* EDIT / ADD MODAL */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-industrial-900 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
              <h3 className="font-black text-base text-white">
                {isNewQuestion ? 'Add New Question' : 'Edit Question Details'}
              </h3>
              <button
                onClick={() => setEditingQuestion(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSaveModal} className="p-6 space-y-4 overflow-y-auto flex-1 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Question Title</label>
                  <input
                    type="text"
                    required
                    value={editingQuestion.title}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, title: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-industrial-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Section Type</label>
                  <select
                    value={editingQuestion.section}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, section: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs bg-white"
                  >
                    <option value="general">Part 1: General (Behavioral / Trait)</option>
                    <option value="field">Part 2: Field Domain (Objective)</option>
                    <option value="problem_solving">Part 3: Real-Life Problem Solving</option>
                  </select>
                </div>
              </div>

              {editingQuestion.section === 'problem_solving' && (
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Scenario Description</label>
                  <textarea
                    rows={3}
                    value={editingQuestion.scenario || ''}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, scenario: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs"
                    placeholder="Enter industrial machinery scenario context..."
                  />
                </div>
              )}

              <div>
                <label className="block font-bold text-slate-700 mb-1">Question Prompt</label>
                <textarea
                  rows={3}
                  required
                  value={editingQuestion.question}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs"
                />
              </div>

              {/* Options */}
              <div className="space-y-2 pt-2 border-t">
                <label className="block font-bold text-slate-700">Options (A, B, C, D)</label>
                {editingQuestion.options?.map((opt, oIdx) => (
                  <div key={oIdx} className="flex items-center space-x-2">
                    <span className="w-5 font-bold text-slate-500">{String.fromCharCode(65 + oIdx)}:</span>
                    <input
                      type="text"
                      required
                      value={opt.text}
                      onChange={(e) => {
                        const newOpts = [...editingQuestion.options];
                        newOpts[oIdx].text = e.target.value;
                        setEditingQuestion({ ...editingQuestion, options: newOpts });
                      }}
                      className="flex-1 p-2 rounded-lg border border-slate-300 text-slate-800 text-xs"
                    />
                  </div>
                ))}
              </div>

              {/* Correct Answer Selection for Field Questions */}
              {editingQuestion.section === 'field' && (
                <div className="pt-2 border-t">
                  <label className="block font-bold text-slate-700 mb-1">Correct Answer Key</label>
                  <select
                    value={editingQuestion.correctAnswer ?? 0}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, correctAnswer: Number(e.target.value) })}
                    className="w-full sm:w-48 p-2 rounded-lg border border-slate-300 text-slate-800 text-xs bg-white"
                  >
                    <option value={0}>Option A</option>
                    <option value={1}>Option B</option>
                    <option value={2}>Option C</option>
                    <option value={3}>Option D</option>
                  </select>
                </div>
              )}

              {/* GET Department Weights if role is GET */}
              {isGET && (
                <div className="pt-2 border-t space-y-2">
                  <label className="block font-bold text-slate-700">GET Department Parameter Weights (0.0 to 1.0)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                    {['design', 'production', 'ppc', 'quality', 'tech_marketing'].map(dKey => (
                      <div key={dKey}>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">{dKey}</span>
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="1"
                          value={editingQuestion.weights?.[dKey] ?? 0.5}
                          onChange={(e) => {
                            const newWeights = { ...(editingQuestion.weights || {}) };
                            newWeights[dKey] = parseFloat(e.target.value) || 0;
                            setEditingQuestion({ ...editingQuestion, weights: newWeights });
                          }}
                          className="w-full p-1.5 rounded border border-slate-300 text-xs font-mono"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditingQuestion(null)}
                  className="px-4 py-2 border rounded-xl font-bold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-industrial-900 hover:bg-industrial-800 text-white font-bold rounded-xl shadow-xs"
                >
                  Save Question
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
