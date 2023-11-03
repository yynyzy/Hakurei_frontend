import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/login/index.vue';
import Home from '@/views/pages/home/index.vue';
import Theme from '@/views/pages/theme/index.vue';
import asyncRoutes from './asyncRoutes';

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
  ...asyncRoutes,
]
