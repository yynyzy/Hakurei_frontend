
export default [
  {
    path: '/css',
    component: () => import('@@/views/css'),
    meta: { isAuth: true },
    children: [],
  },
]
