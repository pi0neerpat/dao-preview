module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#000000',
      blue: '#47A7FF',
      blueLink: '#147DDD',
      blueDark: '#125BF5',
      green: '#88C54B',
      appBlack: {
        100: '#312E2B',
        200: '#272522',
        300: '#21201D',
      },
      greenDark: '#6C9D41',
      greenLight: '#9DBA5B',
      grey: '#ABB6B9',
      greyDark: '#4F4F4F',
      orange: '#FFBB0D',
      red: '#B23330',
      white: '#FFFFFF',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
