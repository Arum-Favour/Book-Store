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
      },
      width:{
        213: "213px",
        244: "244px",
         1218:"1218px"
      }
    },
  },
  plugins: [],
};
