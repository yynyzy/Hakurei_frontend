
export default [
  {
    path: '/animationVideo',
    component: () => import('@/views/pages/animationVideo/index.vue'),
    meta: { isAuth: true },
    children: [],
  }
]
