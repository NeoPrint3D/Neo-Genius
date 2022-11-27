/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ef4444",
        "secondary": "#f7b167",

        "base-white": "rgb(248, 248, 248)",
        "base-black": "rgb(0, 51, 86)",
        // "base-black": "#0b132b",
      },
      boxShadow: {
      },

      fontFamily: {
        "main": ["\"SourceSansPro\"", "sans-serif"],
        "body": ["\"Bondoni\"", "serif"],
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
