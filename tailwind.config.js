/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
      },
      backgroundColor: {
        "primary-bg": "#7D032C", // Custom background for primary
        "secondary-bg": "#ffed4a", // Custom background for secondary
        "accent-bg": "#38b2ac", // Custom background for accent
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#7D032C", // Custom primary color
        secondary: "#F5F4EF", // Custom secondary color
        accent: "#2B4C54", // Custom accent color
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
