<template>
  <footer class="text-dark py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5>Clean Mountain</h5>
          <p>Société de nettoyage à Châtel et environs</p>
          <p>L'impeccable, naturellement.</p>
        </div>
        <div class="col-md-4 mb-3">
          <h5>Liens utiles</h5>
          <ul class="list-unstyled">
            <li><RouterLink to="/about" class="text-white">À propos</RouterLink></li>
            <li><RouterLink to="/services" class="text-white">Services</RouterLink></li>
            <li><RouterLink to="/eco" class="text-white">Écologique</RouterLink></li>
            <li><RouterLink to="/contact" class="text-white">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5>Contact</h5>
          <p>Châtel, France</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          <p>Email: contact@cleanmountain.fr</p>
          <RouterLink to="/legal" class="text-dark">Mentions légales</RouterLink>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
        <p>&copy; 2024 Clean Mountain. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'FooterComponent',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
footer {
  background-image: url('/src/assets/fond-menthe-aquarelle_23-2150269799.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

footer a:hover {
  color: #00bcd4 !important;
}
</style>
