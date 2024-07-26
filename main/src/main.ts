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
  },
  {
    name: 'app2',
    entry: 'http://localhost:8082/app2',
    container: '#microApp',
    activeRule: '/app2'
  },
  {
    name: 'app3',
    entry: 'http://localhost:8083/app3',
    container: '#microApp',
    activeRule: '/app3'
  },
  {
    name: 'app4',
    entry: 'http://localhost:8084/app4',
    container: '#microApp',
    activeRule: '/app4'
  },
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
