/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter600: ["Inter600"],
        Inter700: ["Inter700"],
        Inter900: ["Inter900"],
        Inter500: ["Inter500"],
        Inter400: ["Inter400"],
        Itim400: ["Itim400"],
        Roboto500i: ["Roboto500i"],
        Roboto500: ["Roboto500"],
        Roboto400: ["Roboto400"],
        Roboto700: ["Roboto700"],
      },
      colors: {
        mgreen: '#47904E',
        mgreen2: '#81C398',
        mgreen3: '#319F43',
        mwhite: '#FEFEFE',
        mgray: '#D9D9D9',
        mgray2: '#F3F3F3',
        mgray3: '#B7B7B7',
        mgray4: '#909090',
      },
      fontSize: {
        14: '14px',
        15: '15px',
        30: '30px',

      }
    },
  },
  plugins: [],
}

