// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Scan JSX files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Custom color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter globally
      },
    },
  },
  plugins: [],
};
