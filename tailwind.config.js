/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#242220',          // deep charcoal
        ink2: '#34312E',
        brass: { DEFAULT: '#B8913F', dark: '#7A5C1E', light: '#D6B462' },
        paper: '#FBF9F5',        // off-white
        stone: { DEFAULT: '#E8E4DC', dark: '#8B857B' }, // warm/concrete grey
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
