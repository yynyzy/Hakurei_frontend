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

interface Tab {
  name: string,
  route: string,
}

export const GlobalHeaderLeftRoute: Array<Tab> = [
  {
    name: '首页',
    route: '/home',
  },
  {
    name: '动漫视频',
    route: '/animationVideo',
  },
  {
    name: 'yixiv',
    route: '/yixiv',
  },
  {
    name: '自定义组件',
    route: '/component',
  },
  {
    name: 'CSS 特效',
    route: '/css',
  },
  {
    name: 'JS 妙用',
    route: '/js',
  },
];

export const GlobalHeaderRightRoute: Array<Tab> = [
  {
    name: '博客',
    route: '/test0',
  },
  {
    name: '博客',
    route: '/test1',
  },
  {
    name: '博客',
    route: '/test2',
  },
  {
    name: '博客',
    route: '/blog',
  },
];
