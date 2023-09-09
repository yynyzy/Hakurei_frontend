import router from './router';
import ComponentPlugin from './components';
import DirectivePlugin from './directives';
import { VueAxios } from '@/utils/request';
import { createPinia } from 'pinia';
// app.use(ComponentPlugin);
export {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
  createPinia,
}
