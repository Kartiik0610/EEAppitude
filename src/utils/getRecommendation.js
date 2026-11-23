/**
 * Echaar Equipments - GET Multi-Parameter Inclination & Department Placement Engine
 */

export const GET_DEPARTMENTS_CONFIG = {
  design: {
    key: 'design',
    title: 'Design Engineer',
    department: 'Research & Design (R&D)',
    color: '#0284C7', // Sky Blue
    accentBg: 'bg-sky-50 text-sky-700 border-sky-200',
    coreFocus: 'CAD/FEA, kinematics, precision mechanism design, machine tolerances and flexo cylinder engineering.',
    keywords: ['CAD', 'Kinematics', 'FEA', 'GD&T', 'Stress Analysis', 'Mechanisms']
  },
  production: {
    key: 'production',
    title: 'Production Engineer',
    department: 'Manufacturing & Assembly',
    color: '#059669', // Emerald Green
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    coreFocus: 'Shop-floor execution, heavy CNC machining, assembly line coordination, tooling and cycle time reduction.',
    keywords: ['Shopfloor', 'CNC', 'Assembly', 'Tooling', 'Kaizen', 'Cycle Time']
  },
  ppc: {
    key: 'ppc',
    title: 'Production Planning Engineer',
    department: 'Production Planning & Control (PPC)',
    color: '#D97706', // Amber
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200',
    coreFocus: 'BOM explosion, ERP routing, lead time management, raw material scheduling and machine capacity optimization.',
    keywords: ['BOM', 'ERP', 'Scheduling', 'Inventory', 'Capacity', 'Lead Time']
  },
  quality: {
    key: 'quality',
    title: 'Quality Engineer',
    department: 'Quality Assurance & Control (QA/QC)',
    color: '#E11D48', // Rose Red
    accentBg: 'bg-rose-50 text-rose-700 border-rose-200',
    coreFocus: 'Precision metrology, CMM verification, run-out limits, ISO 9001 compliance, 8D problem solving, and zero-defect QA.',
    keywords: ['Metrology', 'CMM', 'ISO 9001', '8D Root Cause', 'Tolerances', 'SPC']
  },
  tech_marketing: {
    key: 'tech_marketing',
    title: 'Technical Marketing Engineer',
    department: 'Sales & Application Engineering',
    color: '#7C3AED', // Purple
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    coreFocus: 'Client consultative selling, technical proposal engineering for CI flexo presses, ROI modeling, and customer application matching.',
    keywords: ['Application Engg', 'Client RFQ', 'Commercial Proposals', 'ROI', 'Customer Focus']
  }
};

/**
 * Calculates GET candidate parameter graph and Top 3 Department recommendations
 * @param {Array} questions - Array of 30 GET questions
 * @param {Object} generalAnswers - { [qId]: optionIndex }
 * @param {Object} fieldAnswers - { [qId]: optionIndex }
 * @param {Object} problemSolvingAnswers - { [qId]: { selectedOption, textResponse } }
 */
export function calculateGetInclination(questions, generalAnswers, fieldAnswers, problemSolvingAnswers) {
  const scores = {
    design: 0,
    production: 0,
    ppc: 0,
    quality: 0,
    tech_marketing: 0
  };

  const maxPoints = {
    design: 0,
    production: 0,
    ppc: 0,
    quality: 0,
    tech_marketing: 0
  };

  questions.forEach(q => {
    const weights = q.weights || {};

    // Track maximum possible points for each parameter
    Object.entries(weights).forEach(([dept, weight]) => {
      if (maxPoints[dept] !== undefined) {
        maxPoints[dept] += weight * (q.maxScore || 1);
      }
    });

    if (q.section === 'general') {
      const selectedIndex = generalAnswers[q.id];
      if (selectedIndex !== undefined && q.options && q.options[selectedIndex]) {
        const option = q.options[selectedIndex];
        // General options have trait weights
        const optWeights = option.weights || weights;
        Object.entries(optWeights).forEach(([dept, weight]) => {
          if (scores[dept] !== undefined) {
            scores[dept] += (weight || 0) * (option.scoreMultiplier || 1);
          }
        });
      }
    } else if (q.section === 'field') {
      const selectedIndex = fieldAnswers[q.id];
      const isCorrect = selectedIndex !== undefined && selectedIndex === q.correctAnswer;
      if (isCorrect) {
        Object.entries(weights).forEach(([dept, weight]) => {
          if (scores[dept] !== undefined) {
            scores[dept] += weight;
          }
        });
      } else if (selectedIndex !== undefined) {
        // Minor partial credit if related domain answer
        Object.entries(weights).forEach(([dept, weight]) => {
          if (scores[dept] !== undefined) {
            scores[dept] += weight * 0.15;
          }
        });
      }
    } else if (q.section === 'problem_solving') {
      const psAns = problemSolvingAnswers[q.id];
      if (psAns && psAns.selectedOption !== undefined && q.options && q.options[psAns.selectedOption]) {
        const opt = q.options[psAns.selectedOption];
        const optWeights = opt.weights || weights;
        const multiplier = opt.effectivenessScore || 0.8;
        Object.entries(optWeights).forEach(([dept, weight]) => {
          if (scores[dept] !== undefined) {
            scores[dept] += (weight || 0) * multiplier;
          }
        });
      }
    }
  });

  // Calculate normalized percentage scores (bounded 20% to 98% to represent balanced engineering profile)
  const percentages = {};
  Object.keys(scores).forEach(dept => {
    const max = maxPoints[dept] || 1;
    const rawRatio = scores[dept] / max;
    // Map with realistic engineering baseline
    const normalized = Math.min(98, Math.max(25, Math.round(rawRatio * 100)));
    percentages[dept] = normalized;
  });

  // Rank departments by score
  const ranked = Object.entries(percentages)
    .map(([key, score]) => ({
      key,
      score,
      ...GET_DEPARTMENTS_CONFIG[key]
    }))
    .sort((a, b) => b.score - a.score);

  // Generate customized rationale for top 3
  const topDepartments = ranked.slice(0, 3).map((dept, idx) => {
    let rationale = '';
    const rankLabel = idx === 0 ? 'Primary Recommended Track' : idx === 1 ? 'Secondary Track' : 'Alternative Track';
    
    if (dept.key === 'design') {
      rationale = `Demonstrated superior spatial visualization, CAD mechanism appreciation, and high precision tolerance reasoning. Best suited for R&D on high-speed flexo press engineering and custom tooling.`;
    } else if (dept.key === 'production') {
      rationale = `Exhibited strong hands-on manufacturing instincts, machining process comprehension, and practical problem-solving under assembly line constraints. Excellent fit for CNC machine shop floor and assembly management.`;
    } else if (dept.key === 'ppc') {
      rationale = `Strong analytical focus on workflow sequencing, bill-of-materials optimization, and bottleneck mitigation. Ideal for ERP-driven production scheduling and material planning.`;
    } else if (dept.key === 'quality') {
      rationale = `Exceptional attention to metrological precision, geometric tolerances (GD&T), and systematic root-cause methodology (8D/Fishbone). Strong placement in precision inspection and ISO 9001 quality audits.`;
    } else if (dept.key === 'tech_marketing') {
      rationale = `High technical articulation combined with customer requirement analysis and value-proposition thinking. Ideal for technical proposal generation and client consultative capital machinery sales.`;
    }

    return {
      ...dept,
      rank: idx + 1,
      rankLabel,
      rationale
    };
  });

  return {
    parameters: percentages,
    rawScores: scores,
    maxPoints,
    topDepartments,
    dominantTrait: topDepartments[0]?.title || 'General Engineering Trainee'
  };
}
