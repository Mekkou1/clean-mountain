<template>
  <main class="eco-page">

    <!-- Bannière hero Eco -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=400&fit=crop" alt="Forêt alpine préservée" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">NOTRE ENGAGEMENT ÉCOLOGIQUE</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">Clean Mountain s'engage pour un nettoyage respectueux de l'environnement alpin.</p>
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
                <h3 class="text-brand-green text-uppercase fw-bold mb-3">Méthodes respectueuses de l'environnement</h3>
                <ul class="list-unstyled text-start">
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Utilisation de produits biodégradables</li>
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Techniques de nettoyage à faible impact</li>
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Réduction des déchets et recyclage</li>
                  <li><i class="fas fa-leaf text-brand-gold me-2"></i>Économie d'eau et d'énergie</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Carte 2 : Produits -->
          <div class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm" style="overflow: hidden;">
              <img src="/images/produits-eco.jpg" class="card-img-top" alt="Assortiment de produits écologiques certifiés" style="height: 220px; object-fit: cover;">
              <div class="card-body text-center p-4">
                <h3 class="text-brand-green text-uppercase fw-bold mb-3">Produits utilisés</h3>
                <ul class="list-unstyled text-start">
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Détergents écologiques certifiés</li>
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Produits sans substances toxiques</li>
                  <li class="mb-2"><i class="fas fa-leaf text-brand-gold me-2"></i>Matériels réutilisables</li>
                  <li><i class="fas fa-leaf text-brand-gold me-2"></i>Emballages recyclables</li>
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
                  <h3 class="text-brand-green text-uppercase fw-bold mb-3">Bénéfices pour nos clients et la nature</h3>
                  <p>Notre approche écologique garantit des espaces sains et respectueux de l'environnement alpin, tout en préservant la qualité de vie en montagne.</p>
                  <p class="mb-0">En choisissant Clean Mountain, vous contribuez directement à la préservation des écosystèmes alpins uniques de la région de Châtel.</p>
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

