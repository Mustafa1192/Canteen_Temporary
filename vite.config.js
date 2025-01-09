import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, './tailwind.config.js'),
    },
  },
});
