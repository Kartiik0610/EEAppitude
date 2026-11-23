import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import { 
  Award, 
  Sparkles, 
  BarChart3, 
  Radar as RadarIcon,
  CheckCircle2,
  TrendingUp,
  Target,
  Layers,
  ArrowUpRight
} from 'lucide-react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function GetParameterRadar({ analysis, candidateName = 'Candidate' }) {
  if (!analysis || !analysis.parameters) return null;

  const { parameters, topDepartments } = analysis;

  // Multi-line labels formatted to guarantee zero clipping on mobile screens
  const radarLabels = [
    ['Design', 'Engineering'],
    ['Production', '& Mfg.'],
    ['Planning', '(PPC)'],
    ['Quality', '(QA/QC)'],
    ['Marketing', '& Sales']
  ];

  const dataValues = [
    parameters.design || 0,
    parameters.production || 0,
    parameters.ppc || 0,
    parameters.quality || 0,
    parameters.tech_marketing || 0
  ];

  // Radar Chart Configuration (Industrial Precision Palette)
  const radarData = {
    labels: radarLabels,
    datasets: [
      {
        label: 'Candidate Aptitude Trait Match (%)',
        data: dataValues,
        backgroundColor: 'rgba(37, 99, 235, 0.22)', // Royal blue fill
        borderColor: '#1D4ED8',
        borderWidth: 3,
        pointBackgroundColor: '#F59E0B', // Amber accent
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2.5,
        pointHoverBackgroundColor: '#FFFFFF',
        pointHoverBorderColor: '#D97706',
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 15,
        bottom: 15,
        left: 20,
        right: 20
      }
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(148, 163, 184, 0.35)',
          lineWidth: 1
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.25)',
          circular: true
        },
        pointLabels: {
          font: {
            size: 11,
            family: 'Inter, system-ui, sans-serif',
            weight: '700'
          },
          color: '#0F172A',
          padding: 8
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          font: { 
            size: 10,
            family: 'Inter, sans-serif',
            weight: '600'
          },
          color: '#64748B'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 12,
        callbacks: {
          title: (items) => {
            const fullNames = [
              'Design Engineering',
              'Production & Manufacturing',
              'Production Planning & Control (PPC)',
              'Quality Assurance (QA/QC)',
              'Technical Marketing & Sales'
            ];
            return fullNames[items[0]?.dataIndex] || (Array.isArray(items[0]?.label) ? items[0]?.label.join(' ') : items[0]?.label);
          },
          label: (context) => ` Inclination Score: ${context.raw}%`
        }
      }
    }
  };

  // Bar Chart Configuration
  const barData = {
    labels: ['Design', 'Production', 'Planning (PPC)', 'Quality QA', 'Marketing'],
    datasets: [
      {
        label: 'Departmental Aptitude %',
        data: dataValues,
        backgroundColor: [
          '#0284C7', // Sky Blue - Design
          '#059669', // Emerald - Production
          '#D97706', // Amber - PPC
          '#E11D48', // Rose - Quality
          '#7C3AED'  // Violet - Marketing
        ],
        borderRadius: 10,
        borderSkipped: false,
        maxBarThickness: 52
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 15,
        bottom: 10,
        left: 10,
        right: 15
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
          font: { size: 11, weight: '600', family: 'Inter, sans-serif' },
          color: '#64748B'
        },
        grid: {
          color: 'rgba(226, 232, 240, 0.8)'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            weight: '700',
            family: 'Inter, sans-serif'
          },
          color: '#1E293B'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 12,
        callbacks: {
          label: (context) => ` Alignment Match: ${context.raw}%`
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-200/80 pb-5">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>GET Functional Profiling Intelligence Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Graduate Engineer Trainee: Multi-Parameter Inclination
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Algorithmic psychometric and technical domain benchmarking across 5 primary industrial engineering functions.
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start md:self-auto bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600">
          <Target className="w-4 h-4 text-blue-600" />
          <span>Core Domain Aptitude Analytics</span>
        </div>
      </div>

      {/* Dual Charts Grid: Radar (Left) + Bar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-stretch">
        
        {/* Radar Chart Card */}
        <div className="bg-gradient-to-br from-white via-slate-50/60 to-blue-50/20 p-3 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold">
                <RadarIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                  Multi-Axis Trait Radar
                </span>
                <span className="text-[11px] text-slate-400 font-medium">5-Dimensional Spider Mapping</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
              Trait Geometry
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 xl:h-[420px] flex items-center justify-center relative">
            <Radar data={radarData} options={radarOptions} />
          </div>

          <div className="text-[11px] text-slate-500 text-center pt-3 border-t border-slate-100 font-medium">
            Evaluates balanced competency spread across technical, planning, and operational attributes.
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="bg-gradient-to-br from-white via-slate-50/60 to-emerald-50/20 p-3 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider block">
                  Departmental Alignment Bar
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Relative Functional Match %</span>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              Normalized Ranking
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 xl:h-[420px] flex items-center justify-center relative">
            <Bar data={barData} options={barOptions} />
          </div>

          <div className="text-[11px] text-slate-500 text-center pt-3 border-t border-slate-100 font-medium">
            Comparative strength distribution across specialized mechanical & manufacturing divisions.
          </div>
        </div>

      </div>

      {/* TOP 3 RECOMMENDED DEPARTMENTS FOR PLACEMENT */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider flex items-center space-x-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Top 3 Recommended Placement Departments</span>
          </h4>
          <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
            Ranked by multi-variable optimization matrix
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {topDepartments.map((dept, idx) => {
            const isFirst = idx === 0;
            const isSecond = idx === 1;

            return (
              <div
                key={dept.key}
                className={`p-6 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 ${
                  isFirst
                    ? 'bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/50 border-indigo-400/90 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20'
                    : isSecond
                    ? 'bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 border-emerald-300/90 shadow-md shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20'
                    : 'bg-gradient-to-br from-amber-50/50 via-white to-slate-50/50 border-amber-300/80 shadow-md shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/15'
                }`}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute -right-8 -top-8 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-40 ${
                  isFirst ? 'bg-indigo-400' : isSecond ? 'bg-emerald-400' : 'bg-amber-400'
                }`}></div>

                <div>
                  {/* Top Rank Badge & Match Percentage */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider border shadow-xs ${
                      isFirst
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-indigo-600/30'
                        : isSecond
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-600/30'
                        : 'bg-amber-600 text-white border-amber-600 shadow-amber-600/30'
                    }`}>
                      #{dept.rank} {dept.rankLabel}
                    </span>
                    
                    <div className="flex items-baseline space-x-1">
                      <span className={`text-2xl sm:text-3xl font-black ${
                        isFirst ? 'text-indigo-950' : isSecond ? 'text-emerald-950' : 'text-amber-950'
                      }`}>
                        {dept.score}%
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">Match</span>
                    </div>
                  </div>

                  {/* Role Title & Department */}
                  <div className="space-y-1 mb-3">
                    <h5 className="font-black text-lg text-slate-900 group-hover:text-blue-700 transition flex items-center justify-between">
                      <span>{dept.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-blue-600" />
                    </h5>
                    <span className="text-xs font-bold text-slate-500 block">
                      Division: <strong className="text-slate-700">{dept.department}</strong>
                    </span>
                  </div>

                  {/* Tailored Rationale */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {dept.rationale}
                  </p>
                </div>

                {/* Competency Keywords */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {dept.keywords?.map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="text-[10px] font-bold px-2.5 py-1 bg-white/90 text-slate-700 rounded-lg border border-slate-200 shadow-2xs"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
