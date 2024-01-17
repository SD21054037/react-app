/ @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Roboto": [ "Roboto", "Sans-serif" ]
    },
    extend: {
      colors: {
        "blue-20": "#111329",
        "blue-50": "#131B56",
        "blue-100": "#2B50EC",
        "cyan-500": "#108670",
        "orange-100": "#CD4D00",
        "primary-300": "#21CEA1",
        "primary-500": "#D9EBF7",
        "secondary-400": "#131B56",
        "secondary-500": "#131B56",
      },
      backgroundImage: (theme) => ({
        "gradient=yellowred": "linear-gradient(90deg, $FF616A 0%, #FFC837 100%)"
      }),
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    },
  },
  plugins: [],
}