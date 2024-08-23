import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin'; 

const config: Config = {
  content: [
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wood': "url('/images/wood-background.webp')",
        'diamonds': "url('/images/diamonds.svg')",
      },
      colors: {
        zinc: '#12121c',
        pink: {
          100: '#eee3f2',
          200: '#e5d4ed',
        },
        offwhite: '#f5eef7',
        purple: {
          100: '#a8a0d9',
          200: '#794e8d',
        },
        gradientpurple: '#794e8e',
        gradientpink: '#ae4971',
        gradientlightpurple: '#a8a1d9',
      },
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        inconsolata: ['"Inconsolata", monospace'],
        'source-sans': ['"Source Sans 3", sans-serif'],
        urbanist: ['"Urbanist", sans-serif'],
      },
      clipPath: {
        'cut-corners': 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
      },
      transitionTimingFunction: {
        'steps-40-end': 'steps(40, end)',
        'step-end-infinite': 'step-end infinite',
        forwards: 'forwards',
      },
      animation: {
        typetext: 'typing 3.5s steps(40, end), blinkcaret 0.75s step-end infinite, borderfade 0s 1.5s forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 95%': { transform: 'rotate(0)' },
          '25%, 75%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        typing: {
          from: { maxWidth: '0' },
          to: { maxWidth: '100%' },
        },
        blinkcaret: {
          from: { borderColor: 'transparent' },
          '50%': { borderColor: '#aab9bb' },
        },
        borderfade: {
          to: { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.clip-path-cut-corners': {
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        },
      });
    }),
  ],
};

export default config;
