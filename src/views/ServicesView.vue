<template>
  <main class="services-page">
    <section class="section">
      <div class="container">
        <div class="text-center mb-5">
          <h1>Nos Services</h1>
          <p class="lead">Clean Mountain propose des prestations de ménage fiables, soignées et adaptées aux exigences de la vie en station et en zone de montagne.</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" class="rounded-circle mb-3" style="width: 80px; height: 80px;" alt="Nettoyage régulier">
                <h3>Nettoyage régulier</h3>
                <p>Entretien hebdomadaire ou mensuel de vos logements pour un confort optimal tout au long de l'année.</p>
                <ul class="list-unstyled">
                  <li><i class="fas fa-check text-success me-2"></i>Ménage complet des pièces</li>
                  <li><i class="fas fa-check text-success me-2"></i>Nettoyage des sols et surfaces</li>
                  <li><i class="fas fa-check text-success me-2"></i>Entretien des équipements</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" class="rounded-circle mb-3" style="width: 80px; height: 80px;" alt="Ménage ponctuel">
                <h3>Ménage ponctuel</h3>
                <p>Intervention ponctuelle pour les arrivées, départs ou événements spéciaux.</p>
                <ul class="list-unstyled">
                  <li><i class="fas fa-check text-success me-2"></i>Préparation des locations</li>
                  <li><i class="fas fa-check text-success me-2"></i>Nettoyage après événement</li>
                  <li><i class="fas fa-check text-success me-2"></i>Intervention d'urgence</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" class="rounded-circle mb-3" style="width: 80px; height: 80px;" alt="Entretien Airbnb et locations saisonnières">
                <h3>Entretien Airbnb et locations saisonnières</h3>
                <p>Service spécialisé pour les locations courte durée, garantissant des standards élevés.</p>
                <ul class="list-unstyled">
                  <li><i class="fas fa-check text-success me-2"></i>Check-in/check-out rapide</li>
                  <li><i class="fas fa-check text-success me-2"></i>Qualité irréprochable</li>
                  <li><i class="fas fa-check text-success me-2"></i>Adaptation aux exigences des plateformes</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card h-100">
              <div class="card-body text-center">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80" class="rounded-circle mb-3" style="width: 80px; height: 80px;" alt="Locaux professionnels">
                <h3>Locaux professionnels</h3>
                <p>Nettoyage professionnel pour bureaux, commerces et espaces professionnels en montagne.</p>
                <ul class="list-unstyled">
                  <li><i class="fas fa-check text-success me-2"></i>Entretien quotidien</li>
                  <li><i class="fas fa-check text-success me-2"></i>Nettoyage en profondeur</li>
                  <li><i class="fas fa-check text-success me-2"></i>Respect des normes d'hygiène</li>
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

<script>
export default {
  name: 'ServicesView'
}
</script>
