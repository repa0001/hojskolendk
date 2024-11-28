/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
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
        broedtekst_mobil: ["0.9rem", { lineHeight: "1.25rem" }],
        "P-2": ["2rem", { lineHeight: "normal" }],
        "P-2_mobil": ["1rem", { lineHeight: "normal" }],
        "P-3": ["0.8rem", { lineHeight: "1rem" }],
        "P-list": ["0.5rem", { lineHeight: "1rem" }],
        link: ["1.25rem", { lineHeight: "normal" }],
        link_mobil: ["1.25rem", { lineHeight: "normal" }],

        /* header */
        h1: ["4rem", { lineHeight: "normal" }],
        h1_mobil: ["2.75rem", { lineHeight: "normal" }],
        h2: ["2.8rem", { lineHeight: "normal" }],
        h2_mobil: ["1.4rem", { lineHeight: "normal" }],
        h3: ["1.8rem", { lineHeight: "normal" }],
        h3_mobil: ["1.6rem", { lineHeight: "normal" }],
        h4: ["1.8rem", { lineHeight: "normal" }],
        h4_mobil: ["1.25rem", { lineHeight: "normal" }],
        h5: ["1.5rem", { lineHeight: "normal" }],
        h5_mobil: ["1rem", { lineHeight: "normal" }],
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
        0: "0px",
        0.5: "0.5px",
        1: "1px",
        2: "2px",
      },

      /* Border radius størrelser herunder */
      borderRadius: {
        DEFAULT: "1.25rem",
        none: "0px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
