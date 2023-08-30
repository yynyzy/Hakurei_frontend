import { createApp } from 'vue'
import '@@/common/css/common.css'
import App from './App.vue'
import router from './router'
import ComponentPlugin from './components';
import { VueAxios } from '@/utils/request';

const Vue = createApp(App);
Vue.
  use(router).
  use(ComponentPlugin).
  use(VueAxios).
  mount('#app');

export default Vue;
