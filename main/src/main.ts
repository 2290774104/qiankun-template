import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Antd from 'ant-design-vue'

import { registerMicroApps, start } from 'qiankun'
import type { RegistrableApp, FrameworkLifeCycles } from 'qiankun'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

const apps: RegistrableApp<any>[] = [
  {
    name: 'app1',
    entry: 'http://localhost:8081/app1',
    container: '#microApp',
    activeRule: '/app1'
  }
]

const lifeCycles: FrameworkLifeCycles<any> = {
  beforeLoad: (app) => {
    return new Promise(() => {
      console.log(app)
    })
  }
  // beforeMount
  // afterMount
  // beforeUnmount
  // afterUnmount
}

registerMicroApps(apps)
start()
