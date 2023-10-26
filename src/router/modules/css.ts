
export default [
  {
    path: '/css',
    component: () => import('@/views/pages/css/index.vue'),
    meta: { isAuth: true },
    children: [],
  },
]
