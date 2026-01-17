import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Clean Mountain - Nettoyage professionnel Châtel' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'À propos - Clean Mountain' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Services - Nettoyage professionnel Châtel' }
    },
    {
      path: '/eco',
      name: 'eco',
      component: () => import('../views/EcoView.vue'),
      meta: { title: 'Engagement écologique - Nettoyage écologique montagne' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact - Clean Mountain Châtel' }
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import('../views/QuoteView.vue'),
      meta: { title: 'Demande de devis - Nettoyage professionnel Châtel' }
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue'),
      meta: { title: 'Mentions légales - Clean Mountain' }
    },
  ],
})

export default router
