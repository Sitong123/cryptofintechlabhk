/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'about-us-bg': '#d4e5e7',
      },
      boxShadow: {
        custom: '0px 2px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
