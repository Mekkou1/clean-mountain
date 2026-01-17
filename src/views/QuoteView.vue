<template>
  <div class="container">
    <h1>Demande de devis</h1>
    <p>Remplissez ce formulaire pour obtenir un devis personnalisé pour vos besoins en nettoyage professionnel.</p>

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
          <option value="regulier">Nettoyage régulier</option>
          <option value="ponctuel">Ménage ponctuel</option>
          <option value="airbnb">Entretien Airbnb et locations saisonnières</option>
          <option value="professionnel">Locaux professionnels</option>
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
      <button type="submit" class="btn btn-custom">Demander un devis</button>
    </form>
  </div>
</template>

<script>
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
    submitForm() {
      console.log('Quote form submitted:', this.form)
      alert('Demande de devis envoyée avec succès!')
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
