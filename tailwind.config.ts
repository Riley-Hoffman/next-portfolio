import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const BACKGROUNDS = {
  wood: "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/wood-background.webp')",
  diamonds:
    "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/diamonds.svg')",
  diamondsdark:
    "url('https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/diamonds-dark.svg')",
}

const config: Config = {
  content: ['./app/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        wood: BACKGROUNDS.wood,
        diamonds: BACKGROUNDS.diamonds,
        diamondsdark: BACKGROUNDS.diamondsdark,
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
      const GLOBAL_BLACK = '#12121c'
      const TOOL_TIP_TRANSITION = 'opacity 0.2s'
      const xlScreenWidth = parseInt(theme('screens.xl'), 10)
      const padWrapPadding = `calc(50% - ${xlScreenWidth / 2}px)`
      const gradientOneColor = theme('colors.gradientone')!
      const gradientTwoColor = theme('colors.gradienttwo')!
      const gradientThreeColor = theme('colors.gradientthree')!
      const spacing2 = theme('spacing.2')
      const spacing5 = theme('spacing.5')
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
          fontSize: theme('spacing.6'),
        },
        ':where(h1,h2):not(.reg-caps)': {
          fontVariant: 'small-caps',
        },
        'p,ul,ol,form': {
          fontSize: '1.125rem',
        },
        'p,h1,h2,h3,h4,h5,h6': {
          margin: `${spacing5} 0`,
          padding: `0 ${spacing5}`,
        },
        ':where(p,li) a:not(.button,.no-underline)': {
          textDecoration: 'underline',
        },
        'main ::placeholder': {
          color: theme('colors.accenttwo.200'),
          opacity: '0.9',
        },
        '.pad-wrap': {
          paddingLeft: padWrapPadding,
          paddingRight: padWrapPadding,
        },
        '.gradient-border': {
          borderImageSlice: '1',
          borderImageSource: `linear-gradient(90deg,${gradientOneColor} 0%,${gradientTwoColor} 50%,${gradientThreeColor} 70%)`,
        },
        '.inverted': {
          borderImageSource: `linear-gradient(90deg,${gradientThreeColor} 0%,${gradientTwoColor} 50%,${gradientOneColor} 70%)`,
        },
        '.tool-tip': {
          '&:not(.back-to-top)': {
            position: 'relative',
          },
          '&:before': {
            borderRight: `${spacing2} solid transparent`,
            borderLeft: `${spacing2} solid transparent`,
            borderTop: `${spacing2} solid ${GLOBAL_BLACK}`,
            content: '""',
            opacity: '0',
            pointerEvents: 'none',
            position: 'absolute',
            transition: TOOL_TIP_TRANSITION,
            top: '0',
            left: '0',
          },
          '&:after': {
            backgroundColor: GLOBAL_BLACK,
            borderRadius: '0.375rem',
            color: '#f5f5f5',
            content: 'attr(aria-label)',
            fontSize: theme('spacing.3'),
            opacity: '0',
            padding: '0.25rem 0.375rem',
            pointerEvents: 'none',
            position: 'absolute',
            transform: 'translateY(-100%) translateX(-50%)',
            transition: TOOL_TIP_TRANSITION,
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
      })
    }),
  ],
}

export default config
