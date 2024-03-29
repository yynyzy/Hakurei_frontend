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
        path: 'periodical',
        component: () => import('@/views/pages/yixiv/periodical.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'periodical/:periodicalId',
        component: () => import('@/views/pages/yixiv/periodicalDetail.vue'),
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
      {
        path: 'search/author/:key',
        component: () => import('@/views/pages/yixiv/searchAuthor.vue'),
        meta: { isAuth: true },
        children: [],
      },
      {
        path: 'search/tags/:key',
        component: () => import('@/views/pages/yixiv/searchTags.vue'),
        meta: { isAuth: true },
        children: [],
      },
    ],
  },
  {
    path: '/blog',
    component: () => import('@/views/pages/blog/index.vue'),
    meta: { isAuth: true },
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
    path: '/webRtc',
    component: () => import('@/views/pages/webRtc/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
  {
    path: '/component',
    component: () => import('@/views/pages/customComponent/index.vue'),
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
