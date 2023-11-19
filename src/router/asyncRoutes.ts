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
    redirect: '',
    meta: { isAuth: true },
    children: [
      {
        path: '',
        component: () => import('@/views/pages/yixiv/home.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'new',
        component: () => import('@/views/pages/yixiv/newWorks.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'ranking',
        component: () => import('@/views/pages/yixiv/ranking.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'illust/:pictureId',
        component: () => import('@/views/pages/yixiv/illust.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'author/:userId',
        component: () => import('@/views/pages/yixiv/author.vue'),
        meta: { isAuth: true },
        children: [],
      },
    ],
  },
  {
    path: '/blog',
    component: () => import('@/views/pages/blog/index.vue'),
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
