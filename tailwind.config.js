/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1370px",
      md: "1200px",
      tb: "1110px",
      sm: "860px",
    },
    extend: {},
  },
  plugins: [],
};
