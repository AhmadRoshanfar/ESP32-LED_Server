/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#243642",
        sliderBg: "#387478",
        headerText: "#FD8B51",
        bodyText: "#E2F1E7",
        chartBg: "#EAD8B1",
      },
    },
  },
  plugins: [],
};
