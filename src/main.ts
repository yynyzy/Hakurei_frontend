import { createApp } from 'vue';
import '@@/styles/common.css';
import '@/assets/init.css';
import App from './App.vue';
import router from './router';
import ComponentPlugin from './components';
import DirectivePlugin from './directives';
import { VueAxios } from '@/utils/request';

const Vue = createApp(App);
Vue.
  use(router).
  use(ComponentPlugin).
  use(DirectivePlugin).
  use(VueAxios).
  mount('#app');

export default Vue;
