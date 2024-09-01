/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#CA8787", // Custom color code
        "custom-orange": "#FF9100", // Another example
        "custom-yellow": "#FFB22C",
      },
    },
  },
  plugins: [],
};
