
export default [
  {
    path: '/component',
    component: () => import('@@/modules/component'),
    children: [
      {
        path: 'waterFallComponent',
        component: () => import('@@/modules/component/WaterFallComponent'),
      },
    ],
  }
]
