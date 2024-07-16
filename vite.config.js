import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: '.',
    sourcemap: true,
    minify: true, // Enable minification
  },
  server: {
    port: 3000,
  },
});
