<template>
  <main class="services-page">

    <!-- Bannière hero Services -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&h=400&fit=crop" alt="Nettoyage professionnel Clean Mountain" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.55);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">{{ $t('services.page.title') }}</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">{{ $t('services.page.subtitle') }}</p>
      </div>
    </section>

    <div class="container py-4">
      <div class="row g-5">
        <!-- ENTRETIEN ÉCOLOGIQUE -->
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
            <img src="/images/entretient.jpg" class="card-img-top" alt="Entretien écologique de chalet" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <div class="text-center mb-4">
                <h3 class="text-brand-green text-uppercase fw-bold">{{ $t('services.maintenance.title') }}</h3>
                <p class="text-muted small">{{ $t('services.page.maintenance_desc') }}</p>
              </div>
              <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.maintenance.p1') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.maintenance.p2') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.maintenance.p3') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.maintenance.p4') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CUISINE CHEZ L'HABITANT -->
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
            <img src="/images/service-cuisine.jpg" class="card-img-top" alt="Cuisine chez l'habitant" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <div class="text-center mb-4">
                <h3 class="text-brand-green text-uppercase fw-bold">{{ $t('services.cooking.title') }}</h3>
                <p class="text-muted small">{{ $t('services.page.cooking_desc') }}</p>
              </div>
              <ul class="list-unstyled mb-4">
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.cooking.p1') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.cooking.p2') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.cooking.p3') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.cooking.p4') }}</li>
              </ul>
              <div class="text-center">
                <RouterLink to="/menu" class="btn btn-outline-success border-2 fw-bold" style="color: var(--cm-green); border-color: var(--cm-green);">{{ $t('services.cooking.btn') }}</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- COFFRET GOURMAND -->
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
            <img src="/images/service-coffret.jpg" class="card-img-top" alt="Coffret gourmand" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <div class="text-center mb-4">
                <h3 class="text-brand-green text-uppercase fw-bold">{{ $t('services.gift.title') }}</h3>
                <p class="text-muted small">{{ $t('services.page.gift_desc') }}</p>
              </div>
              <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.gift.p1') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.gift.p2') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.gift.p3') }}</li>
                <li class="mb-3 d-flex align-items-center"><i class="fas fa-check-circle text-brand-gold me-3"></i> {{ $t('services.gift.p4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5 py-5">
        <RouterLink to="/quote" class="btn btn-custom btn-lg px-5 py-3 shadow">{{ $t('nav.quote') }}</RouterLink>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  name: 'ServicesView',
  components: { RouterLink }
}
</script>

<style scoped>
.btn-custom {
  background-color: var(--cm-green);
  color: white;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: var(--cm-gold);
  color: white;
  transform: translateY(-2px);
}
</style>
