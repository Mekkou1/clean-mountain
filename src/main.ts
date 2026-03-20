import './assets/brand.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(i18n)
app.use(router)

// Mise à jour automatique du titre de la page
router.afterEach((to) => {
  const title = to.meta.title as string || 'Clean Mountain'
  document.title = title
})

// Synchronisation de l'attribut lang de la balise <html> avec i18n
watch(
  () => i18n.global.locale.value,
  (newLocale) => {
    document.documentElement.setAttribute('lang', newLocale)
  },
  { immediate: true }
)

app.mount('#app')
