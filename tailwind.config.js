/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas:      '#F7F5F2',
        ink:         '#111110',
        muted:       '#78766F',
        accent:      '#12716A',
        'accent-bg': '#EAF4F3',
        rule:        '#E4E1DB',
        night:       '#0E0D0B',
        'night-2':   '#1A1916',
        'night-rule':'#282623',
        'night-text':'#EDE9E0',
        'night-muted':'#8A8780',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
