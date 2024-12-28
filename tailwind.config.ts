import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: ["./app/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: [
    "motion-safe:md:left-[-200%]",
    '[&[data-active="true"]]:left-0',
    "motion-safe:md:right-[-200%]",
    '[&[data-active="true"]]:right-0',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        wood: "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wood-background.webp')",
        diamonds:
          "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/diamonds.svg')",
        diamondsdark:
          "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/diamonds-dark.svg')",
      },
      colors: {
        textcolor: "var(--color-textcolor)",
        accentone: {
          100: "var(--color-accentone-100)",
          200: "var(--color-accentone-200)",
        },
        sitebackground: "var(--color-sitebackground)",
        accenttwo: {
          100: "var(--color-accenttwo-100)",
          200: "var(--color-accenttwo-200)",
        },
        bordercolor: "var(--color-bordercolor)",
        gradientthree: "var(--color-gradientthree)",
        gradienttwo: "var(--color-gradienttwo)",
        gradientone: "var(--color-gradientone)",
        siteblack: "var(--color-siteblack)",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        inconsolata: ['"Inconsolata", monospace'],
        "source-sans": ['"Source Sans 3", sans-serif'],
        urbanist: ['"Urbanist", sans-serif'],
        fontawesomesolid: ["FontAwesomeSolid"],
      },
      clipPath: {
        "cut-corners":
          "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
      },
      transitionTimingFunction: {
        "steps-40-end": "steps(40, end)",
        "step-end-infinite": "step-end infinite",
        forwards: "forwards",
      },
      animation: {
        typetext:
          "typing 3.5s steps(40, end), blinkcaret 0.75s step-end infinite, borderfade 0s 1.5s forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 95%": { transform: "rotate(0)" },
          "25%, 75%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        twirl: {
          to: { transform: "rotateY(360deg)" },
        },
        typing: {
          from: { maxWidth: "0" },
          to: { maxWidth: "100%" },
        },
        blinkcaret: {
          from: { borderColor: "transparent" },
          "50%": { borderColor: "#aab9bb" },
        },
        borderfade: {
          to: { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        html: {
          backgroundColor: "whitesmoke",
        },
        body: {
          color: theme("colors.textcolor"),
          fontFamily: theme("fontFamily.inconsolata"),
          textWrap: "pretty",
        },
        ":where(h1,h2,h3,h4,h5,h6,label,legend)": {
          fontFamily: theme("fontFamily.poppins"),
        },
        "h1,h2": {
          fontSize: "1.5rem",
        },
        ":where(h1,h2):not(.reg-caps)": {
          fontVariant: "small-caps",
        },
        "p,ul,ol,form": {
          fontSize: "1.125rem",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          margin: "1.25rem 0",
          padding: "0 1.25rem",
        },
        ":where(p,li) a:not(.button,.no-underline)": {
          textDecoration: "underline",
        },
        "main ::placeholder": {
          color: theme("colors.accenttwo.200"),
          opacity: "0.9",
        },
        ".button": {
          backgroundColor: theme("colors.textcolor"),
          color: theme("colors.accentone.200"),
          fontFamily: "inherit",
          textDecoration: "none",
          "&:hover, &:focus-visible": {
            backgroundColor: theme("colors.accentone.100"),
            color: theme("colors.textcolor"),
          },
        },
        ".gradient-border": {
          borderImageSlice: "1",
          borderImageSource: `linear-gradient(90deg,${theme("colors.gradientone")} 0%,${theme("colors.gradienttwo")} 50%,${theme("colors.gradientthree")} 70%)`,
        },
        ".inverted": {
          borderImageSource: `linear-gradient(90deg,${theme("colors.gradientthree")},${theme("colors.gradienttwo")} 50%,${theme("colors.gradientone")} 70%)`,
        },
        ".tool-tip": {
          "&:not(.fixed,.absolute)": {
            position: "relative",
          },
          "&:before": {
            borderRight: "0.5rem solid transparent",
            borderLeft: "0.5rem solid transparent",
            borderTop: "0.5rem solid #12121c",
            content: '""',
            opacity: "0",
            pointerEvents: "none",
            position: "absolute",
            transition: "opacity 0.2s",
            top: "0",
            left: "0",
          },
          "&:after": {
            backgroundColor: "#12121c",
            borderRadius: "0.375rem",
            color: "#f5f5f5",
            content: "attr(aria-label)",
            fontSize: "0.75rem",
            opacity: "0",
            padding: "0.25rem 0.375rem",
            pointerEvents: "none",
            position: "absolute",
            transform: "translateY(-100%) translateX(-50%)",
            transition: "opacity 0.2s",
            top: "1px",
            left: "50%",
            width: "6.25rem",
            zIndex: "1",
          },
          "&:where(:hover,:focus-visible)": {
            "&:before, &:after": {
              opacity: "1",
              pointerEvents: "auto",
            },
          },
        },
        "@media (max-width: 768px)": {
          ".hamburger .line": {
            borderImageSource: `linear-gradient(90deg, ${theme("colors.gradientone")} 0%, ${theme("colors.gradienttwo")} 50%, ${theme("colors.gradientthree")} 70%)`,
          },
        },
      })
    }),
  ],
}

export default config
