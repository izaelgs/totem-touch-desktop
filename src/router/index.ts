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
      path: '/product-complements/:id', // Adiciona o parâmetro de rota
      name: 'ProductComplements',
      component: () => import('../views/ProductComplements/Index.vue'),
      props: true, // Permite passar o parâmetro como props para o componente
    },
  ]
})

export default router
