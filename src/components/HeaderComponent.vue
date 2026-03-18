<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-brand-green py-3 shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo_clean.jpg" alt="Clean Mountain Logo" width="45" height="45" class="me-2 rounded shadow-sm" style="object-fit: contain; background: white;">
        CLEAN MOUNTAIN
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">À propos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/services">Services</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/eco">Écologique</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link btn btn-custom ms-2" to="/quote">Devis</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'HeaderComponent',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--cm-green) !important;
  background-image: none !important;
}

.navbar-brand {
  font-weight: 800;
  color: var(--cm-gold) !important;
  font-family: 'Outfit', 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

.nav-link {
  color: #ffffff !important;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--cm-gold) !important;
}

.btn-custom {
  background: linear-gradient(45deg, var(--cm-green), var(--cm-gold));
  border: 1px solid var(--cm-gold);
  border-radius: 25px;
  color: #ffffff !important;
  padding: 8px 20px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background: linear-gradient(45deg, #0b4530, #d4af37);
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>
