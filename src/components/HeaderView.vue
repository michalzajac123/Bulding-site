<template>
  <div
    class="header-container top-0 bg-blue-800 z-100 text-white flex-col flex justify-center w-full"
  >
    <div
      class="nav flex justify-between py-4 items-center w-full max-w-7xl mx-auto px-8 z-10"
    >
      <div class="nav-logo-container z-80">
        <img src="../images/logo.png" alt="logo" class="h-20 md1:h-25" />
      </div>
      <!-- nav dektop > 770 -->
      <div class="nav-items space-x-12 text-lg hidden md1:flex">
        <div class="nav-item">
          <router-link
            to="/"
            class="text-white font-thin hover:text-[var(--primary-color)] transition-colors"
            >Strona Główna</router-link
          >
        </div>
        <div class="nav-item">
          <router-link
            to="/aboutus"
            class="text-white hover:text-[var(--primary-color)] transition-colors"
            >O nas</router-link
          >
        </div>
        <div class="nav-item">
          <router-link
            to="/calculator"
            class="text-white hover:text-[var(--primary-color)] transition-colors"
            >Kalkulator kosztów</router-link
          >
        </div>
        <div class="nav-item">
          <router-link
            to="/contact"
            class="text-white hover:text-[var(--primary-color)] transition-colors"
            >Kontakt</router-link
          >
        </div>
      </div>

      <!-- nav mobile -->
      <div class="md1:hidden flex items-center">
        <!-- Burger button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-white focus:outline-none z-80 transition-transform duration-200"
          :class="{ 'transform rotate-90': isMobileMenuOpen }"
        >
          <svg
            class="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <transition name="slide-fade">
          <div
            v-if="isMobileMenuOpen"
            class="fixed inset-0 w-full h-[400px] bg-blue-900 text-white flex flex-col items-center justify-center space-y-7 text-xl z-70 pt-16"
            @click="closeMenu"
          >
            <router-link
              to="/"
              class="hover:text-[var(--primary-color)] transition-colors rounded mt-8"
              @click="closeMenu"
            >
              Strona Główna
            </router-link>
            <router-link
              to="/aboutus"
              class="hover:text-[var(--primary-color)] transition-colors py-2 px-4 rounded"
              @click="closeMenu"
            >
              O nas
            </router-link>
            <router-link
              to="/"
              class="hover:text-[var(--primary-color)] transition-colors py-2 px-4 rounded"
              @click="closeMenu"
            >
              Kalkulator kosztów
            </router-link>
            <router-link
              to="/contact"
              class="hover:text-[var(--primary-color)] transition-colors py-2 px-4 rounded"
              @click="closeMenu"
            >
              Kontakt
            </router-link>
          </div>
        </transition>
      </div>
    </div>

    <!-- Dodanie niebieskiej nakładki z przezroczystością -->
    <div
      class="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-60 z-1"
    ></div>

    <img
      :src="imageLink"
      class="z-0 absolute top-0 left-0 w-full h-full object-cover"
      alt="Home preview"
    />

    <!-- Treść na obrazie -->
    <div class="relative z-4 text-white max-w-7xl mx-auto px-8 w-full py-24">
      <div class="max-w-2xl mt-16">
        <h2 class="text-lg uppercase tracking-wider font-semibold mb-4">
          Firma budowlana
        </h2>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          {{ headerText }}
        </h1>
        <button
          class="bg-[var(--primary-color)] hover:bg-yellow-500 text-white font-bold py-3 px-8 mt-4 transition-colors cursor-pointer"
          @click="scrollToSection"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

window.addEventListener("resize", () => {
  isMobileMenuOpen.value = false;
});

window.addEventListener("scroll", () => {
  isMobileMenuOpen.value = false;
});

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};

const route = useRoute();

const headerText = computed(() => {
  switch (route.path) {
    case "/":
      return "BUDUJEMY TWOJE MARZENIA";
    case "/aboutus":
      return "POZNAJ NASZĄ FIRMĘ";
    case "/calculator":
      return "OBLICZ KOSZTY BUDOWY";
    case "/contact":
      return "SKONTAKTUJ SIĘ Z NAMI";
    default:
      return "BUDUJEMY TWOJE MARZENIA";
  }
});

const buttonText = computed(() => {
  switch (route.path) {
    case "/":
      return "WYCENA";
    case "/aboutus":
      return "NASZA HISTORIA";
    case "/calculator":
      return "ROZPOCZNIJ";
    case "/contact":
      return "NAPISZ DO NAS";
    default:
      return "WYCENA";
  }
});
const imageLink = computed(() => {
  switch (route.path) {
    case "/":
      return new URL("../images/HomeHeaderPreview.jpeg", import.meta.url).href;
    case "/aboutus":
      return new URL("../images/HomeAboutUsPreview.jpeg", import.meta.url).href;
    case "/calculator":
      return new URL("../images/Calculator.jpg", import.meta.url).href;
    case "/contact":
      return new URL("../images/ContactWithUs.jpg", import.meta.url).href;
    default:
      return new URL("../images/HomeHeaderPreview.jpeg", import.meta.url).href;
  }
});

// Funkcja do przewijania do odpowiedniej sekcji
const scrollToSection = () => {
  let targetId;

  switch (route.path) {
    case "/":
      targetId = "pricing-section";
      break;
    case "/aboutus":
      targetId = "history-section";
      break;
    case "/calculator":
      targetId = "calculator-section";
      break;
    case "/contact":
      targetId = "contact-form";
      break;
    default:
      targetId = "main-content";
  }

  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    // Jeśli nie znaleziono elementu, przewiń do pewnej pozycji
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
};
</script>
<style>
/* Dodatkowy styl dla zachowania proporcji obrazu */
.header-container {
  min-height: 500px; /* Minimalna wysokość dla mniejszych ekranów */
  position: relative;
}

/*Animacje menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
