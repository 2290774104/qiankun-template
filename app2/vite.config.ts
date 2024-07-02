import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path'

export default defineConfig({
  plugins: [createVuePlugin()],
  server: {
    port: 8082
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') }
    ]
  }
});
