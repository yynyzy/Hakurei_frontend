
export default [
  {
    path: '/component',
    component: () => import('@/views/pages/component/index.vue'),
    meta: { isAuth: true },
    children: [],
  }
]
