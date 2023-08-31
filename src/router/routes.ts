import { RouteRecordRaw } from 'vue-router';
import CSSRouter from './modules/css';
import componentRouter from './modules/component';
import Home from '@@/pages/home';

export const routes: RouteRecordRaw[] = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/home',
    component: Home,
  },
  ...CSSRouter,
  ...componentRouter,
]
