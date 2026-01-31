/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ginger: ['"F37 Ginger Cyrillic VF"', "sans-serif"],
        gothic60: ['"Gothic №60"', "sans-serif"],
      },
      fontSize: {
        ginger: ["20px", { lineHeight: "22px", letterSpacing: "0%" }],
      },
    },
  },
  plugins: [],
};
