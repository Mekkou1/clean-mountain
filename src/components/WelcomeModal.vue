<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

const closeModal = () => {
  isVisible.value = false;
  // Optionnel : On peut stocker en session que la fenêtre a été vue
  // sessionStorage.setItem('welcome_modal_seen', 'true');
};

onMounted(() => {
  // On affiche la fenêtre après un court délai pour l'effet visuel
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
});
</script>

<template>
  <Transition name="fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal" aria-label="Fermer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <div class="modal-body">
          <div class="image-container">
            <img src="/images/img-fenetre.jpg" alt="Présentation" class="profile-img" />
          </div>
          
          <div class="text-container">
            <h3>Bienvenue</h3>
            <div class="message">
              <p>
                Je suis Angie IZNARDO, professionnelle engagée et passionnée. Femme et maman épanouie, je mets la qualité et le sens du détail au cœur de mon travail, tout en étant particulièrement attentive au respect de l’environnement grâce à des pratiques écologiques.
              </p>
              <p>
                Installée à Châtel depuis 8 ans, je connais parfaitement la vallée et ses exigences. Fiable et investie, j’accompagne mes clients avec sérieux, bienveillance et un vrai sens du relationnel.
              </p>
              <p>
                Mon plus ? Une véritable sensibilité pour la décoration et le home staging, afin de sublimer vos espaces et créer un effet « coup de cœur ».
              </p>
              <p class="signature">
                🤝 Travailler avec moi, c’est choisir la confiance, la fiabilité et une collaboration fondée sur des valeurs humaines fortes.
              </p>
            </div>
            
            <button class="btn-custom mt-4" @click="closeModal">Découvrir mes services</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 49, 34, 0.7); /* Utilisation du vert de la marque avec transparence */
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  border: 1px solid var(--cm-gold);
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: var(--cm-green);
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: rotate(90deg);
  color: var(--cm-gold);
}

.modal-body {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

@media (min-width: 768px) {
  .modal-body {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
}

.image-container {
  flex-shrink: 0;
}

.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--cm-gold);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.text-container {
  flex: 1;
}

h3 {
  color: var(--cm-green);
  margin-bottom: 20px;
  font-size: 2rem;
  position: relative;
}

h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 50px;
  height: 2px;
  background-color: var(--cm-gold);
}

.message {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.message p {
  margin-bottom: 15px;
}

.signature {
  font-weight: 600;
  color: var(--cm-green);
  font-style: italic;
  border-left: 3px solid var(--cm-gold);
  padding-left: 15px;
  margin-top: 20px;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal-content {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-enter-from .modal-content {
  transform: scale(0.9) translateY(20px);
}

/* Custom scrollbar for the modal */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
}

.modal-content::-webkit-scrollbar-thumb {
  background: var(--cm-gold);
  border-radius: 10px;
}
</style>
