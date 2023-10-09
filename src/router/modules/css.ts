
export default [
  {
    path: '/css',
    component: () => import('@@/views/css/pages'),
    meta: { isAuth: true },
    children: [],
  },
]
