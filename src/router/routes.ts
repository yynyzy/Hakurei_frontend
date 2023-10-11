import { RouteRecordRaw } from 'vue-router';
import CSSRouter from './modules/css';
import componentsRouter from './modules/component';
import Login from '@/pages/pages/login/index.vue';
import Home from '@/pages/pages/home/index.vue';
import Theme from '@/pages/pages/theme/index.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    meta: { isAuth: true },
    component: Home,
  },
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/theme',
    component: Theme,
  },
  ...CSSRouter,
  ...componentsRouter,
]
