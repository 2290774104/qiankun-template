import Vue, { DirectiveOptions } from 'vue';

import 'normalize.css';

import '@/styles/index.scss'; // global css

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from '@/router';

import '@/permission';
import '@/icons';

import * as filters from '@/filters';
import * as directives from '@/directives';

import plugin from '@/plugin';

// 注册过滤函数
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key]);
});
// 注册指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

Vue.use(ElementUI);
Vue.use(plugin);

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, '$config', {
  value: { baseURL: 'http://localhost:8081' }
});

let app: null | Vue = null;

interface IProps {
  [key: string]: any;
  container?: HTMLElement;
}

export const render = (props: IProps = {}) => {
  if ((window as any).__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = (window as any)
      .__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }

  const { container } = props;
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app')! : '#app');
};

if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log('并不是qiankun渲染');
  render();
}

export async function bootstrap() {
  console.log('app bootstraped');
}

export async function mount(props: any) {
  console.log(props);
  props.onGlobalStateChange((state: any) => {
    console.log('子应用接收的参数', state);
  }, true);
  render(props);
}

export async function unmount(props: any) {
  if (app) {
    app.$destroy();
    app = null;
  }
  console.log(props);
}

export async function update(props: any) {
  console.log('update props', props);
}
