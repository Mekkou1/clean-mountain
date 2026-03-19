<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <!-- Carousel Section -->
    <section class="carousel-section position-relative">
      <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/hero-living.jpg" class="d-block w-100 carousel-image" alt="Chalet chaleureux">
          </div>
          <div class="carousel-item">
            <img src="/images/hero-bed.jpg" class="d-block w-100 carousel-image" alt="Entretien espace nuit">
          </div>
          <div class="carousel-item">
            <img src="/images/hero-food.jpg" class="d-block w-100 carousel-image" alt="Cuisine exotique">
          </div>
          <div class="carousel-item">
            <img src="/images/hero-basket.jpg" class="d-block w-100 carousel-image" alt="Coffret gourmand">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- Overlay Content -->
      <div class="carousel-overlay d-flex align-items-center">
        <div class="container">
          <div class="row align-items-center min-vh-75">
            <div class="col-lg-7">
              <h1 class="display-3 fw-bold mb-4 text-white">Impeccable, naturellement.</h1>
              <p class="lead mb-4 fs-5 text-white">Service d'entretien / Cuisine chez l'habitant &amp; Coffrets gourmands.</p>
              <div class="d-flex gap-3 flex-wrap">
                <RouterLink to="/services" class="btn btn-light btn-lg px-4 py-3">Nos services</RouterLink>
                <RouterLink to="/quote" class="btn btn-outline-light btn-lg px-4 py-3">Demande de devis</RouterLink>
              </div>
            </div>
            <div class="col-lg-5 d-none d-lg-block">
              <div class="text-center">
                <i class="fas fa-mountain display-1 text-white opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Héros -->
    <section class="hero-section text-white py-5 fade-in-up d-none" style="background: linear-gradient(135deg, var(--cm-green) 0%, #0b4530 100%);">
      <div class="container">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-7">
            <h1 class="display-3 fw-bold mb-4 text-white">Impeccable, naturellement.</h1>
            <p class="lead mb-4 fs-5 text-white">Service d'entretien / Repas chez l'habitant &amp; Coffrets gourmands.</p>
            <div class="d-flex gap-3 flex-wrap">
              <RouterLink to="/services" class="btn btn-light btn-lg px-4 py-3">Nos services</RouterLink>
              <RouterLink to="/quote" class="btn btn-outline-light btn-lg px-4 py-3">Demande de devis</RouterLink>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="text-center">
              <i class="fas fa-mountain display-1 text-white opacity-75"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Présentation rapide -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center text-dark">
            <h2 class="mb-4">À propos de Clean Mountain & CO</h2>
            <p class="lead mb-4">
              Au cœur des Alpes, CLEAN MOUNTAIN & CO vous accompagne avec des prestations sur mesure à Châtel, La Chapelle-d’Abondance et Abondance.
            </p>
            <div class="d-flex justify-content-center mb-4">
              <ul class="list-unstyled text-start m-0 p-4 bg-white rounded shadow-sm border" style="border-left: 4px solid var(--cm-green) !important;">
                <li class="mb-3 d-flex align-items-center fs-5">
                  <i class="fas fa-check-circle text-brand-green me-3 fs-4"></i> Chalets et appartements
                </li>
                <li class="mb-3 d-flex align-items-center fs-5">
                  <i class="fas fa-check-circle text-brand-green me-3 fs-4"></i> Locations saisonnières & Airbnb
                </li>
                <li class="mb-3 d-flex align-items-center fs-5">
                  <i class="fas fa-check-circle text-brand-green me-3 fs-4"></i> Logements privés
                </li>
                <li class="d-flex align-items-center fs-5">
                  <i class="fas fa-check-circle text-brand-green me-3 fs-4"></i> Locaux professionnels
                </li>
              </ul>
            </div>
            <p class="lead mb-4">
              En tant qu’auto-entrepreneur, je vous offre un service personnalisé, fiable et réactif, avec un réel souci du détail, afin d’offrir une expérience unique et mémorable à vos invités ou clients.
            </p>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="text-center">
                  <i class="fas fa-award text-warning fs-1 mb-3"></i>
                  <h5 class="text-dark">Qualité</h5>
                  <p class="text-muted">Service professionnel et attention aux détails</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <i class="fas fa-seedling text-success fs-1 mb-3"></i>
                  <h5 class="text-dark">Écologique</h5>
                  <p class="text-muted">Produits et méthodes respectueuses de l'environnement</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <i class="fas fa-user-tie text-brand-green fs-1 mb-3"></i>
                  <h5 class="text-dark">Professionnalisme</h5>
                  <p class="text-muted">Équipe expérimentée et fiable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services phares -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="text-brand-gold mb-3 text-uppercase">Nos Services Phares</h2>
            <p class="lead text-muted" style="font-family: 'Montserrat', sans-serif; font-style: italic;">Découvrez nos prestations adaptées à la vie en montagne</p>
          </div>
        </div>
        <div class="row g-4 justify-content-center">
          <!-- Entretien écologique -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="/images/service-entretien.jpg" class="card-img-top" alt="Entretien écologique de chalet" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-4 text-uppercase">Entretien écologique</h5>
                <ul class="list-unstyled text-start text-muted mb-0 fs-6">
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Nettoyage approfondi et finitions soignées</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Gestion du linge &amp; mise en place des lits</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Préparation complète entre chaque séjour</span></li>
                  <li class="d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Produits respectueux de l'environnement</span></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Cuisine chez vous -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="/images/service-cuisine.jpg" class="card-img-top" alt="Cuisine gastronomique à domicile" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-4 text-uppercase">Cuisine chez l'habitant</h5>
                <ul class="list-unstyled text-start text-muted mb-0 fs-6">
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Cuisine raffinée aux inspirations exotiques</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Option végétarienne disponible</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Pour 2 à 10 personnes (et plus)</span></li>
                  <li class="d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Nettoyage de la cuisine après prestation</span></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Coffret gourmand -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="/images/service-coffret.jpg" class="card-img-top" alt="Panier gourmand avec fruits et jus" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-4 text-uppercase">Coffret gourmand</h5>
                <ul class="list-unstyled text-start text-muted mb-0 fs-6">
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Traditions savoyardes</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Douceurs exotiques</span></li>
                  <li class="mb-2 d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Objets d'art sculptés sur bois</span></li>
                  <li class="d-flex align-items-start"><i class="fas fa-check text-brand-gold mt-1 me-3"></i><span>Présentation personnalisable</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <RouterLink to="/services" class="btn btn-primary btn-lg px-5 py-3 shadow">Voir tous nos services</RouterLink>
        </div>
      </div>
    </section>

    <!-- Galerie de nos services -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2>Nos Réalisations</h2>
            <p class="lead text-muted">Découvrez nos prestations en images</p>
          </div>
        </div>
        <div class="row g-4 justify-content-center">
          <!-- Realisation 1 -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="/images/realisation-2-dining.jpg" class="card-img-top" alt="Salle à manger propre et chaleureuse" style="height: 250px; object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Chalets accueillants</h5>
                <p class="card-text text-muted">Des espaces de vie parfaitement nettoyés et chaleureux pour vos séjours.</p>
              </div>
            </div>
          </div>
          <!-- Realisation 2 -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="/images/realisation-4-shower.jpg" class="card-img-top" alt="Salle de bain impeccable" style="height: 250px; object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Hygiène irréprochable</h5>
                <p class="card-text text-muted">Un nettoyage approfondi des pièces d'eau et la mise en place du linge.</p>
              </div>
            </div>
          </div>
          <!-- Realisation 3 -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="/images/realisation-3-kitchen.jpg" class="card-img-top" alt="Cuisine de chalet étincelante" style="height: 250px; object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Cuisines impeccables</h5>
                <p class="card-text text-muted">Entretien minutieux de vos équipements et espaces repas.</p>
              </div>
            </div>
          </div>
          <!-- Realisation 4 -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="/images/realisation-5-fish.jpg" class="card-img-top" alt="Cuisine gastronomique à domicile" style="height: 300px; object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Cuisine à domicile</h5>
                <p class="card-text text-muted">Des plats cuisinés maison, pour le plus grand bonheur de vos invités.</p>
              </div>
            </div>
          </div>
          <!-- Realisation 5 -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="/images/realisation-1-coffret.jpg" class="card-img-top" alt="Joli panier gourmand" style="height: 300px; object-fit: cover;">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Coffrets gourmands artisanaux</h5>
                <p class="card-text text-muted">Traditions savoyardes et délicatesses préparées sur commande.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appels à l’action -->
    <section class="py-5 text-white position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--cm-green) 0%, #0b4530 100%);">
      <div class="container text-center position-relative z-1">
        <h2 class="display-5 fw-bold mb-4">Prêt à nous confier vos espaces ?</h2>
        <p class="lead mb-5 fs-5">Contactez-nous pour un devis personnalisé et retrouvez la tranquillité d'esprit.</p>
        <p class="lead mb-4 fw-bold text-brand-gold fs-4">
          <i class="fas fa-phone me-2"></i> 06 41 36 50 70<br>
          <i class="fas fa-envelope me-2"></i> cleanmountain74@gmail.com
        </p>
        <div class="d-flex justify-content-center gap-4 flex-wrap mt-4">
          <RouterLink to="/contact" class="btn btn-warning btn-lg px-5 py-3 shadow-lg" style="color: var(--cm-green) !important; font-weight: bold;">Contact</RouterLink>
          <RouterLink to="/quote" class="btn btn-outline-light btn-lg px-5 py-3 shadow-lg">Demande de devis</RouterLink>
        </div>
      </div>
      <!-- Decorative elements -->
      <div class="position-absolute top-0 end-0 opacity-10">
        <i class="fas fa-mountain display-4"></i>
      </div>
      <div class="position-absolute bottom-0 start-0 opacity-10">
        <i class="fas fa-leaf display-4"></i>
      </div>
    </section>
  </main>
</template>

<style scoped>
.carousel-section {
  height: 100vh;
  overflow: hidden;
}

.carousel-image {
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.6);
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(6, 49, 34, 0.4) 0%, rgba(6, 49, 34, 0.6) 100%);
  z-index: 2;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 3;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 15px;
}

.carousel-indicators {
  z-index: 3;
}

.hero-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(6, 49, 34, 0.7);
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Fix text visibility in light background sections */
.bg-light p {
  color: #555 !important;
}

.bg-light h5 {
  color: #333 !important;
}

.bg-light p {
  color: #555 !important;
}

.bg-light .text-muted {
  color: #6c757d !important;
}
</style>
