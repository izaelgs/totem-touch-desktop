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
      name: 'Home',
      component: () => import('../views/Dashboard/DashboardIndex.vue'),
      children: [
        // {
        //   path: '',
        //   name: 'Home',
        //   component: () => import('../views/dashboard/HomeView/IndexComponent.vue'),
        // },
        // {
        //   path: 'edit-profile',
        //   name: 'Edit Profile',
        //   component: () => import('../views/dashboard/EditProfileView/IndexComponent.vue'),
        // }
      ],
    },
  ]
})

export default router
