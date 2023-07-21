/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        light: "#E2E8F0",
        DEFAULT: "#64748B",
      },
      white: "white",
      blue: {
        light: "#63B3F4",
        DEFAULT: "#1789C9",
        dark: "#1974BF",
        darker: "#154665",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "7xl": "67px",
        "8xl": "86px",
      },
      boxShadow: { DEFAULT: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" },
    },
  },
  plugins: [],
};
