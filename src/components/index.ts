import { App, Component } from 'vue';
import YThemeController from './YThemeController/index.vue';
import YHeader from './YHeader/index.vue';
import YSidebar from './YSidebar/index.vue';
import YAvatar from './YAvatar/index.vue';

// 注册全局组件
const Components: [string, Component][] = [
  ['YThemeController', YThemeController],
  ['YHeader', YHeader],
  ['YSidebar', YSidebar],
  ['YAvatar', YAvatar],
];

const ComponentPlugin = {
  install(vm: App) {
  Components.forEach((c) => {
    vm.component(c[0], c[1])
  })
  }
};

export default ComponentPlugin;
