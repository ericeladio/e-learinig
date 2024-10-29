/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#7a1d1d",
          500: "#741b1b",
          900: "#5a0e0e",
        },
        absoluteWhite: "#ffffff",
        absoluteBlack: "#000000",
        orangeShade:{
          50:"#ff9500",
          70:"#ffbf66",
          75:"#ffcca80",
          80:"#ffd499",
          90:"#ffeacc",
          95:"#fff4e5",
          97:"#fff9f4",
          99:"#fffdfa",
        },
        whiteShade:{
          90:"#e4e4e7",
          95:"#f1f1f3",
          97:"#f7f7f8",
          99:"#fcfcfd",
        },
        greyShade:{
          10:"#191919",
          15:"#262626",
          20:"#333333",
          30:"#4c4c4d",
          35:"#59595a",
          40:"#656567",
          60:"#98989a",
          70:"#b3b3b3",
        }
      },
    },
  },
  plugins: [],
};
