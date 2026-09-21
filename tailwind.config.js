/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['P22 Mackinac W01 Book', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#12403A',
          deep: '#0B2B27',
        },
        forest2: '#1D5C52',
        marigold: {
          DEFAULT: '#C8811A',
          l: '#F5E3C6',
          dark: '#A96C10',
        },
        cream: '#FBF7EF',
        sand: {
          DEFAULT: '#F2EADB',
          hover: '#E8DFCB',
        },
        line: '#DCD1BC',
        muted: '#615C52',
        err: '#A8321E',
      },
    },
  },
  plugins: [],
}
