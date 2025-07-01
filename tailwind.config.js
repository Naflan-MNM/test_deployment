/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // <- this was missing
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
