import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/jokes': 'http://localhost:3000', // Proxy to backend
    },
  },
  plugins: [react()],
});
