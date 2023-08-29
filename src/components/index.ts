// import Vue from '@/main';
import Header from './Header/index.vue';

// Vue.component('Header', Header);

const Components = [
  Header,
]
const ComponentPlugin = {
  install(vm: any) {
  Components.forEach((c) => {
    // 循环使用 vue.component(component.name, component) 注册写好组件
    vm.component(c.name, c)
  })
  }
};

export default ComponentPlugin;
