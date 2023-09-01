import { App, Component } from 'vue';
import Header from './Header/index.vue';

// 注册全局组件
const Components: [string, Component][] = [
  ['Header', Header],
];

const ComponentPlugin = {
  install(vm: App) {
  Components.forEach((c) => {
    vm.component(c[0], c[1])
  })
  }
};

export default ComponentPlugin;
