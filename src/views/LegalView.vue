<template>
  <main class="legal-page bg-light pb-5">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bold text-brand-green text-uppercase mb-3">Mentions Légales</h1>
        <p class="lead text-muted" style="font-family: 'Montserrat', sans-serif; font-style: italic;">Informations juridiques et confidentialité</p>
      </div>
      
      <div class="bg-white p-5 shadow-sm rounded border-0" style="border-top: 4px solid var(--cm-gold) !important;">
        <h2 class="mb-4 text-brand-gold h4 fw-bold text-uppercase">Informations légales</h2>
        <ul class="list-unstyled lead fs-6 text-muted">
          <li class="mb-3 d-flex"><i class="fas fa-building mt-1 me-3 text-brand-green"></i><div><strong>Raison sociale :</strong> Clean Mountain</div></li>
          <li class="mb-3 d-flex"><i class="fas fa-user-tie mt-1 me-3 text-brand-green"></i><div><strong>Responsable :</strong> Ange IzNARDO</div></li>
          <li class="mb-3 d-flex"><i class="fas fa-map-marker-alt mt-1 me-3 text-brand-green"></i><div><strong>Adresse :</strong> Châtel - Vallée-d'Abondance - Abondance, France</div></li>
          <li class="mb-3 d-flex"><i class="fas fa-phone mt-1 me-3 text-brand-green"></i><div><strong>Téléphone :</strong> 06 41 36 50 70</div></li>
          <li class="mb-3 d-flex"><i class="fas fa-envelope mt-1 me-3 text-brand-green"></i><div><strong>Email :</strong> cleanmountain74@gmail.com</div></li>
          <li class="mb-3 d-flex"><i class="fas fa-laptop-code mt-1 me-3 text-brand-green"></i><div><strong>Site développé par :</strong> Techartisan</div></li>
          <li class="mb-4 d-flex"><i class="fas fa-server mt-1 me-3 text-brand-green"></i><div><strong>Hébergement :</strong> Netlify</div></li>
        </ul>

        <hr class="my-5 opacity-25">

        <h2 class="mb-4 text-brand-gold h4 fw-bold text-uppercase">Politique de confidentialité (RGPD)</h2>
        <p class="text-muted">Clean Mountain s'engage à protéger la confidentialité des données personnelles de ses utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).</p>

        <h3 class="mt-4 mb-3 text-brand-green h5 fw-bold">Collecte des données</h3>
        <p class="text-muted">Nous collectons uniquement les données nécessaires à la fourniture de nos prestations (entretien, cuisine, coffrets).</p>

        <h3 class="mt-4 mb-3 text-brand-green h5 fw-bold">Utilisation des données</h3>
        <p class="text-muted">Les données collectées sont utilisées pour :</p>
        <ul class="text-muted mb-4">
          <li class="mb-1">Répondre à vos demandes de contact</li>
          <li class="mb-1">Établir des devis personnalisés</li>
          <li class="mb-1">Améliorer nos services</li>
        </ul>

        <h3 class="mt-4 mb-3 text-brand-green h5 fw-bold">Droits des utilisateurs</h3>
        <p class="text-muted">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul class="text-muted mb-4">
          <li class="mb-1">Droit d'accès à vos données</li>
          <li class="mb-1">Droit de rectification</li>
          <li class="mb-1">Droit à l'effacement</li>
          <li class="mb-1">Droit à la portabilité</li>
          <li class="mb-1">Droit d'opposition</li>
        </ul>

        <h3 class="mt-4 mb-3 text-brand-green h5 fw-bold">Contact</h3>
        <p class="text-muted mb-0">Pour exercer vos droits ou pour toute question concernant le traitement de vos données, contactez-nous à l'adresse suivante : <strong>cleanmountain74@gmail.com</strong></p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'LegalView'
}
</script>
