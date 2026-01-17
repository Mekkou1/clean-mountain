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
            <img src="https://images.unsplash.com/photo-1464822759844-d150f39b8b3d?w=1200&h=600&fit=crop&auto=format&q=80" class="d-block w-100 carousel-image" alt="Paysage montagneux">
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
    <section class="hero-section text-white py-5 fade-in-up d-none" style="background: linear-gradient(135deg, #00bcd4 0%, #008ba3 100%);">
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
          <div class="col-lg-8 mx-auto text-center">
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
                  <h5>Qualité</h5>
                  <p>Service professionnel et attention aux détails</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <i class="fas fa-seedling text-success fs-1 mb-3"></i>
                  <h5>Écologique</h5>
                  <p>Produits et méthodes respectueuses de l'environnement</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <i class="fas fa-user-tie text-primary fs-1 mb-3"></i>
                  <h5>Professionnalisme</h5>
                  <p>Équipe expérimentée et fiable</p>
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
            <h2 class="text-primary">Nos Services Phares</h2>
            <p class="lead text-muted">Découvrez nos prestations adaptées à la vie en montagne</p>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift">
              <div class="card-body text-center p-4">
                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="fas fa-home text-primary fs-2"></i>
                </div>
                <h5 class="card-title text-primary mb-3">Nettoyage régulier</h5>
                <p class="card-text text-muted">Entretien adapté aux conditions de vie en montagne, avec des méthodes respectueuses de l'environnement.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift">
              <div class="card-body text-center p-4">
                <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="fas fa-calendar-alt text-primary fs-2"></i>
                </div>
                <h5 class="card-title text-primary mb-3">Locations saisonnières</h5>
                <p class="card-text text-muted">Préparation et nettoyage de vos locations Airbnb et chalets pour un accueil impeccable de vos hôtes.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-lg hover-lift">
              <div class="card-body text-center p-4">
                <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 80px; height: 80px;">
                  <i class="fas fa-leaf text-success fs-2"></i>
                </div>
                <h5 class="card-title text-primary mb-3">Méthodes écologiques</h5>
                <p class="card-text text-muted">Utilisation de produits biodégradables et de techniques respectueuses de la nature alpine.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <RouterLink to="/services" class="btn btn-primary btn-lg px-5 py-3 shadow">Voir tous nos services</RouterLink>
        </div>
      </div>
    </section>

    <!-- Témoignages clients -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2>Ce que disent nos clients</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text">"Service impeccable et équipe très professionnelle. Ils respectent vraiment l'environnement."</p>
                <footer class="blockquote-footer">Marie D., Propriétaire de chalet</footer>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text">"Parfaits pour nos locations saisonnières. Les clients sont toujours satisfaits de la propreté."</p>
                <footer class="blockquote-footer">Pierre L., Gestionnaire Airbnb</footer>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text">"Méthodes écologiques et résultats exceptionnels. Une équipe à recommander."</p>
                <footer class="blockquote-footer">Sophie M., Résidente</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appels à l’action -->
    <section class="py-5 text-white position-relative overflow-hidden" style="background: linear-gradient(135deg, #00bcd4 0%, #008ba3 100%);">
      <div class="container text-center position-relative z-1">
        <h2 class="display-5 fw-bold mb-4">Prêt à faire briller votre espace ?</h2>
        <p class="lead mb-5 fs-5">Contactez-nous pour un devis gratuit ou découvrez nos services en détail.</p>
        <div class="d-flex justify-content-center gap-4 flex-wrap">
          <RouterLink to="/contact" class="btn btn-light btn-lg px-5 py-3 shadow-lg">Contact</RouterLink>
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
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.3) 0%, rgba(0, 138, 163, 0.3) 100%);
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
  background: rgba(0, 188, 212, 0.7);
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
</style>
