module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
    },
    colors: {
      'irmak-blue': '#7b1a0f',
      'dark-blue': '#551e13',
      'light-blue': '#6c563a',
      // 'irmak-blue': '#333D98',
      // 'dark-blue': '#12184D',
      // 'light-blue': '#4E5DE6',
      gray: '#f9f7f7',
      black: '#2d2d2d',
      white: '#ffffff',
    },
    fontFamily: {
      // sans: ['Nunito', 'sans-serif'],
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
