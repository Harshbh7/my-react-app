import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-react-app/', // Replace with your repo name
  build: {
    outDir: 'docs', // GitHub Pages will serve from this folder
  }
});
