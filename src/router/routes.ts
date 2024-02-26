import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/login/index.vue';
// import Home from '@/views/pages/home/index.vue';
import Blog from '@/views/pages/blog/index.vue';
import Theme from '@/views/pages/theme/index.vue';
import asyncRoutes from './asyncRoutes';

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
    meta: { isAuth: true },
    component: Blog, // 暂时先将首页设置为 blog 模块
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
  // {
  //   name: 'JS 妙用',
  //   route: '/js',
  // },
];

export const GlobalHeaderRightRoute: Array<Tab> = [

  {
    name: 'WebRTC视频',
    route: '/webRtc',
  },
  {
    name: '博客',
    route: '/blog',
  },
];

export const StatusBarRoute: Array<Tab> = [
  {
    name: '首页',
    route: '/home',
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
    name: 'WebRTC视频',
    route: '/webRtc',
  },
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '设置',
    route: '/theme',
  },
];
