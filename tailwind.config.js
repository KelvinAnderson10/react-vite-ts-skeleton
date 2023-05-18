/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-background': "url('./src/assets/auth-background.png')",
        'green-button': "url('./src/assets/green-button.png')",
        'checked-checkbox': "url('./src/assets/checked-checkbox.png')",
        'unchecked-checkbox': "url('./src/assets/unchecked-checkbox.png')",
      }
    },
  },
  plugins: [],
}

