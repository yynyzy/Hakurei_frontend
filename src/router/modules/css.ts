
export default [
  {
    path: '/css',
    component: () => import('@@/views/css'),
    children: [
      {
        path: 'borderCssAnimation',
        component: () => import('@@/views/css/BorderCssAnimation'),
      },
      {
        path: 'autoSeatSelection',
        component: () => import('@@/views/css/AutoSeatSelection'),
      },
      {
        path: 'textScanningLoading',
        component: () => import('@@/views/css/TextScanningLoading'),
      },
    ],
  },
]
