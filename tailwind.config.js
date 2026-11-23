/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0B1528', // Deep Navy Echaar
          850: '#0F1D35',
          800: '#162846', // Primary Navy
          700: '#1E3A63', // Slate Blue Accent
          600: '#2A4E82',
          500: '#3B68A6',
          100: '#E9EEF6',
          50: '#F4F7FB'
        },
        steel: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC'
        },
        echaarGold: {
          500: '#E59B12',
          600: '#D97706',
          700: '#B45309'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
