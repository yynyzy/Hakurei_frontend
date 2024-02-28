import { RouteRecordRaw } from 'vue-router';
import Login from '@/views/pages/login/index.vue';
// import Home from '@/views/pages/home/index.vue';
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
    // 暂时先将首页设置为 blog 模块
    component: () => import('@/views/pages/blog/index.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/pages/blog/home.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'myArticle',
        component: () => import('@/views/pages/blog/myArticle.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'article/:id',
        component: () => import('@/views/pages/blog/articleDetail.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'create',
        component: () => import('@/views/pages/blog/articleCreate.vue'),
        meta: { isAuth: true },
        children: [],
      },
    ],
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
