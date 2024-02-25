import { App, Component } from 'vue';
import YStatusBar from './YStatusBar/index.vue';
import YThemeController from './YThemeController/index.vue';
import YHeader from './YHeader/index.vue';
import YSidebar from './YSidebar/index.vue';
import YAvatar from './YAvatar/index.vue';
import YSupport from './YSupport/index.vue';
import YModal from './YModal/index.vue';

import {
  ElButton,
  ElMenu,
  ElInput,
  ElTag,
  ElImage,
  ElMenuItem,
  ElPagination,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCarousel,
  ElCarouselItem,
  ElDialog,
  ElRadioGroup,
  ElRadioButton,
  ElIcon,
} from 'element-plus';

// 按需注册 element-plus 全局组件
const ElComponents: Component[] = [
  ElDialog,
  ElButton,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElTag,
  ElImage,
  ElPagination,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCarousel,
  ElCarouselItem,
  ElRadioGroup,
  ElRadioButton,
  ElIcon,
];

// 注册自定义全局组件
const CustomComponents: [string, Component][] = [
  ['YStatusBar', YStatusBar],
  ['YThemeController', YThemeController],
  ['YHeader', YHeader],
  ['YSidebar', YSidebar],
  ['YAvatar', YAvatar],
  ['YSupport', YSupport],
  ['YModal', YModal],
];

const ComponentPlugin = {
  install(vm: App) {
    CustomComponents.forEach((component) => {
      vm.component(component[0], component[1])
    });
    ElComponents.forEach((component) => {
      vm.component(component.name!, component)
    });
  }
};

export default ComponentPlugin;
