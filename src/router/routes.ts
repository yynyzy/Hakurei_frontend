import { RouteRecordRaw } from 'vue-router';
import Home from '@/pages/home';

export const routes: RouteRecordRaw[] = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/css',
    component: () => import('@/pages/cssView/BorderCss'),
  }
]
