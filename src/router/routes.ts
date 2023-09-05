import { RouteRecordRaw } from 'vue-router';
import CSSRouter from './modules/css';
import componentsRouter from './modules/component';
import Login from '@@/pages/login';
import Home from '@@/pages/home';

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login
  },
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/home',
    component: Home,
  },
  ...CSSRouter,
  ...componentsRouter,
]
