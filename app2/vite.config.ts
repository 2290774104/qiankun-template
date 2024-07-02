import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import qiankun from 'vite-plugin-qiankun';

const name = require('./package.json').name;

export default defineConfig((env: ConfigEnv) => {
  const { mode } = env;
  return {
    plugins: [createVuePlugin(), qiankun(name, { useDevMode: true })],
    base: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
    server: {
      port: 8082,
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
  };
});
