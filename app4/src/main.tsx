import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper';

import App from './App.tsx';
import './index.css';

let root: any = null;

const render = (props: QiankunProps) => {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? container.querySelector('#root')!
      : document.getElementById('root')!
  ).render(
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
};

renderWithQiankun({
  mount(props: QiankunProps) {
    render(props);
  },
  bootstrap() {},
  unmount() {},
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
