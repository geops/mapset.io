import colors from "tailwindcss/colors";
// import fonts from "tailwindcss/fonts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      // ...fonts,
      hero: "new-hero", //Hero New",
    },
    colors: {
      slate: colors.slate,
      gray: {
        ...colors.gray,
        light: "#E2E8F0",
        DEFAULT: "#64748B",
      },
      white: colors.white,
      transparent: colors.transparent,
      blue: {
        500: "#126392",
        600: "#1789C9",
        700: "#1974BF",
        800: "#1668AB",
        900: "#154665",
        lighter: "#F8FAFC",
        lighte: "#D2E9F9",
        light: "#63B3F4",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2.5xl": "28px",
        "3xl": "32px",
        "7xl": "67px",
        "8xl": "86px",
      },
      boxShadow: { DEFAULT: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" },
    },
  },
  plugins: [],
};
