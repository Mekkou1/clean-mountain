<template>
  <div class="container">
    <h1>Contactez-nous</h1>
    <div class="row">
      <div class="col-md-6">
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
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="tel" id="telephone" v-model="form.telephone" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea id="message" v-model="form.message" class="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-custom">Envoyer</button>
        </form>
      </div>
      <div class="col-md-6">
        <h3 class="text-brand-green mb-4">Nos coordonnées</h3>
        <p class="mb-3"><i class="fas fa-building me-2 text-brand-gold"></i> <strong>Clean Mountain</strong></p>
        <p class="mb-3"><i class="fas fa-map-marker-alt me-2 text-brand-gold"></i> Châtel, France</p>
        <p class="mb-3"><i class="fas fa-phone me-2 text-brand-gold"></i> Téléphone: <a href="tel:0641365070" class="text-decoration-none text-dark">06 41 36 50 70</a></p>
        <p class="mb-3"><i class="fas fa-envelope me-2 text-brand-gold"></i> Email: <a href="mailto:cleanmountain74@gmail.com" class="text-decoration-none text-dark">cleanmountain74@gmail.com</a></p>
        <div class="mt-4">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" alt="Chalet alpin Clean Mountain" class="img-fluid rounded shadow" style="object-fit: cover; height: 220px; width: 100%;" />
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
