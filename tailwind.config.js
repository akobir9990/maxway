/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      exsm: "500px",
      // => @media (min-width: 500px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "777px",
      // => @media (min-width: 768px) { ... }
      lg: "999px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      maxWidth: "1340px",
      // => @media (min-width: 1340px) { ... }
    },
    extend: {
      colors: {
        primary: "#51267d",
        secondaryColor: "#f1eff4",
        darkGrey: "#48535b",
        isOpen: "rgb(90, 197, 58)",

        btnTextColor: "rgba(217, 217, 217, 1)",
        btnBorder: "rgb(176, 199, 255)",
        btnCountersColor: "rgb(2, 57, 151)",
        categoriesBtnColor: "rgb()",
        cardTitleColor: "rgb(37, 44, 50)",
        cardSubtitleColor: "rgb(128, 128, 128)",
        accepted: "rgb(17, 156, 43)",
        canceled: "rgba(242, 39, 28, 0.1)",
        branchOfficeSubtitle: "rgb(91, 104, 113)",
        branchOfficeWork: "rgb(90, 197, 58)",
        categorysColor: "rgb(41, 41, 41)",
        headerBtnColor: "rgba(231, 243, 252, 0.7)",
        popupBg: "rgba(246, 248, 249, 1)",
      },
      boxShadow: {
        cardShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        h1: "text-3xl leading-[24px]",
      },
      font: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
