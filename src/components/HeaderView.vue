<template>
  <div
    class="header-container top-0 bg-blue-800 z-100 text-white flex-col flex justify-center w-full "
  >
    <div
      class="nav flex justify-between mt-14 items-center w-full max-w-7xl mx-auto px-8 z-10"
    >
      <div class="nav-logo-container">
        <img src="../images/logo.png" alt="logo" class="h-30" />
      </div>
      <div class="nav-items flex space-x-12 text-lg">
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
            to="/"
            class="text-white hover:text-[var(--primary-color)] transition-colors"
            >Kalkulator kosztów</router-link
          >
        </div>
        <div class="nav-item">
          <router-link
            to="/"
            class="text-white hover:text-[var(--primary-color)] transition-colors"
            >Kontakt</router-link
          >
        </div>
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
    <div class="relative z-10 text-white max-w-7xl mx-auto px-8 w-full py-24">
      <div class="max-w-2xl mt-16">
        <h2 class="text-lg uppercase tracking-wider font-semibold mb-4">
          Firma budowlana
        </h2>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          {{ headerText }}
        </h1>
        <button
          class="bg-[var(--primary-color)] hover:bg-yellow-500 text-white font-bold py-3 px-8 mt-4 transition-colors"
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

const props = defineProps({
  msg: String,
});

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
      return new URL("../images/HomeCalculatePreview.jpeg", import.meta.url)
        .href;
    case "/contact":
      return new URL("../images/HomeContactPreview.jpeg", import.meta.url).href;
    default:
      return new URL("../images/HomeHeaderPreview.jpeg", import.meta.url).href;
  }
});
</script>
<style>
/* Dodatkowy styl dla zachowania proporcji obrazu */
.header-container {
  min-height: 500px; /* Minimalna wysokość dla mniejszych ekranów */
  position: relative;
}
</style>
