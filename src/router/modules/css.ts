
export default [
  {
    path: '/css',
    component: () => import('@@/modules/css'),
    children: [
      {
        path: 'borderCssAnimation',
        component: () => import('@@/modules/css/BorderCssAnimation'),
      },
      {
        path: 'autoSeatSelection',
        component: () => import('@@/modules/css/AutoSeatSelection'),
      },
      {
        path: 'textScanningLoading',
        component: () => import('@@/modules/css/TextScanningLoading'),
      },
    ],
  },
]
