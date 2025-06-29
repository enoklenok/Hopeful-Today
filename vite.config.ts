import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@stores', replacement: '/src/stores' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
