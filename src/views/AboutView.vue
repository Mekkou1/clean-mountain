<template>
  <div class="about-page">
    <div class="container">
      <!-- Section d'introduction avec image -->
      <section class="section text-center mb-5">
        <h1>À propos de Clean Mountain</h1>
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="@/assets/IAGE CM2.png" alt="Logo Clean Mountain" class="img-fluid mb-3" />
          </div>
          <div class="col-md-6">
            <p class="lead">Clean Mountain est née de la passion pour les Alpes et du désir d'offrir des services de nettoyage de qualité supérieure adaptés aux exigences uniques de la vie en montagne.</p>
          </div>
        </div>
      </section>

      <!-- Notre histoire -->
      <section class="section mb-5">
        <h2>Notre histoire</h2>
        <div class="row">
          <div class="col-md-8">
            <p>Fondée à Châtel, notre entreprise s'est rapidement imposée comme la référence en matière de nettoyage professionnel dans la région. Avec des années d'expérience, nous comprenons les défis uniques du nettoyage en milieu alpin.</p>
            <p>Notre équipe est composée de professionnels passionnés qui connaissent parfaitement les conditions climatiques et les besoins spécifiques de nos clients en montagne.</p>
          </div>
          <div class="col-md-4">
            <img src="@/assets/fond-menthe-aquarelle_23-2150269799.avif" alt="Paysage alpin" class="img-fluid rounded" />
          </div>
        </div>
      </section>

      <!-- Zone d'intervention -->
      <section class="section mb-5">
        <h2>Zone d'intervention</h2>
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
        <h2>Nos valeurs fondamentales</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title">Qualité irréprochable</h4>
                <p class="card-text flex-grow-1">Chaque intervention est réalisée avec la plus grande rigueur et une attention particulière portée aux détails. Nous ne laissons rien au hasard.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title">Respect de l'environnement</h4>
                <p class="card-text flex-grow-1">Nous privilégions des méthodes et produits respectueux de la nature alpine, contribuant à préserver la beauté de nos montagnes.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title">Confiance et professionnalisme</h4>
                <p class="card-text flex-grow-1">Notre équipe qualifiée garantit un service fiable et discret en toutes circonstances, pour votre tranquillité d'esprit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
