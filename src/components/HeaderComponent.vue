<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-brand-green py-2 shadow-sm sticky-top">
    <div class="container">
      <!-- Logo & Brand -->
      <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="@/assets/logo_clean.jpg" alt="Clean Mountain Logo" width="42" height="42" class="rounded shadow-sm" style="object-fit: contain; background: white;">
        <span class="d-none d-sm-inline">CLEAN MOUNTAIN <span style="color: var(--cm-gold);">&</span> CO</span>
      </RouterLink>

      <!-- Burger button -->
      <button
        class="navbar-toggler border-0"
        type="button"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="navbar-collapse" :class="{ show: menuOpen }" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="closeMenu">{{ $t('nav.home') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="closeMenu">{{ $t('nav.about') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/services" @click="closeMenu">{{ $t('nav.services') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/eco" @click="closeMenu">{{ $t('nav.eco') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/menu" @click="closeMenu">{{ $t('nav.menu') }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" @click="closeMenu">{{ $t('nav.contact') }}</RouterLink>
          </li>

          <!-- CTA Button -->
          <li class="nav-item mt-2 mt-lg-0 ms-lg-2">
            <RouterLink class="btn btn-custom px-3 py-2 d-block text-center" to="/quote" @click="closeMenu">
              {{ $t('nav.quote') }}
            </RouterLink>
          </li>

          <!-- Language switcher -->
          <li class="nav-item mt-3 mt-lg-0 ms-lg-3">
            <div class="lang-switcher d-flex align-items-center justify-content-center gap-1">
              <button
                class="lang-btn"
                :class="{ 'lang-active': $i18n.locale === 'fr' }"
                @click="changeLocale('fr')"
              >FR</button>
              <span class="text-white opacity-50">|</span>
              <button
                class="lang-btn"
                :class="{ 'lang-active': $i18n.locale === 'en' }"
                @click="changeLocale('en')"
              >EN</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

export default {
  name: 'HeaderComponent',
  components: { RouterLink },
  setup() {
    const { locale } = useI18n()
    const menuOpen = ref(false)

    const changeLocale = (newLocale: string) => {
      locale.value = newLocale
      closeMenu()
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

    const closeMenu = () => {
      menuOpen.value = false
    }

    return { changeLocale, menuOpen, toggleMenu, closeMenu }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--cm-green) !important;
  background-image: none !important;
}

.navbar-brand {
  font-weight: 800;
  color: var(--cm-gold) !important;
  font-family: 'Outfit', 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

/* Nav links */
.nav-link {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
  font-size: 0.92rem;
  transition: color 0.25s ease;
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--cm-gold);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link:hover::after {
  color: var(--cm-gold) !important;
}

.nav-link:hover::after {
  width: 70%;
}

/* Active link via Vue Router */
.router-link-active.nav-link,
.router-link-exact-active.nav-link {
  color: var(--cm-gold) !important;
  font-weight: 700;
}

.router-link-active.nav-link::after,
.router-link-exact-active.nav-link::after {
  width: 70%;
}

/* CTA Button */
.btn-custom {
  background: linear-gradient(45deg, var(--cm-green), var(--cm-gold));
  border: 1px solid var(--cm-gold);
  border-radius: 25px;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.88rem;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background: linear-gradient(45deg, #0b4530, #d4af37);
  color: #ffffff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* Language switcher */
.lang-switcher {
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 4px 10px;
}

.lang-btn {
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.75);
  font-weight: 600;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
}

.lang-btn:hover {
  color: #fff;
  background: rgba(255,255,255,0.15);
}

.lang-active {
  color: var(--cm-gold) !important;
  background: rgba(255,255,255,0.2) !important;
}

/* Mobile collapse */
.navbar-collapse {
  display: none;
}

.navbar-collapse.show {
  display: block;
}

@media (min-width: 992px) {
  .navbar-collapse {
    display: flex !important;
  }
}

/* Mobile menu styling */
@media (max-width: 991px) {
  .navbar-collapse.show {
    background-color: var(--cm-green);
    padding: 12px 0 20px;
    border-top: 1px solid rgba(255,255,255,0.15);
    margin-top: 8px;
  }

  .nav-link {
    padding: 10px 16px !important;
    border-radius: 8px;
    font-size: 1rem;
  }

  .nav-link:hover {
    background: rgba(255,255,255,0.1);
  }

  .nav-link::after {
    display: none;
  }

  .router-link-active.nav-link,
  .router-link-exact-active.nav-link {
    background: rgba(212, 175, 55, 0.15);
    border-left: 3px solid var(--cm-gold);
    padding-left: 13px !important;
  }

  .btn-custom {
    margin: 8px 16px;
    padding: 12px 20px !important;
    font-size: 1rem;
    border-radius: 8px;
  }

  .lang-switcher {
    margin: 0 16px;
    justify-content: flex-start;
  }
}
</style>
