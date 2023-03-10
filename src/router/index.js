import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'template-syntax',
          component: () => import('../components/Template-Syntax.vue')
        },
        {
          path: '/reactivity',
          name: 'reactivity',
          component: () => import('../components/Reactivity.vue')
        },
        {
          path: '/computed',
          name: 'computed',
          component: () => import('../components/Computed.vue')
        },
        {
          path: '/binding',
          name: 'binding',
          component: () => import('../components/Binding.vue')
        },
        {
          path: '/condition',
          name: 'condition',
          component: () => import('../components/Condition.vue')
        },
        {
          path: '/list',
          name: 'list',
          component: () => import('../components/ListRendering.vue')
        },
        {
          path: '/events',
          name: 'events',
          component: () => import('../components/Events.vue')
        },
        {
          path: '/form-binding',
          name: 'form-binding',
          component: () => import('../components/FormBinding.vue')
        },
        {
          path: '/hooks',
          name: 'hooks',
          component: () => import('../components/Hooks.vue')
        },
        {
          path: '/watch',
          name: 'watcn',
          component: () => import('../components/Watchers.vue')
        },
        {
          path: '/refs',
          name: 'refs',
          component: () => import('../components/Refs.vue')
        },
        {
          path: '/components',
          name: 'components',
          component: () => import('../components/Components.vue')
        },

      ]
    },

  ]
})

export default router
