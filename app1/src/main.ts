import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const render = (props: QiankunProps) => {
  const { container } = props
  app.use(createPinia())
  app.use(router)
  app.mount(container ? container.querySelector('#app')! : '#app')
}

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log(props)
    render(props)
  },
  bootstrap() {},
  unmount() {},
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}
