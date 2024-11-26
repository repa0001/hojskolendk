/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    // colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     'farvenavn': {
    //         50: '#hexkode',
    //         100: '#hexkode',
    //         200: '#hexkode',
    //         300: '#hexkode',
    //         400: '#hexkode',
    //         500: '#hexkode',
    //         600: '#hexkode',
    //         700: '#hexkode',
    //         800: '#hexkode',
    //         900: '#hexkode',
    //     },
    //     'white': '#fff',
    //     'black': '#000',
    // },

    /* Tilføj din egen spacing nedenfor */
    // spacing: {
    //     'm': '40px',
    // },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    // fontFamily: {
    //     sans: ['Prompt', 'sans-serif'],
    //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
    // },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {
      /* Tilføj din egen farvepalette nedenfor */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#000000",
        creamywhite: "#FFFAE7",
        orange: "#FF5700",
        darkorange: "#BC480C",
      },

      /* Tilføj din egen spacing nedenfor */
      // spacing: {
      //     'm': '40px',
      // },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        pennypacker: ["Pennypacker Wide", "sans-serif"],
      },

      /* Tilføj dit typografiske hierarki herunder */
      fontSize: {
        /* paragraph */
        broedtekst: ["1rem", { lineHeight: "1.375rem" }],
        broedtekst_mobil: ["0.5rem", { lineHeight: "0.68rem" }],
        "P-2": ["2rem", { lineHeight: "normal" }],
        "P-2_mobil": ["1rem", { lineHeight: "normal" }],
        "P-3": ["0.8rem", { lineHeight: "1rem" }],
        "P-list": ["0.5rem", { lineHeight: "1rem" }],
        Link: ["1.25rem", { lineHeight: "normal" }],
        Link_mobil: ["0.68rem", { lineHeight: "normal" }],

        /* header */
        h1: ["4rem", { lineHeight: "normal" }],
        h1_mobil: ["2.25rem", { lineHeight: "normal" }],
        h2: ["2.8rem", { lineHeight: "normal" }],
        h2_mobil: ["1.4rem", { lineHeight: "normal" }],
        h3: ["2rem", { lineHeight: "1.3rem" }],
        h3_mobil: ["1rem", { lineHeight: "1.25rem" }],
        h4: ["1.8rem", { lineHeight: "normal" }],
        h4_mobil: ["1.25rem", { lineHeight: "normal" }],
        h5: ["1.5rem", { lineHeight: "normal" }],
        h5_mobil: ["0.8rem", { lineHeight: "normal" }],
      },

      /* Tilføj dit fontvægt-hierarki nedenfor */
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
        extrabold: "900",
      },

      /* Borders - borderstørrelser herunder */
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        0.5: "0.5px",
        2: "2px",
      },

      /* Border radius størrelser herunder */
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
