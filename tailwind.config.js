// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255,0,0)',
      },
      fontSize: {},
      spacing: {},
    },
  },
  plugins: [],
});
