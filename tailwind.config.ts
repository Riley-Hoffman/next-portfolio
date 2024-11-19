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
  theme: {
    extend: {
      backgroundImage: {
        wood: "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wood-background.webp')",
        diamonds:
          "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/diamonds.svg')",
      },
      colors: {
        zinc: "#12121c",
        pink: {
          100: "#eee3f2",
          200: "#e5d4ed",
        },
        offwhite: "#f5eef7",
        purple: {
          100: "#a8a0d9",
          200: "#794e8d",
        },
        gray: {
          400: "#73738c",
        },
        gradientpurple: "#794e8e",
        gradientpink: "#ae4971",
        gradientlightpurple: "#a8a1d9",
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        inconsolata: ['"Inconsolata", monospace'],
        "source-sans": ['"Source Sans 3", sans-serif'],
        urbanist: ['"Urbanist", sans-serif'],
        fontAwesomeSolid: ["FontAwesomeSolid"],
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
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
        spin: {
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
          backgroundColor: "#f5f5f5",
        },
        body: {
          fontFamily: theme("fontFamily.inconsolata"),
        },
        "h1,h2,h3,h4,h5,h6,label,legend": {
          fontFamily: theme("fontFamily.poppins"),
        },
        "h1,h2,p,ul,ol": {
          lineHeight: "1.5rem",
        },
        "h1,h2": {
          fontSize: "1.5rem",
          lineHeight: "2rem",
        },
        "p,ul,ol": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
        },
        "p,h1,h2,h3,h4,h5,h6": {
          margin: "1.25rem 0",
          padding: "0 1.25rem",
        },
        "p a,li a": {
          textDecoration: "underline",
        },
        "main ::placeholder": {
          color: theme("colors.gray.400"),
          fontSize: "1rem",
          fontWeight: "300",
          lineHeight: "1.5rem",
          opacity: "1",
        },
        ".button": {
          backgroundColor: theme("colors.zinc"),
          color: theme("colors.pink.200"),
          fontFamily: "inherit",
          textDecoration: "none",
          "&:hover, &:focus-visible": {
            backgroundColor: theme("colors.pink.100"),
            color: theme("colors.zinc"),
          },
        },
        ".new-tab > span:last-child:after": {
          display: "inline-block",
          fontFamily: theme("fontFamily.fontAwesomeSolid"),
          fontSize: "63%",
          fontWeight: "400",
          height: "0",
          paddingLeft: "0.313rem",
        },
        ".small-caps": {
          fontVariant: "small-caps",
        },
        ".gradient-border": {
          borderImageSlice: "1",
          borderImageSource: `linear-gradient(90deg,${theme("colors.gradientlightpurple")} 0%,${theme("colors.gradientpink")} 50%,${theme("colors.gradientpurple")} 70%)`,
        },
        ".inverted": {
          borderImageSource: `linear-gradient(90deg,${theme("colors.gradientpurple")},${theme("colors.gradientpink")} 50%,${theme("colors.gradientlightpurple")} 70%)`,
        },
        ".tool-tip": {
          position: "relative",
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
            borderRadius: "0.25rem",
            color: "#e5d4ed",
            content: "attr(aria-label)",
            display: "flex",
            fontSize: "0.75rem",
            opacity: "0",
            padding: "0.25rem 0.375rem",
            pointerEvents: "none",
            position: "absolute",
            transform: "translateY(-100%) translateX(-50%)",
            transition: "opacity 0.2s",
            top: "0",
            left: "50%",
            width: "6.25rem",
            zIndex: "1",
          },
          "&:hover:before, &:hover:after": {
            opacity: "1",
            pointerEvents: "auto",
          },
        },
        "@media (max-width: 768px)": {
          ".hamburger .line": {
            borderImageSource: `linear-gradient(90deg, ${theme("colors.gradientlightpurple")} 0%, ${theme("colors.gradientpink")} 50%, ${theme("colors.gradientpurple")} 70%)`,
          },
        },
      })
    }),
  ],
}

export default config
