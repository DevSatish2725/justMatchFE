/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          navy: "#042C53",
          primary: "#185FA5",
          mid: "#378ADD",
          sky: "#85B7EB",
          pale: "#B5D4F4",
          bg: "#F2F6FD",
          card: "#E6F1FB",
        },
        petal: {
          deep: "#72243E",
          primary: "#993556",
          mid: "#D4537E",
          light: "#ED93B1",
          pale: "#F4C0D1",
          bg: "#FFF5F8",
          card: "#FBEAF0",
        },
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};
