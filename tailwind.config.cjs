/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ef4444",
        "secondary": "#f7b167",

        "base-light": "rgb(248, 248, 248)",
        "base-dark": "rgb(0, 51, 86)",
        // "base-dark": "#0b132b",
      },
      boxShadow: {
        "base-primary-light": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        "base-primary-dark": "rgba(205, 205, 162, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(244, 218, 191, 0.35) 0px -2px 6px 0px inset"

      },

      fontFamily: {
        "main": ["\"SourceSansPro\"", "sans-serif"],
        "genius": ["\"Freedom\"", "serif"],
      },
      minHeight: {
        "page": "calc(100vh - 5rem)",
      },
      height: {
        "page": "calc(100vh - 5rem)",
      },
    },
  },
  plugins: [],
};
