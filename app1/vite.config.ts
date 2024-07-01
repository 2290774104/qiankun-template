import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

import qiankun from 'vite-plugin-qiankun'
const { name } = require('./package')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    base: mode === 'development' ? './' : '/app1',
    plugins: [
      vue(),
      vueJsx(),
      // VueDevTools(),
      qiankun(name, { useDevMode: true })
    ],
    server: {
      port: 8081
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
