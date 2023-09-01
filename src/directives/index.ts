import { App, Directive } from 'vue';
import drag from './Drag';
// import Loading from './Loading';


const directives: {[key: string]: Directive } = {
  drag,
}

const DirectivePlugin = {
  install(vm: App){
      Object.keys(directives).forEach(key => {
          // 注册自定义指令
          vm.directive(key, directives[key]);
      });
  }
};

export default DirectivePlugin;
