/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        "mint-300": "#ABEBC6",
        "mint-50": "#F7DC6F",
        "mint-100": "#D5F5E3",
        "mint-800": "",
        "salmon-red-100": "#FFA07A",
        "salmon-red-200": "#FA9191",
        "salmon-red-300": "#EB6383",
        "gdsc-green":"#34A853",
        "gdsc-green2":"#217036",
        "gdsc-red":"#EA4335",
        "gdsc-red2":"#F1948A",
        "gdsc-blue":"#4285F4",
        "gdsc-blue2":"#AED6F1",
        "gdsc-yellow":"#FBBC05", 
        "spink":"#FDEDEC",
        "syellow":"#FCF3CF",
        "sgreen":"#EAFAF1 ",
        "sblue":"#EBF5FB",
      },
      boxShadow: {
        myShadow1: "4.1px -5px 0 0 rgb(17,24,39)",
        myShadow2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
};
