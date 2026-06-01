/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:       '#F7F5F2',
        ink:          '#111110',
        muted:        '#78766F',
        accent:       '#12716A',
        'accent-bg':  '#EAF4F3',
        rule:         '#E4E1DB',
        night:        '#0E0D0B',
        'night-2':    '#1A1916',
        'night-rule': '#282623',
        'night-text': '#EDE9E0',
        'night-muted':'#8A8780',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans:    ['var(--font-inter)', 'sans-serif'],
        mono:    ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
