import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/style-store/', // Replace 'style-store' with your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});