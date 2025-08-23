import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New sophisticated color palette
        'barn-red': {
          DEFAULT: '#780000',
          100: '#180000',
          200: '#310000',
          300: '#490000',
          400: '#620000',
          500: '#780000',
          600: '#c80000',
          700: '#ff1616',
          800: '#ff6464',
          900: '#ffb1b1'
        },
        'fire-brick': {
          DEFAULT: '#c1121f',
          100: '#260406',
          200: '#4d070c',
          300: '#730b12',
          400: '#990e17',
          500: '#c1121f',
          600: '#eb2330',
          700: '#f05a64',
          800: '#f59198',
          900: '#fac8cb'
        },
        'papaya-whip': {
          DEFAULT: '#fdf0d5',
          100: '#593c04',
          200: '#b17908',
          300: '#f5ae22',
          400: '#f9cf7b',
          500: '#fdf0d5',
          600: '#fdf2dc',
          700: '#fef5e5',
          800: '#fef9ed',
          900: '#fffcf6'
        },
        'prussian-blue': {
          DEFAULT: '#003049',
          100: '#00090e',
          200: '#00131d',
          300: '#001c2b',
          400: '#002539',
          500: '#003049',
          600: '#00679f',
          700: '#00a0f7',
          800: '#50c2ff',
          900: '#a7e0ff'
        },
        'air-superiority-blue': {
          DEFAULT: '#669bbc',
          100: '#122028',
          200: '#233f51',
          300: '#355f79',
          400: '#477fa2',
          500: '#669bbc',
          600: '#85afc9',
          700: '#a4c3d7',
          800: '#c2d7e4',
          900: '#e1ebf2'
        },
        // Semantic color mapping
        bg: {
          DEFAULT: '#003049', // prussian-blue
          secondary: '#122028', // air-superiority-blue-100
          tertiary: '#780000', // barn-red
          light: '#fdf0d5', // papaya-whip
        },
        surface: {
          DEFAULT: '#122028', // air-superiority-blue-100
          secondary: '#233f51', // air-superiority-blue-200
          light: '#fdf0d5', // papaya-whip
        },
        brand: {
          DEFAULT: '#c1121f', // fire-brick
          light: '#f05a64', // fire-brick-700
          accent: '#780000', // barn-red
        },
        text: {
          primary: '#fdf0d5', // papaya-whip
          secondary: '#669bbc', // air-superiority-blue
          muted: '#355f79', // air-superiority-blue-300
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'lead': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
