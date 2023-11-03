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
