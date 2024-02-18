import { createApp } from 'vue';
import 'element-plus/dist/index.css'
import '@/assets/style/init.css';
import '@/assets/style/default.css';
import App from './App.vue';
import {
  router,
  ComponentPlugin,
  DirectivePlugin,
  VueAxios,
  createPinia,
} from './FrontendCore';

// md 编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});


const app = createApp(App);

app.
use(router).
use(ComponentPlugin).
use(DirectivePlugin).
use(VueAxios).
use(VMdEditor).
use(createPinia()).
mount('#app');


export default app;
