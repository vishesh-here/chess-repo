
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'medieval': ['MedievalSharp', 'serif'],
        'manuscript': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Crimson Pro', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'stone-texture': "url('/assets/medieval/stone-texture.jpg')",
        'parchment-texture': "url('/assets/medieval/parchment-texture.jpg')",
        'medieval-border': "url('/assets/medieval/medieval-border.svg')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Medieval theme colors
        medieval: {
          stone: '#8B7355',
          'stone-light': '#A0896B',
          'stone-dark': '#6B5B47',
          gold: '#D4AF37',
          'gold-light': '#F4D03F',
          'gold-dark': '#B7950B',
          crimson: '#8B0000',
          'crimson-light': '#DC143C',
          'crimson-dark': '#5D0000',
          parchment: '#F5E6D3',
          'parchment-dark': '#E8D5B7',
          bronze: '#CD7F32',
          'bronze-light': '#D2B48C',
          'bronze-dark': '#8B4513',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'medieval-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        'castle-rise': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'medieval-glow': 'medieval-glow 2s ease-in-out infinite',
        'castle-rise': 'castle-rise 0.6s ease-out forwards',
      },
      boxShadow: {
        'medieval': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'medieval-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
        'medieval-xl': '0 20px 25px -5px rgba(139, 69, 19, 0.1), 0 10px 10px -5px rgba(139, 69, 19, 0.04)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow-medieval': {
          textShadow: '2px 2px 4px rgba(139, 69, 19, 0.5)',
        },
        '.border-medieval': {
          borderImage: 'linear-gradient(45deg, #8B4513, #D4AF37, #8B4513) 1',
        },
        '.bg-medieval-pattern': {
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(139, 115, 85, 0.05), rgba(107, 91, 71, 0.05))
          `,
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config;
