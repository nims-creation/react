/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#F0F4FF",
        "coral-red": "#FF4B36",
        "slate-gray": "#4A5568",
        "pale-blue": "#EDF2FF",
        "white-400": "rgba(255, 255, 255, 0.85)",
        "accent-teal": "#38B2AC",
        "accent-indigo": "#667EEA",
        "accent-purple": "#9F7AEA",
        "accent-orange": "#ED8936",
        "dark-blue": "#2D3748",
        "light-gray": "#F7FAFC",
        "success": "#48BB78",
        "warning": "#F6AD55",
        "error": "#F56565",
        "info": "#4299E1",
        // Dark mode colors
        'dark-primary': "#1A202C",
        'dark-secondary': "#2D3748",
        'dark-accent': "#4A5568",
        'dark-text': "#E2E8F0",
        'dark-muted': "#A0AEC0",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 8px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "wide": "1440px"
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-in': 'slideIn 0.9s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}