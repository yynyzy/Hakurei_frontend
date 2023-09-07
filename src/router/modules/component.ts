
export default [
  {
    path: '/component',
    component: () => import('@@/views/component'),
    meta: { isAuth: true },
    children: [
      {
        path: 'waterFallComponent',
        component: () => import('@@/views/component/WaterFallComponent'),
      },
    ],
  }
]
