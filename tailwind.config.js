/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./presentation/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#49129C',
        'secondary' : {
          DEFAULT: '#B40086',
          100: '#C51297',
          200: '#831266',
        },
        'tertiary' : '#EF2967'
      },
      fontFamily: {
        'work-black' : ['WorkSans-Black', 'sans-seriff'],
        'work-light' : ['WorkSans-Light', 'sans-seriff'],
        'work-medium' : ['WorkSans-Medium', 'sans-seriff'],
      }

    },
  },
  plugins: [],
}

