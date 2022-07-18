/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        md: '0rem',
        lg: '0rem',
        xl: '0rem'
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1180px',
      xl: '1440px'
    },
    boxShadow: {
      'md': '0px 8px 24px rgba(149, 157, 165, 0.2)', 
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'main': '#54ACD2',
      'blue': '#227FD6'
    }
  },
  plugins: []
}
