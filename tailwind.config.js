// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        white: '0 4px 20px rgba(255, 255, 255, 0.4)', // Custom white shadow
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
      scale: ['hover'],
    },
  },
  plugins: [],
};
