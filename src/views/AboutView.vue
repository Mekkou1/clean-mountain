<template>
  <div class="about-page">

    <!-- Bannière hero À propos -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=400&fit=crop" alt="Paysage alpin Clean Mountain" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">À PROPOS DE CLEAN MOUNTAIN & CO</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">Impeccable, naturellement.</p>
      </div>
    </section>

    <div class="container">
      <!-- Section d'introduction avec image -->
      <section class="section text-center mb-5">
        <h1 class="text-brand-green mb-4 text-uppercase fw-bold">À propos </h1>
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="@/assets/logo_clean.jpg" alt="Logo Clean Mountain" class="img-fluid mb-3 rounded shadow" style="max-height: 250px; object-fit: contain; background: white;" />
          </div>
          <div class="col-md-6">
            <p class="lead">Clean Mountain est née de la passion pour les Alpes et du désir d'offrir des services de nettoyage de qualité supérieure adaptés aux exigences uniques de la vie en montagne.</p>
          </div>
        </div>
      </section>

      <!-- Notre histoire -->
      <section class="section mb-5">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">Notre histoire</h2>
        <div class="row">
          <div class="col-md-8">
            <p>Fondée à Châtel, notre entreprise s'est rapidement imposée comme la référence en matière de nettoyage professionnel dans la région. Avec des années d'expérience, nous comprenons les défis uniques du nettoyage en milieu alpin.</p>
            <p>Notre équipe est composée de professionnels passionnés qui connaissent parfaitement les conditions climatiques et les besoins spécifiques de nos clients en montagne.</p>
          </div>
          <div class="col-md-4">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Paysage alpin" class="img-fluid rounded shadow" style="object-fit: cover; height: 250px; width: 100%;" />
          </div>
        </div>
      </section>

      <!-- Zone d'intervention -->
      <section class="section mb-5">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">Zone d'intervention</h2>
        <div class="row">
          <div class="col-md-6">
            <p>Nous intervenons principalement dans les communes suivantes :</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-transparent">Châtel</li>
              <li class="list-group-item bg-transparent">La Chapelle-d'Abondance</li>
              <li class="list-group-item bg-transparent">Abondance</li>
            </ul>
          </div>
          <div class="col-md-6">
            <p>Notre connaissance approfondie du terrain et des conditions climatiques locales nous permet d'adapter nos services aux particularités de chaque saison. Que ce soit en hiver avec la neige ou en été avec la poussière des pistes, nous sommes équipés pour répondre à tous vos besoins.</p>
          </div>
        </div>
      </section>

      <!-- Nos valeurs fondamentales -->
      <section class="section">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">Nos valeurs fondamentales</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">Qualité irréprochable</h4>
                <p class="card-text flex-grow-1">Chaque intervention est réalisée avec la plus grande rigueur et une attention particulière portée aux détails. Nous ne laissons rien au hasard.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">Respect de l'environnement</h4>
                <p class="card-text flex-grow-1">Nous privilégions des méthodes et produits respectueux de la nature alpine, contribuant à préserver la beauté de nos montagnes.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">Confiance et professionnalisme</h4>
                <p class="card-text flex-grow-1">Notre équipe qualifiée garantit un service fiable et discret en toutes circonstances, pour votre tranquillité d'esprit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutView'
}
</script>
