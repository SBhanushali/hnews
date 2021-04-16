module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        144: "36rem",
        156: "39rem",
        168: "42rem",
      },
      colors: {
        orange: "#fe6600",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
