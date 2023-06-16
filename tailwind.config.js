/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#dfae42",
          "secondary": "#fdd51c",
          "accent": "#eed7a0",
          "neutral": "#37AEBA",
          "info": "#F1C52B",
          "error":"#F45722",
          "warning":'#6C63FF'
        },
      },
    ],
  },  
  plugins: [require("daisyui")],
}
