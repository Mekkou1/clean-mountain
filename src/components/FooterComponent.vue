<template>
  <footer class="text-white py-4 mt-5 bg-brand-green">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="d-flex align-items-center mb-3">
            <img src="@/assets/logo_clean.jpg" alt="Clean Mountain Logo" width="45" height="45" class="me-3 rounded shadow-sm" style="object-fit: contain; background: white;">
            <h5 class="text-brand-gold text-uppercase fw-bold m-0">Clean Mountain & CO</h5>
          </div>
          <p>{{ $t('footer.tagline') }}</p>
          <p><em>{{ $t('hero.title') }}</em></p>
        </div>
        <div class="col-md-4 mb-3">
          <h5 class="text-brand-gold mb-3 text-uppercase fw-bold">{{ $t('footer.links_title') }}</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><RouterLink to="/about" class="text-white text-decoration-none hover-gold">{{ $t('nav.about') }}</RouterLink></li>
            <li class="mb-2"><RouterLink to="/services" class="text-white text-decoration-none hover-gold">{{ $t('nav.services') }}</RouterLink></li>
            <li class="mb-2"><RouterLink to="/eco" class="text-white text-decoration-none hover-gold">{{ $t('nav.eco') }}</RouterLink></li>
            <li class="mb-2"><RouterLink to="/contact" class="text-white text-decoration-none hover-gold">{{ $t('nav.contact') }}</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5 class="text-brand-gold mb-3 text-uppercase fw-bold">{{ $t('nav.contact') }}</h5>
          <p><i class="fas fa-map-marker-alt me-2 text-brand-gold"></i> Châtel, France</p>
          <p><i class="fas fa-phone me-2 text-brand-gold"></i> <a href="tel:0641365070" class="text-white text-decoration-none">06 41 36 50 70</a></p>
          <p><i class="fas fa-envelope me-2 text-brand-gold"></i> <a href="mailto:cleanmountain74@gmail.com" class="text-white text-decoration-none">cleanmountain74@gmail.com</a></p>
          <RouterLink to="/legal" class="text-brand-gold text-decoration-none mt-2 d-inline-block">{{ $t('footer.legal') }}</RouterLink>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
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
  background-color: var(--cm-green);
}

footer a:hover {
  color: #00bcd4 !important;
}
</style>
