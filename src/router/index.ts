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
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
      meta: { title: "Maquis d'Angie - Clean Mountain" }
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    // Si l'utilisateur utilise les boutons Précédent/Suivant du navigateur,
    // on restaure la position sauvegardée. Sinon, on remonte tout en haut.
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

// Guard pour mettre à jour le titre de la page dynamiquement
router.beforeEach((to) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title
  }
})

export default router
