/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'apple-dark': '#1d1d1f',
        'apple-elevated': '#2d2d2f',
        'apple-white': '#f5f5f7',
        'apple-secondary': '#a1a1a6',
        'apple-tertiary': '#6e6e73',
        'apple-blue': '#2997ff',
        'apple-purple': '#bf5af2',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
