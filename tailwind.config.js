/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
      colors: {
        "slate-gray": "#6B737D",
        "gunmetal": "#202937",
        "prime": "#5046E0",
        "secondary": "#6366F1"
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"]
      }
    },
  },
  plugins: [],
};