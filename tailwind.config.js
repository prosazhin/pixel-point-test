/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0E0A0F',
      white: '#ffffff',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        1: '#40BFAA',
        2: '#4D66E5',
        3: '#1AFFD9',
        4: '#F04242',
      },
      gray: {
        20: '#36293D',
        30: '#504158',
        40: '#695C70',
        50: '#83758A',
        60: '#9C91A1',
        70: '#B5ACB9',
        80: '#CDC8D0',
        90: '#E6E3E8',
        94: '#F0EEF1',
        98: '#FAF9FA',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
    extend: {
      dropShadow: {
        headline: '0px 0px 20px rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: () => ({
        'tabs-border':
          'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%);',
      }),
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
