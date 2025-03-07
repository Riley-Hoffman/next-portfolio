import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./app/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
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
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        accentone: {
          100: 'var(--color-accentone-100)',
          200: 'var(--color-accentone-200)',
          300: 'var(--color-accentone-300)',
        },
        accenttwo: {
          100: 'var(--color-accenttwo-100)',
          200: 'var(--color-accenttwo-200)',
        },
        bordercolor: 'var(--color-bordercolor)',
        gradientthree: 'var(--color-gradientthree)',
        gradienttwo: 'var(--color-gradienttwo)',
        gradientone: 'var(--color-gradientone)',
        siteblack: 'var(--color-siteblack)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inconsolata: ['var(--font-inconsolata)'],
        sourcesans: ['var(--font-sourcesans)'],
        urbanist: ['var(--font-urbanist)'],
      },
      fontSize: {
        reduced: '1.063rem',
      },
      clipPath: {
        'cut-corners':
          'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      },
      animation: {
        typetext:
          'typing 3.5s steps(40, end), blinkcaret 0.75s step-end infinite, borderfade 0s 1.8s forwards',
        wiggle: 'wiggle 1s',
        twirl: 'twirl 1s infinite',
        delayedfadein: 'delayedfadein 1s',
      },
      keyframes: {
        wiggle: {
          '0%, 95%': { transform: 'rotate(0)' },
          '25%, 75%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        twirl: {
          to: { transform: 'rotateY(360deg)' },
        },
        typing: {
          from: { maxWidth: '0', overflow: 'clip' },
          to: { maxWidth: '100%' },
        },
        blinkcaret: {
          from: { borderColor: 'transparent' },
          '50%': { borderColor: '#aab9bb' },
        },
        borderfade: {
          to: { border: 'none' },
        },
        delayedfadein: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        html: {
          backgroundColor: 'whitesmoke',
        },
        body: {
          color: theme('colors.text'),
          fontFamily: theme('fontFamily.inconsolata'),
          textWrap: 'pretty',
        },
        ':where(h1,h2,h3,h4,h5,h6,label,legend)': {
          color: theme('colors.heading'),
          fontFamily: theme('fontFamily.poppins'),
        },
        'h1,h2': {
          fontSize: '1.5rem',
        },
        ':where(h1,h2):not(.reg-caps)': {
          fontVariant: 'small-caps',
        },
        'p,ul,ol,form': {
          fontSize: '1.125rem',
        },
        'p,h1,h2,h3,h4,h5,h6': {
          margin: '1.25rem 0',
          padding: '0 1.25rem',
        },
        ':where(p,li) a:not(.button,.no-underline)': {
          textDecoration: 'underline',
        },
        'main ::placeholder': {
          color: theme('colors.accenttwo.200'),
          opacity: '0.9',
        },
        '.button': {
          backgroundColor: theme('colors.heading'),
          color: theme('colors.accentone.200'),
          fontFamily: 'inherit',
          textDecoration: 'none',
          '&:hover, &:focus-visible': {
            backgroundColor: theme('colors.accentone.100'),
            color: theme('colors.heading'),
          },
        },
        '.pad-wrap': {
          paddingLeft: `calc(50% - ${parseInt(theme('screens.xl'), 10) / 2}px)`,
          paddingRight: `calc(50% - ${parseInt(theme('screens.xl'), 10) / 2}px)`,
        },
        '.gradient-border': {
          borderImageSlice: '1',
          borderImageSource: `linear-gradient(90deg,${theme('colors.gradientone')} 0%,${theme('colors.gradienttwo')} 50%,${theme('colors.gradientthree')} 70%)`,
        },
        '.inverted': {
          borderImageSource: `linear-gradient(90deg,${theme('colors.gradientthree')},${theme('colors.gradienttwo')} 50%,${theme('colors.gradientone')} 70%)`,
        },
        '.tool-tip': {
          '&:not(.fixed,.absolute)': {
            position: 'relative',
          },
          '&:before': {
            borderRight: '0.5rem solid transparent',
            borderLeft: '0.5rem solid transparent',
            borderTop: '0.5rem solid #12121c',
            content: '""',
            opacity: '0',
            pointerEvents: 'none',
            position: 'absolute',
            transition: 'opacity 0.2s',
            top: '0',
            left: '0',
          },
          '&:after': {
            backgroundColor: '#12121c',
            borderRadius: '0.375rem',
            color: '#f5f5f5',
            content: 'attr(aria-label)',
            fontSize: '0.75rem',
            opacity: '0',
            padding: '0.25rem 0.375rem',
            pointerEvents: 'none',
            position: 'absolute',
            transform: 'translateY(-100%) translateX(-50%)',
            transition: 'opacity 0.2s',
            top: '1px',
            left: '50%',
            width: '6.25rem',
            zIndex: '1',
          },
          '&:where(:hover,:focus-visible)': {
            '&:before, &:after': {
              opacity: '1',
              pointerEvents: 'auto',
            },
          },
        },
        '[class*="animate-typetext"]': {
          animationComposition: 'add',
          borderColor: 'transparent',
          borderStyle: 'solid',
          borderRightWidth: '2px',
        },
        '.counter-increment-circle': {
          counterIncrement: 'circle',
          '&:before': {
            content: 'counter(circle)',
          },
        },
      })
    }),
  ],
}

export default config
