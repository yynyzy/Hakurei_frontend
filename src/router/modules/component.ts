
export default [
  {
    path: '/component',
    component: () => import('@@/views/component'),
    children: [
      {
        path: 'waterFallComponent',
        component: () => import('@@/views/component/WaterFallComponent'),
      },
    ],
  }
]
