/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { opacity: "1" },
          "10%": { opacity: "0" },
          "12%": { opacity: "1" },
          "14%": { opacity: "0" },
          "16%": { opacity: "1" },
        },
        fadeLoop: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        glitch: "glitch 0.3s ease-in-out",
        fadeLoop: "fadeLoop 6s infinite",
      },
      colors: {
        turquoise: {
          50: "#eefdfd",
          100: "#d4f9f9",
          200: "#aef2f3",
          300: "#5ce1e6",
          400: "#37d1d9",
          500: "#1bb4bf",
          600: "#1991a1",
          700: "#1b7483",
          800: "#1f5f6b",
          900: "#1e4f5b",
          950: "#0e343e",
        },
      },
    },
  },
  plugins: [],
};
