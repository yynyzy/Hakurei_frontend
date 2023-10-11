
export default [
  {
    path: '/css',
    component: () => import('@/views/css/pages/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
]
