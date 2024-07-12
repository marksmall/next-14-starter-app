/// <reference types="vitest" />
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    allowOnly: true,
    setupFiles: [resolve('./vitest.setup.ts')],
    include: ['**/*.test.{ts,tsx}'],
  },
});
