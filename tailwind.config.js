/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        "custom-purple-start": "rgba(84, 3, 255, 0.15)",
        "custom-purple-end": "rgba(105, 2, 153, 0.15)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
