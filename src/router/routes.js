
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/view', component: () => import('../pages/view.vue') },
      { path: '/main', component: () => import('../pages/main.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
