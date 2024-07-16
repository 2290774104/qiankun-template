import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

let app: any = null

const render = (props: QiankunProps) => {
  app = createApp(App)
  const { container } = props
  app.use(createPinia())
  app.use(router)
  app.use(ElementPlus)
  app.mount(container ? container.querySelector('#app')! : '#app')
}

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log(props)
    render(props)
  },
  bootstrap() {},
  unmount() {
    app.unmount()
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
