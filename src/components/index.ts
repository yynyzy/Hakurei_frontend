import { App, Component } from 'vue';
import Header from './Header/index.vue';
import Sidebar from './Sidebar/index.vue';

// 注册全局组件
const Components: [string, Component][] = [
  ['Header', Header],
  ['Sidebar', Sidebar],
];

const ComponentPlugin = {
  install(vm: App) {
  Components.forEach((c) => {
    vm.component(c[0], c[1])
  })
  }
};

export default ComponentPlugin;
