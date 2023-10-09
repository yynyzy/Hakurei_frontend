
export default [
  {
    path: '/component',
    component: () => import('@@/views/component/pages'),
    meta: { isAuth: true },
    children: [],
  }
]
