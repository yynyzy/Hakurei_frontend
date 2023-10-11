
export default [
  {
    path: '/component',
    component: () => import('@/views/component/pages/index.vue'),
    meta: { isAuth: true },
    children: [],
  }
]
