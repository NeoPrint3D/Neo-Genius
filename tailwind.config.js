/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Bodoni"', 'serif'],
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
