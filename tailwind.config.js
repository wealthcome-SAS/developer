/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "var(--color-gray)",
          20: "var(--color-gray-light)",
        },
        darkGray: {
          10: "var(--color-dark-gray)",
          20: "var(--color-dark-gray-light)",
        },
      }
    },
  },
  plugins: [],
}

