/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(247, 177, 103)',
        secondary: '#ef4444',
      },
      boxShadow: {
      },

      fontFamily: {
        main: ['"SourceSansPro"', 'sans-serif'],
        body: ['"Bondoni"', 'serif'],
        genius: ['"Freedom"', 'serif'],
      },
      minHeight: {
        page: 'calc(100vh - 5rem)',
      },
      height: {
        page: 'calc(100vh - 5rem)',
      },
    },
  },
  plugins: [],
}
