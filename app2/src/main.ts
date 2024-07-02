import './style.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper';

Vue.use(ElementUI)

const render = (props: QiankunProps) => {
  const { container } = props;
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app')! : '#app');
};

renderWithQiankun({
  mount(props: QiankunProps) {
    console.log(props);
    render(props);
  },
  bootstrap() {},
  unmount() {},
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
