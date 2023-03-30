/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["Noto Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      md: "768px",
      lg: "991px",
      xl: "1246px",
      xxl: "1860px",
    },
    extend: {
      colors: {
        primary: {
          50: "#E3F2FC",
          100: "#C7E5F9",
          200: "#90CCF4",
          300: "#58B2EE",
          400: "#2199E8",
          500: "#1377BB",
          600: "#0F5F94",
          700: "#0B476F",
          800: "#082F4A",
          900: "#041825",
        },
        dark: {
          50: "#E3E9ED",
          100: "#C7D3DB",
          200: "#90A6B7",
          300: "#5E7C91",
          400: "#3A4D5A",
          500: "#161D22",
          600: "#12181C",
          700: "#0E1216",
          800: "#080B0C",
          900: "#040506",
        },
      },
      backgroundImage: {},
      borderRadius: {
        // "3xl": "32px",
      },
      boxShadow: {
        // sm: "8px 12px 24px -10px rgba(0, 0, 0, 0.15)",
        // DEFAULT:
        //   "0 4px 24px -8px rgba(0, 0, 0, 0.15), 0 0 1px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    darkTheme: false,
  },
};
