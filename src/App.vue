<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import WelcomeModal from './components/WelcomeModal.vue'
</script>

<template>
  <WelcomeModal />
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style>
main {
  min-height: calc(100vh - 200px);
}
</style>
