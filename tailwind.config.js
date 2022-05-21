module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '3/2': '3 / 2',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '2/3': '2 / 3',
      },
    },
    colors: {
      'irmak-blue': '#333D98',
      'dark-blue': '#12184D',
      'light-blue': '#4E5DE6',
      black: '#000000',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['ivymode', 'serif'],
      // sans: ['Playfair Display', 'serif'],
      // sans: ['OpenSans', 'sans-serif'],
      // sans: ['museo-sans', 'sans-serif'],
      title: ['ivymode', 'serif'],
      // title: ['Playfair Display', 'serif'],
    },
    // fontWeight: 100,
    // lineHeight: ''
  },
  plugins: [],
};
