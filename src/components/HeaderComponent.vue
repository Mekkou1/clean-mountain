<template>
  <header class="navbar navbar-expand-lg navbar-light bg-turquoise">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Clean Mountain Logo" width="40" height="40" class="me-2">
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

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'HeaderComponent',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
header {
  background-image: url('/src/assets/fond-menthe-aquarelle_23-2150269799.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.navbar-brand {
  font-weight: bold;
  color: #FFD700 !important;
  text-transform: uppercase;
}

.nav-link {
  color: #000000 !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffd700 !important;
}

.btn-custom {
  background: linear-gradient(45deg, #00bcd4, #ffd700);
  border: none;
  border-radius: 25px;
  color: #ffffff;
  padding: 8px 16px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn-custom:hover {
  background: linear-gradient(45deg, #4dd0e1, #ffd700);
  color: #ffffff;
  text-decoration: none;
}
</style>
