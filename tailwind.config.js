/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-guide-black-white-white": "#fff",
        "cod-gray-100": "#e7e7e7",
        darkgray: "#b0b0b0",
        "primary-black": "#101010",
        gray: {
          "100": "#fafafa",
          "200": "#242424",
        },
        "cod-gray-500": "#6d6d6d",
        "body-text": "#5a5a5a",
        whitesmoke: {
          "100": "#f7f6f9",
          "200": "#f4f4f6",
          "300": "#f1f1f1",
        },
        darkslategray: "#424242",
        "cod-gray-200": "#d1d1d1",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
