/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        120: "235px", // Custom height class h-128
      },
      colors:{
        headerColor: "#393280"
      }
    },
  },
  plugins: [],
};
