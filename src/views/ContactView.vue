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
        <h3>Nos coordonnées</h3>
        <p><strong>Clean Mountain</strong></p>
        <p>Châtel, France</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
        <p>Email: contact@cleanmountain.fr</p>
        <div class="mt-4">
          <img src="@/assets/IMAGE 5.jpg" alt="Image de contact" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    submitForm() {
      console.log('Form submitted:', this.form)
      alert('Message envoyé avec succès!')
      this.resetForm()
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
