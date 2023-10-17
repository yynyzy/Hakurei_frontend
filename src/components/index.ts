import { App, Component } from 'vue';
import YThemeController from './YThemeController/index.vue';
import YHeader from './YHeader/index.vue';
import YSidebar from './YSidebar/index.vue';
import YAvatar from './YAvatar/index.vue';
import YSupport from './YSupport/index.vue';
import YModal from './YModal/index.vue';

import {
  Menu
} from 'ant-design-vue';

// 注册自定义全局组件
const CustomComponents: [string, Component][] = [
  ['YThemeController', YThemeController],
  ['YHeader', YHeader],
  ['YSidebar', YSidebar],
  ['YAvatar', YAvatar],
  ['YSupport', YSupport],
  ['YModal', YModal],
];

// 注册 Antd 全局组件
const AntdComponents: Component[] = [
  Menu,
];

const ComponentPlugin = {
  install(vm: App) {
    CustomComponents.forEach((component) => {
      vm.component(component[0], component[1])
    });
    AntdComponents.forEach((component) => {
      vm.component(component.name!, component)
    })
  }
};

export default ComponentPlugin;
