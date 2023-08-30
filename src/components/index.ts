// import Vue from '@/main';
import Header from './Header/index.vue';

// Vue.component('Header', Header);

// 注册全局组件
const Components = [
  Header,
]
const ComponentPlugin = {
  install(vm: any) {
  Components.forEach((c) => {
    vm.component(c.name, c)
  })
  }
};

export default ComponentPlugin;
