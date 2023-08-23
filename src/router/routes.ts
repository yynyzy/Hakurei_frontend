import { RouteRecordRaw } from 'vue-router';
import Home from 'pages/home';

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
    component: () => import('modules/cssView'),
    children: [
      {
        path: 'borderCssAnimation',
        component: () => import('modules/cssView/BorderCssAnimation'),
      },
      {
        path: 'autoSeatSelection',
        component: () => import('modules/cssView/AutoSeatSelection'),
      },
      {
        path: 'textScanningLoading',
        component: () => import('modules/cssView/TextScanningLoading'),
      },
    ],
  }
]
