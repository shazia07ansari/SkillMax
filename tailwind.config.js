/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f0ff',
          200: '#bce5ff',
          300: '#8ed5ff',
          400: '#59bcff',
          500: '#2f9eff',
          600: '#1880f5',
          700: '#1468e1',
          800: '#1754b6',
          900: '#184a8f',
          DEFAULT: '#1880f5',
        },
      },
    },
  },
  plugins: [],
};
