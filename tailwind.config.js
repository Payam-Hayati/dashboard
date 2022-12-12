/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "back-dashboard": "var(--back-dashboard)",
        "my-silver": "var(--my-silver)",
        "back-body": "var(--back-body)",
        "my-white": "var(--my-white)",
        "my-green": "var(--my-green)",
      },
    },
  },
  plugins: [],
};
