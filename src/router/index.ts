import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/costumer-identification', // Adiciona o parâmetro de rota
      name: 'CostumerIdentification',
      component: () => import('../views/CostumerIdentification.vue'),
    },
  ]
})

export default router
