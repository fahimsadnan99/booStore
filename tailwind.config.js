/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryClr : "#050C26",
        secondaryClr : "#FF7426",
        bgClr : "#4D2C5E",
        
      },
      fontFamily : {
        "Sofia"  : ['Sofia Sans','sans-serif'],
        "mukta" : ['Mukta', "sans-serif"],
        'Satisfy' :['Satisfy', 'cursive']
      },
    },
  },
  plugins: [],
}