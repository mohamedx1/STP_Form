/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7D032C", // Custom primary color
        secondary: "#F5F4EF", // Custom secondary color
        accent: "#38b2ac", // Custom accent color
      },
      backgroundColor: {
        "primary-bg": "#7D032C", // Custom background for primary
        "secondary-bg": "#ffed4a", // Custom background for secondary
        "accent-bg": "#38b2ac", // Custom background for accent
      },
    },
  },

  plugins: [],
};
