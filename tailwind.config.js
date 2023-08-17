/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          900: "#0B242B",
        },
        accent: {
          900: "#E85A32",
        },
      },
    },
  },
  plugins: [],
};
