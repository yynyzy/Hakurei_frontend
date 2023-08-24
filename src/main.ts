import { createApp } from 'vue'
import 'common/css/common.css'
import App from './App.vue'
import router from './router'

createApp(App).
  use(router).
  mount('#app')
