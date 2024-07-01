import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { registerMicroApps, start } from 'qiankun'
import type { RegistrableApp } from 'qiankun'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)

const apps: RegistrableApp<any>[] = [
  {
    name: 'vue3',
    entry: '//localhost:8081',
    container: '#subapp-viewport',
    activeRule: '/app1'
  }
]

registerMicroApps(apps)

app.mount('#app')

start()
