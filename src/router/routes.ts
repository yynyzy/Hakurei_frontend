import { RouteRecordRaw } from 'vue-router';
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
  {
    path: '/css',
    component: () => import('@@/modules/css'),
    children: [
      {
        path: 'borderCssAnimation',
        component: () => import('@@/modules/css/BorderCssAnimation'),
      },
      {
        path: 'autoSeatSelection',
        component: () => import('@@/modules/css/AutoSeatSelection'),
      },
      {
        path: 'textScanningLoading',
        component: () => import('@@/modules/css/TextScanningLoading'),
      },
    ],
  },
  {
    path: '/component',
    component: () => import('@@/modules/component'),
    children: [
      {
        path: 'waterFallComponent',
        component: () => import('@@/modules/component/WaterFallComponent'),
      },
    ],
  }
]
