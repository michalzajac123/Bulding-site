<template>
  <footer class="bg-gradient-to-b from-blue-800 to-blue-900 text-white">
    <!-- Główna sekcja footera -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- O firmie -->
        <div>
          <h3 class="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
            O nas
          </h3>
          <p class="text-gray-300 mb-4">
            Jesteśmy firmą budowlaną z wieloletnim doświadczeniem, oferującą
            kompleksowe usługi w zakresie budownictwa.
          </p>
          <div class="flex items-center space-x-3 mt-4">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.url"
              target="_blank"
              :aria-label="social.name"
              class="transition-all transform hover:scale-110 hover:rotate-3"
            >
              <div
                :class="`p-2 bg-white/20 rounded-xl backdrop-blur-sm ${social.hoverClass} transition-all duration-300 shadow-md`"
              >
                <span v-html="social.icon" class="w-6 h-6 block"></span>
              </div>
            </a>
          </div>
        </div>

        <!-- Nasze usługi -->
        <div>
          <h3 class="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
            Nasze usługi
          </h3>
          <ul class="space-y-2">
            <li v-for="(service, index) in services" :key="index">
              <div
                :href="service.url"
                class="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                {{ service.name }}
              </div>
            </li>
          </ul>
        </div>

        <!-- Godziny pracy -->
        <div>
          <h3 class="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
            Godziny pracy
          </h3>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span class="text-gray-300">Poniedziałek - Piątek:</span>
              <span>8:00 - 17:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-300">Sobota:</span>
              <span>9:00 - 14:00</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-300">Niedziela:</span>
              <span>Zamknięte</span>
            </li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h3 class="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
            Kontakt
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>ul. Myśliwska Bochnia</span>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a
                href="mailto:zaj.damian@gmail.com"
                class="hover:text-yellow-300 transition-colors"
              >
                zaj.damian@gmail.com
              </a>
            </li>
            <li class="flex items-start">
              <svg
                class="w-5 h-5 mr-3 mt-1 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <a
                href="tel:+48123456789"
                class="hover:text-yellow-300 transition-colors"
              >
                +48 123 456 789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright sekcja -->
    <div class="bg-blue-900 py-4 border-t border-blue-700">
      <div
        class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm text-gray-400">
          © {{ new Date().getFullYear() }} Stronę wykonał Michał Zając i Michał
          Zachara. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100092183511322",
    icon: `<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.89h-2.32v6.99C18.34 21.13 22 17 22 12z"/></svg>`,
    hoverClass: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zajacdevelopment/",
    icon: `<svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/></svg>`,
    hoverClass:
      "hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600",
  },
];

const services = [
  { name: "Budownictwo mieszkaniowe", url: "#" },
  { name: "Renowacje", url: "#" },
  { name: "Projekty komercyjne", url: "#" },
  { name: "Wykończenia wnętrz", url: "#" },
  { name: "Projekty i konsultacje", url: "#" },
];
</script>
