/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          50: '#f4f8fb',
          100: '#e5f0f6',
          200: '#cfe1ed',
          300: '#a7c9df',
          400: '#7ba9ce',
          500: '#5c8bb8',
          600: '#4d75a3',
          700: '#41618a',
          800: '#385272',
          900: '#32465e',
          950: '#202d3e',
        },
        navy: {
          800: '#0c274c',
          900: '#071e3d',
          950: '#041329',
        },
        steel: {
          light: '#7ea4c4',
          DEFAULT: '#5e85a8',
          dark: '#4a6f91',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Gujarati"', 'Inter', 'sans-serif'],
        gujarati: ['"Noto Sans Gujarati"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(12, 39, 76, 0.08), 0 0 1px 1px rgba(12, 39, 76, 0.03)',
        'hero': '0 25px 60px -20px rgba(16, 42, 77, 0.18)',
      }
    },
  },
  plugins: [],
}
