/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-low': 'rgb(var(--surface-low) / <alpha-value>)',
        'surface-highest': 'rgb(var(--surface-highest) / <alpha-value>)',
        'on-surface': 'rgb(var(--on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--on-surface-variant) / <alpha-value>)',
        'outline-variant': 'rgb(var(--outline-variant) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--primary-container) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-container': 'rgb(var(--secondary-container) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        atmospheric: '0px 20px 40px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        luminous:
          'linear-gradient(90deg, rgb(var(--primary)) 0%, rgb(var(--primary-container)) 55%, rgb(var(--secondary)) 100%)',
        'surface-fade':
          'radial-gradient(900px 400px at 50% 0%, rgba(0, 210, 255, 0.18), rgba(19, 19, 20, 0) 70%)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(.2,.9,.2,1)',
      },
      transitionDuration: {
        500: '500ms',
      },
    },
  },
  plugins: [],
}

