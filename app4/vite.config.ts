import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';

// const { name } = require('./package.json');
const { name } = require('./package');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? './' : '/app4',
    plugins: [
      // react(),
      qiankun(name, { useDevMode: true }),
    ],
    server: {
      port: 8084,
    },
  };
});
