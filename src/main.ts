import { createApp } from 'vue';
import '@/assets/style/init.css';
import App from './App.vue';
import {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
} from './FrontendCore'

const app = createApp(App);
app.
  use(router).
  use(ComponentPlugin).
  use(DirectivePlugin).
  use(VueAxios).
  mount('#app');

export default app;
