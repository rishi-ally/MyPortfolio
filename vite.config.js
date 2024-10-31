import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Comment this out for local development
   base: '/MyPortfolio/',
});
