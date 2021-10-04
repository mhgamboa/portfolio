module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        portrait: "url('/src/img/portrait.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
