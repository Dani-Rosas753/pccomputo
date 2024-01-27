
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/aspel', component: () => import('pages/Aspel.vue') },
      { path: '/cctv', component: () => import('pages/Cctv.vue') },
      { path: '/alarmas', component: () => import('pages/Alarmas.vue') },
      { path: '/gps', component: () => import('pages/Gps.vue') },
      { path: '/redes', component: () => import('pages/Redes.vue') },
      { path: '/impresoras', component: () => import('pages/Impresoras.vue') },
      { path: '/reparacion', component: () => import('pages/Reparacion.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
