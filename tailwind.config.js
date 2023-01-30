const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Upakarti", fontFamily.sans],
        secondary: ["Montserrat", fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#F1F1FE",
          200: "#DFDFFD",
          300: "#C0C0FC",
          400: "#8685F2",
          500: "#5F5EEA",
          600: "#5555D3",
          700: "#504FC5",
          800: "#3F3EAD",
        },
        critical: {
          100: "#FEF1F1",
          200: "#FED8D6",
          300: "#FBA59F",
          400: "#F97F73",
          500: "#F05151",
          600: "#D84949",
          700: "#CC4545",
          800: "#B2343E",
        },
        theme: {
          100: "#E8EDD0",
          200: "#E4EEB9",
          300: "#DDEC99",
          400: "#DBF07B",
          500: "#CDEB47",
          600: "#A8C916",
          700: "#738A0F",
          800: "#4D5C0A",
        },
        success: {
          100: "#E9FCE8",
          200: "#C7FACA",
          300: "#98EDA5",
          400: "#71D98B",
          500: "#37B965",
          600: "#289F5E",
          700: "#1B8555",
          800: "#116B4B",
        },
        warning: {
          100: "#FFFAD9",
          200: "#FFF4B5",
          300: "#FFEB88",
          400: "#FFDC3F",
          500: "#FFCC00",
          600: "#DBAA00",
          700: "#B78B00",
          800: "#936D00",
        },
        typo: {
          DEFAULT: "#1F201D",
          white: "#FFF",
          secondary: "#5A5D56",
          tertiary: "#989898",
          icons: "#878787",
          tag: "#E9E9E9",
        },
        outline: {
          DEFAULT: "#E6E6E5",
          base: "#D3D6CC",
          button: "#BCBCBC",
        },
        surface: {
          background: "#EFF0EA",
          base: "#FBFAF8",
          card: "#FFFFFF",
          textfield: "#F1F1ED",
          hover: "#F3F3F1",
          pressed: "#E9EBE2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
