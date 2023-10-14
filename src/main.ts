import { createApp } from 'vue';
import '@/assets/style/init.css';
import App from './App.vue';
import {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
  createPinia,
} from './FrontendCore'
// import { message } from 'ant-design-vue'

const app = createApp(App);

// app.config.globalProperties.$message = message;

app.
  use(router).
  use(ComponentPlugin).
  use(DirectivePlugin).
  use(VueAxios).
  use(createPinia()).
  mount('#app');

export default app;
