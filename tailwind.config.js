/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "rgb(var(--color-background) / <alpha-value>)",
      altbackground: "rgb(var(--color-altbackground) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      highlight: "rgb(var(--color-highlight) / <alpha-value>)",
      primarytext: "rgb(var(--color-primarytext) / <alpha-value>)",
      secondarytext: "rgb(var(--color-secondarytext) / <alpha-value>)",
      highlighttext: "rgb(var(--color-highlighttext) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      secondary: "#0D5D56",
      error: "#F44336",
      gray: {
        400: "#9ca3af",
        500: "##6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontFamily: {
      bodyFont: ["Roboto", "sans-serif"],
      bodyFontItalic: ["Roboto Mono", "monospace"],
      headerFont: ["Archivo Black", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
