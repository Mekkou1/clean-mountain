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
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" class="d-block w-100 carousel-image" alt="Montagnes alpines">
          </div>
          
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=600&fit=crop" class="d-block w-100 carousel-image" alt="Lac alpin">
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop" class="d-block w-100 carousel-image" alt="Forêt alpine">
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
              <h1 class="display-3 fw-bold mb-4 text-white">L'impeccable, naturellement.</h1>
              <p class="lead mb-4 fs-5 text-white">Clean Mountain, votre partenaire pour un nettoyage professionnel et respectueux de l'environnement dans les Alpes.</p>
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
            <h1 class="display-3 fw-bold mb-4 text-white">L'impeccable, naturellement.</h1>
            <p class="lead mb-4 fs-5">Clean Mountain, votre partenaire pour un nettoyage professionnel et respectueux de l'environnement dans les Alpes.</p>
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
            <h2 class="mb-4">À propos de Clean Mountain</h2>
            <p class="lead mb-4">
              Implantée au cœur des Alpes, CLEAN MOUNTAIN est votre allié pour le nettoyage à Châtel, La Chapelle-d'Abondance et Abondance.
              Nous proposons des prestations de ménage soignées pour logements, chalets, appartements, résidences de montagne, locations saisonnières
              et logements Airbnb. CLEAN MOUNTAIN accompagne également les professionnels pour l'entretien de leurs locaux.
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
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=220&fit=crop&crop=center" class="card-img-top" alt="Entretien écologique de chalet" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-3 text-uppercase">Entretien écologique</h5>
                <p class="card-text text-muted">Ménage chalets, appartements, gestion Airbnb, linge de maison avec produits respectueux de l'environnement.</p>
              </div>
            </div>
          </div>
          <!-- Cuisine chez vous -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=220&fit=crop&crop=center" class="card-img-top" alt="Cuisine gastronomique à domicile" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-3 text-uppercase">Cuisine chez vous</h5>
                <p class="card-text text-muted">Cuisine exotique familiale (option végétarienne) pour 2 à 10+ personnes. Suivie d'un nettoyage impeccable.</p>
              </div>
            </div>
          </div>
          <!-- Coffret gourmand -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift" style="border-top: 4px solid var(--cm-gold) !important; overflow: hidden;">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=220&fit=crop&crop=center" class="card-img-top" alt="Panier gourmand avec fruits et jus" style="height: 180px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h5 class="card-title text-brand-green fw-bold mb-3 text-uppercase">Coffret gourmand</h5>
                <p class="card-text text-muted">Traditions savoyardes, douceurs exotiques, et objets d'art, présentés avec élégance pour vous.</p>
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
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center" class="card-img-top" alt="Chalet propre et accueillant">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Chalets nettoyés</h5>
                <p class="card-text text-muted">Entretien impeccable de vos chalets pour un séjour confortable.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&crop=center" class="card-img-top" alt="Ménagère en train de nettoyer">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Nettoyage en action</h5>
                <p class="card-text text-muted">Notre équipe à l'œuvre pour un résultat professionnel.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm hover-lift">
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center" class="card-img-top" alt="Location Airbnb prête">
              <div class="card-body text-center">
                <h5 class="card-title text-brand-green text-uppercase">Locations Airbnb</h5>
                <p class="card-text text-muted">Préparation parfaite pour accueillir vos hôtes.</p>
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
