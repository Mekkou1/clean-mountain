<template>
  <div class="container py-5">
    <h1 class="text-brand-green fw-bold text-center mb-5 text-uppercase">{{ $t('contact.title') }}</h1>
    <div class="row g-5">
      <div class="col-md-6">
        <form @submit.prevent="submitForm" class="p-4 bg-white rounded shadow-sm border">
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
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">{{ $t('forms.email') }} *</label>
            <input type="email" id="email" v-model="form.email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="telephone" class="form-label fw-bold">{{ $t('forms.phone') }} *</label>
            <input type="tel" id="telephone" v-model="form.telephone" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label fw-bold">{{ $t('forms.message') }} *</label>
            <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-custom w-100 py-2 fw-bold text-uppercase">{{ $t('forms.send') }}</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <h3 class="text-brand-green mb-4 fw-bold">{{ $t('contact.info_title') }}</h3>
        <p class="mb-3 fs-5"><i class="fas fa-building me-3 text-brand-gold"></i> <strong>Clean Mountain</strong></p>
        <p class="mb-3 fs-5"><i class="fas fa-map-marker-alt me-3 text-brand-gold"></i> Châtel, France</p>
        <p class="mb-3 fs-5"><i class="fas fa-phone me-3 text-brand-gold"></i> <a href="tel:0641365070" class="text-decoration-none text-dark">06 41 36 50 70</a></p>
        <p class="mb-3 fs-5"><i class="fab fa-whatsapp me-3 text-brand-gold"></i> <a href="https://wa.me/33641365070" target="_blank" class="text-decoration-none text-dark">WhatsApp Business</a></p>
        <p class="mb-3 fs-5"><i class="fas fa-envelope me-3 text-brand-gold"></i> <a href="mailto:cleanmountain74@gmail.com" class="text-decoration-none text-dark">cleanmountain74@gmail.com</a></p>
        <div class="mt-4">
          <img src="/images/contact.jpg" alt="Chalet alpin Clean Mountain" class="img-fluid rounded shadow" style="object-fit: cover; height: 300px; width: 100%;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        statut: '',
        nomEntreprise: '',
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        // Clés secrètes EmailJS pour le formulaire Contact
        const SERVICE_ID = 'service_cleanmountain';
        const TEMPLATE_ID = 'template_sx7eq6c';
        const PUBLIC_KEY = 'RsJxaN0Y-HqGYf9Tz';

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, this.form as Record<string, unknown>, PUBLIC_KEY);
        alert('Message envoyé avec succès!');
        this.resetForm();
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
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
        message: ''
      }
    }
  }
}
</script>
