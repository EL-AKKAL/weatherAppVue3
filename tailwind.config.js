/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
     theme: {
          extend: {
               colors: {
                    bgColor: "#00668A",
                    secondaryColor: "#0a3543",
                    textColor: "#eef4f6",
                    accentColor: "#65509f",
                    yellowColor: "#FDDA0D",
               },
          },
          fontFamily: {
               Roboto: ["Roboto, sans-serif"],
          },
          container: {
               padding: "2rem",
               center: true,
          },
          screens: {
               sm: "640px",
               md: "768px",
          },
     },
     plugins: [],
};
