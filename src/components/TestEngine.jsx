import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  RotateCcw, 
  CheckCircle, 
  AlertCircle,
  HelpCircle,
  Cpu,
  Layers,
  Send,
  Grid,
  X
} from 'lucide-react';

export default function TestEngine({
  candidate,
  questions,
  answers,
  onAnswerChange,
  onProblemSolvingChange,
  onSubmitTest,
  currentIndex,
  onNavigateQuestion
}) {
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState(false);

  const currentQ = questions[currentIndex] || questions[0];
  const totalCount = questions.length;

  const toggleFlag = (idx) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const getSectionBadge = (section) => {
    switch (section) {
      case 'general':
        return { label: 'Part 1: General & Behavioral', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'field':
        return { label: 'Part 2: Field Domain Tech', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'problem_solving':
        return { label: 'Part 3: Real-Life Problem Solving', color: 'bg-amber-50 text-amber-800 border-amber-200' };
      default:
        return { label: 'Question', color: 'bg-slate-50 text-slate-800 border-slate-200' };
    }
  };

  const badge = getSectionBadge(currentQ.section);

  const isQuestionAnswered = (q, idx) => {
    if (q.section === 'general') {
      return answers.general[q.id] !== undefined;
    } else if (q.section === 'field') {
      return answers.field[q.id] !== undefined;
    } else if (q.section === 'problem_solving') {
      const ps = answers.problemSolving[q.id];
      return ps && (ps.selectedOption !== undefined || (ps.textResponse && ps.textResponse.trim().length > 0));
    }
    return false;
  };

  let answeredCount = 0;
  questions.forEach((q, idx) => {
    if (isQuestionAnswered(q, idx)) answeredCount++;
  });
  const unansweredCount = totalCount - answeredCount;

  let currentSelection = undefined;
  let currentTextResponse = '';

  if (currentQ.section === 'general') {
    currentSelection = answers.general[currentQ.id];
  } else if (currentQ.section === 'field') {
    currentSelection = answers.field[currentQ.id];
  } else if (currentQ.section === 'problem_solving') {
    const ps = answers.problemSolving[currentQ.id] || {};
    currentSelection = ps.selectedOption;
    currentTextResponse = ps.textResponse || '';
  }

  const handleOptionSelect = (optionIndex) => {
    if (currentQ.section === 'general') {
      onAnswerChange('general', currentQ.id, optionIndex);
    } else if (currentQ.section === 'field') {
      onAnswerChange('field', currentQ.id, optionIndex);
    } else if (currentQ.section === 'problem_solving') {
      onProblemSolvingChange(currentQ.id, {
        selectedOption: optionIndex,
        selectedOptionText: currentQ.options[optionIndex]?.text || '',
        textResponse: currentTextResponse,
        title: currentQ.title
      });
    }
  };

  const handleTextChange = (text) => {
    if (currentQ.section === 'problem_solving') {
      onProblemSolvingChange(currentQ.id, {
        selectedOption: currentSelection,
        selectedOptionText: currentSelection !== undefined ? currentQ.options[currentSelection]?.text : '',
        textResponse: text,
        title: currentQ.title
      });
    }
  };

  const clearCurrentResponse = () => {
    if (currentQ.section === 'general') {
      onAnswerChange('general', currentQ.id, undefined);
    } else if (currentQ.section === 'field') {
      onAnswerChange('field', currentQ.id, undefined);
    } else if (currentQ.section === 'problem_solving') {
      onProblemSolvingChange(currentQ.id, {
        selectedOption: undefined,
        selectedOptionText: '',
        textResponse: '',
        title: currentQ.title
      });
    }
  };

  // Reusable Question Palette Component
  const renderPaletteGrid = () => (
    <div className="space-y-4">
      {/* Legend */}
      <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>Answered</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300"></span>
          <span>Unanswered</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span>Marked Review</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          <span>Current Active</span>
        </div>
      </div>

      {/* Grid Sections */}
      <div className="space-y-3">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            General Questions (1-10)
          </span>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.slice(0, 10).map((q, idx) => {
              const answered = isQuestionAnswered(q, idx);
              const isFlagged = flaggedQuestions[idx];
              const isCurrent = currentIndex === idx;

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigateQuestion(idx);
                    setMobilePaletteOpen(false);
                  }}
                  className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative touch-manipulation ${
                    isCurrent
                      ? 'ring-2 ring-blue-600 bg-blue-600 text-white shadow-md'
                      : isFlagged
                      ? 'bg-amber-100 border border-amber-300 text-amber-900 font-extrabold'
                      : answered
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlagged && !isCurrent && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Field Domain (11-25)
          </span>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.slice(10, 25).map((q, idxRel) => {
              const idx = 10 + idxRel;
              const answered = isQuestionAnswered(q, idx);
              const isFlagged = flaggedQuestions[idx];
              const isCurrent = currentIndex === idx;

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigateQuestion(idx);
                    setMobilePaletteOpen(false);
                  }}
                  className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative touch-manipulation ${
                    isCurrent
                      ? 'ring-2 ring-blue-600 bg-blue-600 text-white shadow-md'
                      : isFlagged
                      ? 'bg-amber-100 border border-amber-300 text-amber-900 font-extrabold'
                      : answered
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlagged && !isCurrent && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Scenarios (26-30)
          </span>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.slice(25, 30).map((q, idxRel) => {
              const idx = 25 + idxRel;
              const answered = isQuestionAnswered(q, idx);
              const isFlagged = flaggedQuestions[idx];
              const isCurrent = currentIndex === idx;

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onNavigateQuestion(idx);
                    setMobilePaletteOpen(false);
                  }}
                  className={`h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative touch-manipulation ${
                    isCurrent
                      ? 'ring-2 ring-blue-600 bg-blue-600 text-white shadow-md'
                      : isFlagged
                      ? 'bg-amber-100 border border-amber-300 text-amber-900 font-extrabold'
                      : answered
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {idx + 1}
                  {isFlagged && !isCurrent && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full sm:w-[94%] lg:w-[90%] max-w-[1700px] mx-auto px-0 sm:px-4 py-0 sm:py-6 space-y-2 sm:space-y-6">
      
      {/* Top Test Banner Card */}
      <div className="glass-panel-elevated rounded-none sm:rounded-3xl border-x-0 sm:border border-t-0 sm:border-t border-b border-white/80 p-3.5 sm:p-5 shadow-none sm:shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md flex-shrink-0">
            {currentIndex + 1}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${badge.color}`}>
                {badge.label}
              </span>
              {currentQ.section === 'general' && (
                <span className="text-[10px] text-slate-500 font-medium">Trait Alignment</span>
              )}
              {currentQ.section === 'field' && (
                <span className="text-[10px] text-emerald-700 font-bold">1 Mark • Auto</span>
              )}
              {currentQ.section === 'problem_solving' && (
                <span className="text-[10px] text-amber-700 font-bold">Admin Graded</span>
              )}
            </div>
            <h2 className="text-sm sm:text-lg font-black text-slate-900 mt-1 truncate">
              {currentQ.title}
            </h2>
          </div>
        </div>

        {/* Action Pills: Flag & Mobile Palette Toggle */}
        <div className="flex items-center space-x-2 self-end sm:self-auto w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0">
          
          {/* Mobile Quick Palette Button (Visible only on mobile screens) */}
          <button
            onClick={() => setMobilePaletteOpen(true)}
            className="lg:hidden flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Palette ({answeredCount}/{totalCount})</span>
          </button>

          {/* Mark for review button */}
          <button
            onClick={() => toggleFlag(currentIndex)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition backdrop-blur-md ${
              flaggedQuestions[currentIndex]
                ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-white'
            }`}
          >
            <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentIndex] ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">{flaggedQuestions[currentIndex] ? 'Flagged for Review' : 'Mark for Review'}</span>
            <span className="sm:hidden">{flaggedQuestions[currentIndex] ? 'Flagged' : 'Flag'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Question Content + Desktop Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left Column: Question Content */}
        <div className="lg:col-span-8 glass-panel-elevated rounded-none sm:rounded-3xl shadow-none sm:shadow-sm border-x-0 sm:border border-white/80 p-4 sm:p-8 space-y-5 sm:space-y-6">
          
          {/* Scenario Context if Problem-Solving */}
          {currentQ.scenario && (
            <div className="p-3.5 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 space-y-1 backdrop-blur-md">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>Equipment Scenario Case:</span>
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-amber-900 font-medium">
                {currentQ.scenario}
              </p>
            </div>
          )}

          {/* Question Text */}
          <div className="space-y-1">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Question Prompt
            </span>
            <p className="text-sm sm:text-lg text-slate-900 font-semibold leading-relaxed">
              {currentQ.question}
            </p>
          </div>

          {/* Multiple Choice Options (Mobile Optimized Tap Targets) */}
          {currentQ.options && currentQ.options.length > 0 && (
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {currentQ.section === 'problem_solving' ? 'Proposed Strategy / Approach:' : 'Select Option:'}
              </span>

              {currentQ.options.map((option, optIdx) => {
                const isSelected = currentSelection === optIdx;
                const optLetter = String.fromCharCode(65 + optIdx);

                return (
                  <div
                    key={optIdx}
                    onClick={() => handleOptionSelect(optIdx)}
                    className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 touch-manipulation ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/80 shadow-sm ring-1 ring-blue-600 backdrop-blur-md'
                        : 'border-slate-200/90 hover:border-slate-300 hover:bg-white bg-white/60 backdrop-blur-sm'
                    }`}
                  >
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 border border-slate-300'
                    }`}>
                      {optLetter}
                    </div>

                    <div className="flex-1 text-xs sm:text-sm text-slate-800 font-medium pt-0.5 leading-snug">
                      {option.text}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Candidate Written Reasoning for Real-Life Problem-Solving */}
          {currentQ.section === 'problem_solving' && (
            <div className="pt-3 border-t border-slate-200/80 space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Candidate Analytical Rationale & Troubleshooting Strategy:
              </label>
              <textarea
                rows={3}
                value={currentTextResponse}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Write your step-by-step engineering reasoning and action plan here..."
                className="w-full p-3 text-xs sm:text-sm rounded-xl glass-input text-slate-800 focus:outline-none transition"
              />
            </div>
          )}

          {/* Navigation Buttons (Thumb-Friendly on Phones) */}
          <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-200/80">
            <div className="flex items-center space-x-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => onNavigateQuestion(currentIndex - 1)}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center space-x-1 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <button
                onClick={clearCurrentResponse}
                className="px-2.5 sm:px-3 py-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center space-x-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {currentIndex < totalCount - 1 ? (
                <button
                  onClick={() => onNavigateQuestion(currentIndex + 1)}
                  className="px-5 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center space-x-1.5 transition"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="px-5 sm:px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 flex items-center space-x-1.5 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Question Palette (Desktop view) */}
        <div className="hidden lg:block lg:col-span-4 space-y-5">
          <div className="glass-panel-elevated rounded-3xl shadow-sm border border-white/80 p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">
                Question Palette
              </h3>
              <span className="text-xs font-semibold text-blue-600 font-mono">
                {answeredCount} / {totalCount} Done
              </span>
            </div>

            {renderPaletteGrid()}

            <div className="pt-3 border-t border-slate-200/80">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center space-x-2 transition"
              >
                <CheckCircle className="w-4 h-4 text-emerald-300" />
                <span>Submit Assessment</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Slide-Up Question Palette Sheet */}
      {mobilePaletteOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex flex-col justify-end p-2 animate-in fade-in">
          <div className="bg-white rounded-t-3xl rounded-b-2xl p-5 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center space-x-2">
                <Grid className="w-4 h-4 text-blue-600" />
                <h3 className="font-extrabold text-sm text-slate-900">Question Palette</h3>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold text-blue-600 font-mono">{answeredCount}/{totalCount}</span>
                <button
                  onClick={() => setMobilePaletteOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {renderPaletteGrid()}

            <button
              onClick={() => {
                setMobilePaletteOpen(false);
                setShowSubmitModal(true);
              }}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-xs"
            >
              Finish & Review Submission
            </button>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 sm:p-7 space-y-5">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                Submit Assessment?
              </h3>
              <p className="text-xs text-slate-500">
                Confirm your test submission. Once confirmed, answers cannot be modified.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="text-emerald-700 font-bold block mb-0.5">Answered</span>
                <span className="text-lg font-black text-emerald-900">{answeredCount} of {totalCount}</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                <span className="text-amber-700 font-bold block mb-0.5">Unanswered</span>
                <span className="text-lg font-black text-amber-900">{unansweredCount}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 pt-1">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
              >
                Back to Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  onSubmitTest();
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md transition"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
