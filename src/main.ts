import { createApp } from 'vue';
import 'element-plus/dist/index.css'
import '@/assets/style/init.css';

import App from './App.vue';
import {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
  createPinia,
} from './FrontendCore'

const app = createApp(App);

app.
  use(router).
  use(ComponentPlugin).
  use(DirectivePlugin).
  use(VueAxios).
  use(createPinia()).
  mount('#app');

export default app;
