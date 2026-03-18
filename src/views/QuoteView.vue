<template>
  <!-- Bannière hero Devis -->
  <div>
    <section class="position-relative mb-5" style="height: 220px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=300&fit=crop" alt="Devis personnalisé Clean Mountain" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">DEMANDE DE DEVIS</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">Un devis gratuit et personnalisé sous 24h</p>
      </div>
    </section>

  <div class="container mb-5">
    <div class="row g-5 align-items-start">

      <!-- Colonne gauche : image + avantages -->
      <div class="col-lg-5">
        <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=700&h=450&fit=crop" alt="Chalet propre et accueillant dans les Alpes" class="img-fluid rounded shadow mb-4" style="object-fit: cover; width: 100%; height: 280px;">
        <div class="card border-0 shadow-sm p-4" style="background: linear-gradient(135deg, var(--cm-green), #0b4530); color: white;">
          <h3 class="text-uppercase fw-bold mb-3" style="color: var(--cm-gold); font-size: 1rem;">Pourquoi nous choisir ?</h3>
          <ul class="list-unstyled mb-0">
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-clock me-3" style="color: var(--cm-gold);"></i> Réponse sous 24h</li>
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-shield-alt me-3" style="color: var(--cm-gold);"></i> Devis gratuit & sans engagement</li>
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-leaf me-3" style="color: var(--cm-gold);"></i> Produits écologiques certifiés</li>
            <li class="d-flex align-items-center"><i class="fas fa-star me-3" style="color: var(--cm-gold);"></i> Service haut de gamme</li>
          </ul>
        </div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="col-lg-7">
        <p class="lead mb-4">Remplissez ce formulaire pour obtenir un devis personnalisé pour vos besoins en nettoyage professionnel.</p>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="statut" class="form-label">Statut du demandeur</label>
        <select id="statut" v-model="form.statut" class="form-control" required>
          <option value="">Sélectionnez</option>
          <option value="particulier">Particulier</option>
          <option value="entreprise">Entreprise</option>
        </select>
      </div>
      <div v-if="form.statut === 'entreprise'" class="mb-3">
        <label for="nomEntreprise" class="form-label">Nom de l'entreprise</label>
        <input type="text" id="nomEntreprise" v-model="form.nomEntreprise" class="form-control">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" id="nom" v-model="form.nom" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" id="prenom" v-model="form.prenom" class="form-control" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="telephone" class="form-label">Téléphone</label>
          <input type="tel" id="telephone" v-model="form.telephone" class="form-control" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="typePrestation" class="form-label">Type de prestation</label>
        <select id="typePrestation" v-model="form.typePrestation" class="form-control" required>
          <option value="">Sélectionnez</option>
          <option value="entretien">Entretien écologique</option>
          <option value="cuisine">Cuisine chez vous</option>
          <option value="coffret">Coffret gourmand</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="adresse" class="form-label">Adresse du logement</label>
        <input type="text" id="adresse" v-model="form.adresse" class="form-control" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="frequence" class="form-label">Fréquence souhaitée</label>
          <select id="frequence" v-model="form.frequence" class="form-control" required>
            <option value="">Sélectionnez</option>
            <option value="quotidien">Quotidien</option>
            <option value="hebdomadaire">Hebdomadaire</option>
            <option value="bimensuel">Bi-mensuel</option>
            <option value="mensuel">Mensuel</option>
            <option value="ponctuel">Ponctuel</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="dateDebut" class="form-label">Date de début</label>
          <input type="date" id="dateDebut" v-model="form.dateDebut" class="form-control" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="commentaires" class="form-label">Commentaires</label>
        <textarea id="commentaires" v-model="form.commentaires" class="form-control" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-custom btn-lg w-100 mt-2">Demander un devis</button>
    </form>
      </div><!-- fin col-lg-7 -->
    </div><!-- fin row -->
  </div><!-- fin container -->
  </div><!-- fin div outer -->
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';

export default {
  name: 'QuoteView',
  data() {
    return {
      form: {
        statut: '',
        nomEntreprise: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        typePrestation: '',
        adresse: '',
        frequence: '',
        dateDebut: '',
        commentaires: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        // Clés secrètes EmailJS pour le formulaire Devis
        const SERVICE_ID = 'service_cleanmountain';
        const TEMPLATE_ID = 'template_47xgp6h';
        const PUBLIC_KEY = 'RsJxaN0Y-HqGYf9Tz';

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, this.form as Record<string, unknown>, PUBLIC_KEY);
        alert('Demande de devis envoyée avec succès!');
        this.resetForm();
      } catch (error) {
        console.error("Erreur lors de l'envoi du devis:", error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    },
    resetForm() {
      this.form = {
        statut: '',
        nomEntreprise: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        typePrestation: '',
        adresse: '',
        frequence: '',
        dateDebut: '',
        commentaires: ''
      }
    }
  }
}
</script>
