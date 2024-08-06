import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IdlePage',
      component: () => import('../views/IdlePage.vue')
    },
    {
      path: '/order-type-selection',
      name: 'OrderTypeSelection',
      component: () => import('../views/OrderTypeSelection.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard/Index.vue'),
    },
    {
      path: '/product-complements/:id',
      name: 'ProductComplements',
      component: () => import('../views/ProductComplements/Index.vue'),
      props: true,
    },
    {
      path: '/costumer-identification',
      name: 'CostumerIdentification',
      component: () => import('../views/CostumerIdentification.vue'),
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment.vue'),
    },
  ]
})

export default router
