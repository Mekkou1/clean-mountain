<template>
  <main class="menu-page">
    <!-- Bannière hero Menu -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="/images/service-cuisine.jpg" alt="Cuisine exotique" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.55);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">{{ $t('menu.hero_title') }}</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">{{ $t('menu.hero_subtitle') }}</p>
      </div>
    </section>

    <div class="container py-5">
      <div class="text-center mb-5">
        <h2 class="text-brand-green text-uppercase fw-bold mb-3">{{ $t('menu.title') }}</h2>
        <p class="lead mb-2">{{ $t('menu.people_label') }} <span class="fw-bold text-brand-gold">2 / 4 / 6 / 8 / 10</span> {{ $t('menu.people_unit') }}</p>
        <p class="text-muted fst-italic">{{ $t('menu.subtitle') }}</p>
      </div>

      <div class="row g-5">
        <!-- Entrées et Salades -->
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important;">
            <div class="card-body p-4">
              <h3 class="text-brand-green border-bottom pb-2 mb-4 d-flex align-items-center">
                <i class="fas fa-leaf me-3" style="color: var(--cm-gold);"></i> {{ $t('menu.cat_starters') }}
              </h3>
              <div class="mb-4">
                <h5 class="fw-bold">{{ $t('menu.starter_name') }}</h5>
                <p class="text-muted fst-italic">{{ $t('menu.starter_desc') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Plats Signature -->
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important;">
            <div class="card-body p-4">
              <h3 class="text-brand-green border-bottom pb-2 mb-4 d-flex align-items-center">
                <i class="fas fa-utensils me-3" style="color: var(--cm-gold);"></i> {{ $t('menu.cat_signature') }}
              </h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-4">
                  <h5 class="fw-bold"><i class="fas fa-star me-2 fs-6" style="color: var(--cm-gold);"></i> {{ $t('menu.p1_name') }}</h5>
                  <p class="text-muted fst-italic ms-4 mb-0">{{ $t('menu.p1_desc') }}</p>
                </li>
                <li class="mb-4">
                  <h5 class="fw-bold"><i class="fas fa-star me-2 fs-6" style="color: var(--cm-gold);"></i> {{ $t('menu.p2_name') }}</h5>
                  <p class="text-muted fst-italic ms-4 mb-0">{{ $t('menu.p2_desc') }}</p>
                </li>
                <li class="mb-4">
                  <h5 class="fw-bold"><i class="fas fa-star me-2 fs-6" style="color: var(--cm-gold);"></i> {{ $t('menu.p3_name') }}</h5>
                  <p class="text-muted fst-italic ms-4 mb-0">{{ $t('menu.p3_desc') }}</p>
                </li>
                <li class="mb-4">
                  <h5 class="fw-bold"><i class="fas fa-star me-2 fs-6" style="color: var(--cm-gold);"></i> {{ $t('menu.p4_name') }}</h5>
                  <p class="text-muted fst-italic ms-4 mb-0">{{ $t('menu.p4_desc') }}</p>
                </li>
                <li class="mb-3">
                  <h5 class="fw-bold"><i class="fas fa-star me-2 fs-6" style="color: var(--cm-gold);"></i> {{ $t('menu.p5_name') }}</h5>
                  <p class="text-muted fst-italic ms-4 mb-0">{{ $t('menu.p5_desc') }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Accompagnements -->
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important;">
            <div class="card-body p-4">
              <h3 class="text-brand-green border-bottom pb-2 mb-4 d-flex align-items-center">
                <i class="fas fa-bowl-rice me-3" style="color: var(--cm-gold);"></i> {{ $t('menu.cat_sides') }}
              </h3>
              <ul class="list-unstyled">
                <li v-for="(side, i) in $tm('menu.sides')" :key="i" class="mb-3 d-flex align-items-center fs-5">
                  <i class="fas fa-check text-brand-gold me-3"></i> {{ $rt(side) }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Boissons Maison & Cocktails -->
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm" style="border-top: 4px solid var(--cm-gold) !important;">
            <div class="card-body p-4">
              <h3 class="text-brand-green border-bottom pb-2 mb-4 d-flex align-items-center">
                <i class="fas fa-glass-martini-alt me-3" style="color: var(--cm-gold);"></i> {{ $t('menu.cat_drinks') }}
              </h3>
              <ul class="list-unstyled">
                <li v-for="(drink, i) in $tm('menu.drinks')" :key="i" class="mb-3 d-flex align-items-center fs-5">
                  <i class="fas fa-check text-brand-gold me-3"></i> {{ $rt(drink) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Notes supplémentaires -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="p-4 bg-light rounded text-center border" style="border-left: 4px solid var(--cm-green) !important;">
            <p class="fs-5 mb-2"><i class="fas fa-seedling text-success me-2"></i> <span class="fw-bold">PS:</span> {{ $t('menu.ps_veggie') }}</p>
            <p class="fs-5 text-muted mb-0"><i class="fas fa-pepper-hot text-danger me-2"></i> {{ $t('menu.ps_spices') }}</p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-4 flex-wrap mt-5">
        <button @click="toggleOrderForm" class="btn btn-custom btn-lg px-5 py-3 shadow">{{ $t('menu.btn_order') }}</button>
        <RouterLink to="/quote" class="btn btn-outline-success btn-lg px-5 py-3 shadow border-2" style="color: var(--cm-green); border-color: var(--cm-green);">{{ $t('nav.quote') }}</RouterLink>
      </div>

      <!-- Formulaire de commande -->
      <div v-if="showOrderForm" id="orderFormSection" class="mt-5 p-5 bg-white rounded shadow border" style="border-top: 4px solid var(--cm-gold) !important;">
        <h3 class="mb-4 text-brand-green fw-bold text-center">{{ $t('menu.order_title') }}</h3>
        <p class="text-muted text-center mb-5">{{ $t('menu.order_desc') }}</p>

        <form @submit.prevent="submitOrder">
          <div class="mb-4">
            <label for="statut" class="form-label fw-bold">{{ $t('forms.status') }} *</label>
            <select id="statut" v-model="orderForm.statut" class="form-select" required>
              <option value="" disabled>{{ $t('forms.select') }}</option>
              <option value="particulier">{{ $t('forms.individual') }}</option>
              <option value="entreprise">{{ $t('forms.company') }}</option>
            </select>
          </div>

          <div v-if="orderForm.statut === 'entreprise'" class="mb-4">
            <label for="nomEntreprise" class="form-label fw-bold">{{ $t('forms.company_name') }} *</label>
            <input type="text" id="nomEntreprise" v-model="orderForm.nomEntreprise" class="form-control" required>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <label for="nom" class="form-label fw-bold">{{ $t('forms.name') }} *</label>
              <input type="text" id="nom" v-model="orderForm.nom" class="form-control" required>
            </div>
            <div class="col-md-6 mb-4">
              <label for="prenom" class="form-label fw-bold">{{ $t('forms.firstname') }} *</label>
              <input type="text" id="prenom" v-model="orderForm.prenom" class="form-control" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <label for="email" class="form-label fw-bold">{{ $t('forms.email') }} *</label>
              <input type="email" id="email" v-model="orderForm.email" class="form-control" required>
            </div>
            <div class="col-md-6 mb-4">
              <label for="telephone" class="form-label fw-bold">{{ $t('forms.phone') }} *</label>
              <input type="tel" id="telephone" v-model="orderForm.telephone" class="form-control" required>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4">
              <label for="dateLivraison" class="form-label fw-bold">{{ $t('forms.date') }} *</label>
              <input type="date" id="dateLivraison" v-model="orderForm.dateLivraison" class="form-control" required>
            </div>
            <div class="col-md-6 mb-4">
              <label for="nombrePersonnes" class="form-label fw-bold">{{ $t('forms.people_count') }} *</label>
              <select id="nombrePersonnes" v-model="orderForm.nombrePersonnes" class="form-select" required>
                <option value="" disabled>{{ $t('forms.select') }}</option>
                <option value="2">2 {{ $t('forms.people') }}</option>
                <option value="4">4 {{ $t('forms.people') }}</option>
                <option value="6">6 {{ $t('forms.people') }}</option>
                <option value="8">8 {{ $t('forms.people') }}</option>
                <option value="10">10 {{ $t('forms.people') }}</option>
                <option value="plus">{{ $t('forms.more_people') }}</option>
              </select>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">{{ $t('forms.menu_choice') }} *
              <span v-if="orderForm.choixMenu.length > 0" class="badge ms-2" style="background-color: var(--cm-gold); color: white;">
                {{ orderForm.choixMenu.length }} {{ orderForm.choixMenu.length > 1 ? $t('forms.items_selected') : $t('forms.item_selected') }}
              </span>
            </label>

            <div class="menu-checkbox-group p-3 rounded border">
              <!-- Entrées -->
              <p class="fw-bold text-brand-green text-uppercase small mb-2 mt-1">
                <i class="fas fa-leaf me-2" style="color: var(--cm-gold);"></i>{{ $t('menu.cat_starters') }}
              </p>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_salade" value="Salade fraîcheur exotique" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_salade">{{ $t('menu.starter_name') }}</label>
              </div>

              <!-- Plats Signature -->
              <p class="fw-bold text-brand-green text-uppercase small mb-2 mt-3">
                <i class="fas fa-utensils me-2" style="color: var(--cm-gold);"></i>{{ $t('menu.cat_signature') }}
              </p>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_lasagne" value="Lasagne de légumes au curry coco" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_lasagne">{{ $t('menu.p1_name') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_kedjenou" value="Poulet fermier Kedjenou" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_kedjenou">{{ $t('menu.p2_name') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_aubergine_boeuf" value="Ragoût d'aubergines au bœuf" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_aubergine_boeuf">{{ $t('menu.opt_eggplant_beef') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_aubergine_poulet" value="Ragoût d'aubergines au poulet" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_aubergine_poulet">{{ $t('menu.opt_eggplant_chicken') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_mafe_boeuf" value="Mafé sauce cacahuète au bœuf" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_mafe_boeuf">{{ $t('menu.opt_mafe_beef') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_mafe_poulet" value="Mafé sauce cacahuète au poulet" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_mafe_poulet">{{ $t('menu.opt_mafe_chicken') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_grillades" value="Grillades exotiques ivoirienne" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_grillades">{{ $t('menu.p5_name') }}</label>
              </div>

              <!-- Accompagnements -->
              <p class="fw-bold text-brand-green text-uppercase small mb-2 mt-3">
                <i class="fas fa-bowl-rice me-2" style="color: var(--cm-gold);"></i>{{ $t('menu.cat_sides') }}
              </p>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_riz_pilaf" value="Riz pilaf parfumé" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_riz_pilaf">{{ $t('menu.opt_rice_pilaf') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_riz_coco" value="Riz coco délicat" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_riz_coco">{{ $t('menu.opt_rice_coco') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_plantain" value="Banane plantain dorée ou vapeur" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_plantain">{{ $t('menu.opt_plantain') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_patate" value="Patate douce vapeur ou rôtie" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_patate">{{ $t('menu.opt_sweet_potato') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_attieke" value="Semoule de manioc (attiéké)" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_attieke">{{ $t('menu.opt_attieke') }}</label>
              </div>

              <!-- Boissons -->
              <p class="fw-bold text-brand-green text-uppercase small mb-2 mt-3">
                <i class="fas fa-glass-martini-alt me-2" style="color: var(--cm-gold);"></i>{{ $t('menu.cat_drinks') }}
              </p>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_hibiscus" value="Nectar d'hibiscus" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_hibiscus">{{ $t('menu.opt_hibiscus') }}</label>
              </div>
              <div class="form-check menu-check-item mb-3">
                <input class="form-check-input" type="checkbox" id="dish_gingembre" value="Nectar gingembre-ananas" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_gingembre">{{ $t('menu.opt_ginger') }}</label>
              </div>
              <div class="form-check menu-check-item mb-2">
                <input class="form-check-input" type="checkbox" id="dish_cocktail" value="Cocktail exotique" v-model="orderForm.choixMenu">
                <label class="form-check-label" for="dish_cocktail">{{ $t('menu.opt_cocktail') }}</label>
              </div>
            </div>

            <!-- Validation message -->
            <small v-if="orderForm.choixMenu.length === 0 && formSubmitted" class="text-danger">
              {{ $t('forms.select_min_one') }}
            </small>
          </div>

          <div class="mb-4">
            <label for="adresse" class="form-label fw-bold">{{ $t('forms.address') }} *</label>
            <input type="text" id="adresse" v-model="orderForm.adresse" class="form-control" required>
          </div>

          <div class="mb-4">
            <label for="commentaires" class="form-label fw-bold">{{ $t('forms.comments') }}</label>
            <textarea id="commentaires" v-model="orderForm.commentaires" class="form-control" rows="4"></textarea>
          </div>

          <div class="text-center mt-5">
            <button type="submit" class="btn btn-custom btn-lg px-5 py-3 w-100 shadow fw-bold fs-5">{{ $t('forms.submit_order') }}</button>
          </div>
        </form>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import emailjs from '@emailjs/browser'

export default {
  name: 'MenuView',
  components: { RouterLink },
  data() {
    return {
      showOrderForm: false,
      formSubmitted: false,
      orderForm: {
        statut: '',
        nomEntreprise: '',
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        dateLivraison: '',
        nombrePersonnes: '',
        choixMenu: [] as string[],
        adresse: '',
        commentaires: ''
      }
    }
  },
  methods: {
    toggleOrderForm() {
      this.showOrderForm = !this.showOrderForm;
      if (this.showOrderForm) {
        this.$nextTick(() => {
          document.getElementById('orderFormSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    },
    async submitOrder() {
      try {
        const SERVICE_ID = 'service_cleanmountain';
        const TEMPLATE_ID = 'template_47xgp6h';
        const PUBLIC_KEY = 'RsJxaN0Y-HqGYf9Tz';

        const formData = {
          titreEmail: "Nouvelle Commande Food'Afriq",
          labelPrestation: "Plats sélectionnés",
          typePrestation: this.orderForm.choixMenu.join(', '),
          labelSecondaire: "Nb. de personnes",
          frequence: this.orderForm.nombrePersonnes + " personnes",
          dateDebut: this.orderForm.dateLivraison,
          statut: this.orderForm.statut,
          nomEntreprise: this.orderForm.nomEntreprise,
          nom: this.orderForm.nom,
          prenom: this.orderForm.prenom,
          telephone: this.orderForm.telephone,
          email: this.orderForm.email,
          adresse: this.orderForm.adresse,
          commentaires: this.orderForm.commentaires
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData as Record<string, unknown>, PUBLIC_KEY);
        alert('Commande envoyée avec succès! Nous vous recontacterons très vite.');
        this.resetOrderForm();
        this.showOrderForm = false;
      } catch (error) {
        console.error("Erreur lors de l'envoi de la commande:", error);
        alert("Une erreur est survenue. Veuillez réessayer plus tard.");
      }
    },
    resetOrderForm() {
      this.orderForm = {
        statut: '',
        nomEntreprise: '',
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        dateLivraison: '',
        nombrePersonnes: '',
        choixMenu: [] as string[],
        adresse: '',
        commentaires: ''
      }
    }
  }
}
</script>

<style scoped>
.btn-custom {
  background-color: var(--cm-green);
  color: white;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: var(--cm-gold);
  color: white;
  transform: translateY(-2px);
}

/* Checkbox group styles */
.menu-checkbox-group {
  background-color: #fafafa;
  max-height: 480px;
  overflow-y: auto;
}

.menu-check-item {
  padding: 10px 12px;
  border-radius: 8px;
  transition: background 0.2s ease;
  cursor: pointer;
}

.menu-check-item:hover {
  background-color: rgba(6, 49, 34, 0.05);
}

.menu-check-item .form-check-input {
  width: 1.3em;
  height: 1.3em;
  margin-top: 0.1em;
  cursor: pointer;
  accent-color: var(--cm-green);
}

.menu-check-item .form-check-label {
  cursor: pointer;
  font-size: 0.97rem;
  padding-left: 6px;
  line-height: 1.4;
}

.menu-check-item .form-check-input:checked + .form-check-label {
  color: var(--cm-green);
  font-weight: 600;
}
</style>
