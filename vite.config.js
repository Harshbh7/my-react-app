import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-react-app/', // Replace 'my-react-app' with your GitHub repo name
});
