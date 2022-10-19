/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#EDF1FE",
        footer: "#030D15",
        facebook: "#1877f2",
        twitter: "#1da1f2",
        linkedin: "#0e76a8",
        youtube: "#ff0000",
        instagram: "#f56040",
      },
    },
  },
  plugins: [],
};
