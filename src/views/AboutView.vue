<template>
  <div class="about-page">

    <!-- Bannière hero À propos -->
    <section class="position-relative mb-5" style="height: 280px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&h=400&fit=crop" alt="Paysage alpin Clean Mountain" class="w-100 h-100" style="object-fit: cover; filter: brightness(0.5);">
      <div class="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 class="text-white display-5 fw-bold mb-2" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">{{ $t('about.hero') }}</h1>
        <p class="lead" style="font-style: italic; color: var(--cm-gold);">{{ $t('about.tagline') }}</p>
      </div>
    </section>

    <div class="container">
      <!-- Section d'introduction avec image -->
      <section class="section text-center mb-5">
        <h1 class="text-brand-green mb-4 text-uppercase fw-bold">{{ $t('about.intro_title') }}</h1>
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="@/assets/logo_clean.jpg" alt="Logo Clean Mountain" class="img-fluid mb-3 rounded shadow" style="max-height: 250px; object-fit: contain; background: white;" />
          </div>
          <div class="col-md-6">
            <p class="lead">{{ $t('about.intro_text') }}</p>
          </div>
        </div>
      </section>

      <!-- Notre histoire -->
      <section class="section mb-5">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">{{ $t('about.history_title') }}</h2>
        <div class="row">
          <div class="col-md-8">
            <p>{{ $t('about.history_p1') }}</p>
            <p>{{ $t('about.history_p2') }}</p>
          </div>
          <div class="col-md-4">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Paysage alpin" class="img-fluid rounded shadow" style="object-fit: cover; height: 250px; width: 100%;" />
          </div>
        </div>
      </section>

      <!-- Zone d'intervention -->
      <section class="section mb-5">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">{{ $t('about.zone_title') }}</h2>
        <div class="row">
          <div class="col-md-6">
            <p>{{ $t('about.zone_text') }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-transparent">Châtel</li>
              <li class="list-group-item bg-transparent">La Chapelle-d'Abondance</li>
              <li class="list-group-item bg-transparent">Abondance</li>
            </ul>
          </div>
          <div class="col-md-6">
            <p>{{ $t('about.zone_p2') }}</p>
          </div>
        </div>
      </section>

      <!-- Nos valeurs fondamentales -->
      <section class="section">
        <h2 class="text-brand-gold mb-4 text-uppercase fw-bold">{{ $t('about.values_title') }}</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">{{ $t('about.v1_title') }}</h4>
                <p class="card-text flex-grow-1">{{ $t('about.v1_text') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">{{ $t('about.v2_title') }}</h4>
                <p class="card-text flex-grow-1">{{ $t('about.v2_text') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card text-center h-100">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-brand-green">{{ $t('about.v3_title') }}</h4>
                <p class="card-text flex-grow-1">{{ $t('about.v3_text') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutView'
}
</script>
