
export default [
  {
    path: '/component',
    component: () => import('@@/views/component'),
    meta: { isAuth: true },
    children: [],
  }
]
