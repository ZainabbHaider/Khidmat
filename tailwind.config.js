/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#33b2ed",
      background: "#1c1c1c",
      primary: "#16da52",
      secondary: "#657e7b",
      accent: "#33b2ed",
      highlight: "#33b2ed",
      darktext: "#f7f2f8",
      darkbackground: "#180a1a",
      darkprimary: "#16da52",
      darksecondary: "#2f1b32",
      darkaccent: "#a36aaf",
      darkhighlight: "#33b2ed",
      navytext: "#074462",
      body: "#ffffff",
    },
    extend: {
      fontFamily: {
        roboto: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "24 224px 67px -10px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        twinkle: "twinkle 1.5s linear infinite",
      },

      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      // animation: {
      //   twinkle: 'twinkle 1.5s linear infinite',
      // },
    },
    // animationspin: {
    //   'spin-slow': 'spin 3000 linear infinite',
    // },
  },

  plugins: [],
};
