/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/ui/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '3/4': '3 / 4',
      },
      fontFamily: {
        title: ['ivymode', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#333D98',
      'primary-dark': '#12184D',
      'primary-light': '#4E5DE6',
      light: '#939BE5',
      gray: '#f1f5f9',
      black: '#2d2d2d',
      white: '#ffffff',
      'slate-100': '#f1f5f9',
      'slate-200': '#e2e8f0',
      'slate-300': '#cbd5e1',
      'slate-400': '#9ca3af',
      'slate-500': '#64748b',
    },
    listStyleType: {
      none: 'none',
      square: 'square',
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        }],
        '2xl': [3, {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        }],
        '3xl': [4, {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        }],
        '4xl': [5, {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
        }],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
      },
    }),
  ],
  variants: {
    fluidType: ['responsive'],
  },
};
