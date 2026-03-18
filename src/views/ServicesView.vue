<template>
  <main class="services-page">

    <!-- Bannière hero Services -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=400&fit=crop" alt="Service de nettoyage professionnel" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.55);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">NOS SERVICES</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">Impeccable, naturellement.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="text-center mb-5">
          <p class="lead">Clean Mountain propose des prestations de ménage fiables, soignées et adaptées aux exigences de la vie en station et en zone de montagne.</p>
        </div>

        <div class="row g-4 justify-content-center">
          <!-- ENTRETIEN ÉCOLOGIQUE -->
          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=250&fit=crop&crop=center" class="card-img-top" alt="Entretien écologique de chalet" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <div class="text-center mb-4">
                  <h3 class="text-brand-green text-uppercase fw-bold">Entretien écologique</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Ménage chalets &amp; appartements</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Gestion de locations saisonnières / Airbnb</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Gestion du linge &amp; mise en place des lits</span>
                  </li>
                  <li class="d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Produits respectueux de l'environnement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- CUISINE CHEZ VOUS -->
          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=250&fit=crop&crop=center" class="card-img-top" alt="Cuisine gastronomique à domicile" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <div class="text-center mb-4">
                  <h3 class="text-brand-green text-uppercase fw-bold">Cuisine chez vous</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Cuisine exotique familiale</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Option végétarienne disponible</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Pour 2 à 10 personnes (et plus)</span>
                  </li>
                  <li class="d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Nettoyage de la cuisine après prestation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- COFFRET GOURMAND -->
          <div class="col-lg-4">
            <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1549488344-c6ebabe9600e?w=600&h=250&fit=crop&crop=center" class="card-img-top" alt="Coffret gourmand artisanal" style="height: 200px; object-fit: cover;">
              <div class="card-body">
                <div class="text-center mb-4">
                  <h3 class="text-brand-green text-uppercase fw-bold">Coffret gourmand</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Traditions savoyardes</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Douceurs exotiques</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Objets d'art sculptés sur bois</span>
                  </li>
                  <li class="d-flex align-items-start">
                    <i class="fas fa-check mt-1 me-3" style="color: var(--cm-gold);"></i>
                    <span>Présentation élégante et personnalisable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <RouterLink to="/quote" class="btn btn-custom btn-lg px-5 py-3">Demander un devis</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  name: 'ServicesView',
  components: { RouterLink }
}
</script>
