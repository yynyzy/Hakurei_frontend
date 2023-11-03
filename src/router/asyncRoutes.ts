export default [
  {
    path: '/animationVideo',
    component: () => import('@/views/pages/animationVideo/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
  {
    path: '/yixiv',
    component: () => import('@/views/pages/yixiv/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
  {
    path: '/component',
    component: () => import('@/views/pages/component/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
  {
    path: '/css',
    component: () => import('@/views/pages/css/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
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
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
  {
    name: '博客',
    route: '/blog',
  },
];
