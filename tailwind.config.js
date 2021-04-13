module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        144: "36rem",
        168: "42rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
