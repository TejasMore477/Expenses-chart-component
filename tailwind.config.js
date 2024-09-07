/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif']
      },

      colors: {
        darkBrown : 'hsl(25, 47%, 15%)',
        mediumBrown : 'hsl(28, 10%, 53%)',
        cream : 'hsl(27, 66%, 92%)',
        pailOrange : 'hsl(33, 100%, 98%)',

        softRed : 'hsl(10, 79%, 65%)',
        cayn : 'hsl(186, 34%, 60%)',
      }
    },
  },
  plugins: [],
}

