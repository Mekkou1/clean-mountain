<template>
  <!-- Bannière hero Devis -->
  <div>
    <section class="position-relative mb-5" style="height: 220px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&h=300&fit=crop" alt="Devis personnalisé Clean Mountain" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">{{ $t('quote.title').toUpperCase() }}</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">{{ $t('quote.subtitle') }}</p>
      </div>
    </section>

  <div class="container mb-5">
    <div class="row g-5 align-items-start">

      <!-- Colonne gauche : image + avantages -->
      <div class="col-lg-5">
        <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=700&h=450&fit=crop" alt="Chalet propre et accueillant dans les Alpes" class="img-fluid rounded shadow mb-4" style="object-fit: cover; width: 100%; height: 280px;">
        <div class="card border-0 shadow-sm p-4" style="background: linear-gradient(135deg, var(--cm-green), #0b4530); color: white;">
          <h3 class="text-uppercase fw-bold mb-3" style="color: var(--cm-gold); font-size: 1rem;">{{ $t('quote.why_us') }}</h3>
          <ul class="list-unstyled mb-0">
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-clock me-3" style="color: var(--cm-gold);"></i> {{ $t('quote.arg1') }}</li>
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-shield-alt me-3" style="color: var(--cm-gold);"></i> {{ $t('quote.arg2') }}</li>
            <li class="mb-3 d-flex align-items-center"><i class="fas fa-leaf me-3" style="color: var(--cm-gold);"></i> {{ $t('quote.arg3') }}</li>
            <li class="d-flex align-items-center"><i class="fas fa-star me-3" style="color: var(--cm-gold);"></i> {{ $t('quote.arg4') }}</li>
          </ul>
        </div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="col-lg-7">
        <p class="lead mb-4">{{ $t('quote.form_intro') }}</p>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="statut" class="form-label fw-bold">{{ $t('forms.status') }} *</label>
        <select id="statut" v-model="form.statut" class="form-select" required>
          <option value="" disabled>{{ $t('forms.select') }}</option>
          <option value="particulier">{{ $t('forms.individual') }}</option>
          <option value="entreprise">{{ $t('forms.company') }}</option>
        </select>
      </div>
      <div v-if="form.statut === 'entreprise'" class="mb-3">
        <label for="nomEntreprise" class="form-label fw-bold">{{ $t('forms.company_name') }} *</label>
        <input type="text" id="nomEntreprise" v-model="form.nomEntreprise" class="form-control" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="nom" class="form-label fw-bold">{{ $t('forms.name') }} *</label>
          <input type="text" id="nom" v-model="form.nom" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="prenom" class="form-label fw-bold">{{ $t('forms.firstname') }} *</label>
          <input type="text" id="prenom" v-model="form.prenom" class="form-control" required>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label fw-bold">{{ $t('forms.email') }} *</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required>
        </div>
        <div class="col-md-6 mb-3">
          <label for="telephone" class="form-label fw-bold">{{ $t('forms.phone') }} *</label>
          <input type="tel" id="telephone" v-model="form.telephone" class="form-control" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="typePrestation" class="form-label fw-bold">{{ $t('forms.prestation_type') }} *</label>
        <select id="typePrestation" v-model="form.typePrestation" class="form-select" required>
          <option value="" disabled>{{ $t('forms.select') }}</option>
          <option value="entretien">{{ $t('services.maintenance.title') }}</option>
          <option value="cuisine">{{ $t('services.cooking.title') }}</option>
          <option value="coffret">{{ $t('services.gift.title') }}</option>
          <option value="homestaging">Home Staging</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="adresse" class="form-label fw-bold">{{ $t('forms.address') }} *</label>
        <input type="text" id="adresse" v-model="form.adresse" class="form-control" required>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="frequence" class="form-label fw-bold">{{ $t('forms.frequency') }} *</label>
          <select id="frequence" v-model="form.frequence" class="form-select" required>
            <option value="" disabled>{{ $t('forms.select') }}</option>
            <option value="quotidien">{{ $t('forms.freq_daily') }}</option>
            <option value="hebdomadaire">{{ $t('forms.freq_weekly') }}</option>
            <option value="bimensuel">{{ $t('forms.freq_bimonthly') }}</option>
            <option value="mensuel">{{ $t('forms.freq_monthly') }}</option>
            <option value="ponctuel">{{ $t('forms.freq_once') }}</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="dateDebut" class="form-label fw-bold">{{ $t('forms.start_date') }} *</label>
          <input type="date" id="dateDebut" v-model="form.dateDebut" class="form-control" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="commentaires" class="form-label fw-bold">{{ $t('forms.comments') }}</label>
        <textarea id="commentaires" v-model="form.commentaires" class="form-control" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-custom btn-lg w-100 mt-2">{{ $t('nav.quote') }}</button>
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
        const SERVICE_ID = 'service_cleanmountain';
        const TEMPLATE_ID = 'template_47xgp6h';
        const PUBLIC_KEY = 'RsJxaN0Y-HqGYf9Tz';

        const payload = {
          ...this.form,
          titreEmail: "Nouvelle demande de devis",
          labelPrestation: "Type de prestation",
          labelSecondaire: "Fréquence souhaitée"
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload as Record<string, unknown>, PUBLIC_KEY);
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
