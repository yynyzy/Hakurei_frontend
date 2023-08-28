
// 注册这个可以在 Vue 实例上挂上 $http 与 $axios
export default {
  install(vm: any, instance: any) {
    // if (this.hasInstalled) {
    //   return;
    // }
    // this.hasInstalled = true;
    if (!instance) {
      // eslint-disable-next-line no-console
      console.error('You have to install axios.');
      return;
    }
    vm.config.$http = instance.service;
    vm.config.$axios = instance.baseService;
  },
};
