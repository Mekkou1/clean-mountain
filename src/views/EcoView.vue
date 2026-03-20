<template>
  <main class="eco-page">

    <!-- Bannière hero Eco -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=400&fit=crop" alt="Forêt alpine préservée" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">{{ $t('eco.hero') }}</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">{{ $t('eco.subtitle') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">

        <div class="row g-4">
          <!-- Carte 1 : Méthodes -->
          <div class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm" style="overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=700&h=280&fit=crop" class="card-img-top" alt="Produits et matériel de nettoyage écologiques" style="height: 220px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h3 class="text-brand-green text-uppercase fw-bold mb-3">{{ $t('eco.methods_title') }}</h3>
                <ul class="list-unstyled text-start">
                  <li v-for="(method, index) in $tm('eco.methods')" :key="index" class="mb-2">
                    <i class="fas fa-leaf text-brand-gold me-2"></i>{{ $rt(method) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Carte 2 : Produits -->
          <div class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm" style="overflow: hidden;">
              <img src="/images/produits-eco.jpg" class="card-img-top" alt="Assortiment de produits écologiques certifiés" style="height: 220px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h3 class="text-brand-green text-uppercase fw-bold mb-3">{{ $t('eco.products_title') }}</h3>
                <ul class="list-unstyled text-start">
                  <li v-for="(product, index) in $tm('eco.products')" :key="index" class="mb-2">
                    <i class="fas fa-leaf text-brand-gold me-2"></i>{{ $rt(product) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Section bénéfices avec image pleine largeur -->
        <div class="mt-5">
          <div class="card border-0 shadow-sm" style="overflow: hidden;">
            <div class="row g-0">
              <div class="col-md-5">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=350&fit=crop" alt="Paysage alpin préservé" style="height: 100%; min-height: 280px; object-fit: cover; width: 100%;">
              </div>
              <div class="col-md-7 d-flex align-items-center">
                <div class="card-body p-4">
                  <h3 class="text-brand-green text-uppercase fw-bold mb-3">{{ $t('eco.benefits_title') }}</h3>
                  <p>{{ $t('eco.benefits_p1') }}</p>
                  <p class="mb-0">{{ $t('eco.benefits_p2') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  name: 'EcoView'
}
</script>

