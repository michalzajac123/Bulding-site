<template>
  <section
    class="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Nagłówek sekcji -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Nasze <span class="text-yellow-600">Realizacje</span>
        </h2>
        <div class="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Poznaj nasze najnowsze projekty budowlane. Każdy dom to historia,
          którą tworzymy razem z naszymi klientami.
        </p>
      </div>

      <div class="grid grid-cols-1 md2:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Karta Informacyjna -->
        <div
          class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-xl hover:shadow-2xl transition-all duration-500 group"
        >
          <div
            class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"
          ></div>
          <div class="relative p-8 h-full flex flex-col justify-between">
            <div>
              <h1
                class="text-white font-bold text-3xl md:text-4xl mb-6 leading-tight"
              >
                Nasze Portfolio
                <span
                  class="block w-16 h-1.5 bg-white mt-4 rounded-full"
                ></span>
              </h1>
              <p class="text-white/90 text-lg font-medium mb-8">
                Odkryj więcej naszych projektów w mediach społecznościowych
              </p>
            </div>

            <div class="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100092183511322"
                target="_blank"
                aria-label="Facebook"
                class="transition-all transform hover:scale-110 hover:rotate-3"
              >
                <div
                  class="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 shadow-md"
                >
                  <svg
                    class="w-7 h-7 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.89h-2.32v6.99C18.34 21.13 22 17 22 12z"
                    />
                  </svg>
                </div>
              </a>

              <a
                href="https://www.instagram.com/zajacdevelopment/"
                target="_blank"
                aria-label="Instagram"
                class="transition-all transform hover:scale-110 hover:-rotate-3"
              >
                <div
                  class="p-3 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-gradient-to-br from-pink-600 to-purple-600 transition-all duration-300 shadow-md"
                >
                  <svg
                    class="w-7 h-7 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Karty Projektów -->
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :image="project.image"
          :title="project.title"
          :description="project.description"
          :area="project.area"
          :features="project.features"
          :image-alt="project.imageAlt"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";

interface CardInfo {
  image: string;
  title: string;
  description: string;
  area: string;
  features: string;
  imageAlt: string;
}

const projects: CardInfo[] = [
  {
    image: "HomePreview.jpeg",
    title: "Nowoczesny Dom Jednorodzinny",
    description:
      "Kompleksowa realizacja domu parterowego z poddaszem użytkowym. Wykonanie w technologii murowanej z elewacją z drewna i kamienia.",
    area: "145",
    features: "3 sypialnie, 2 łazienki, garaż",
    imageAlt: "Nowoczesny dom jednorodzinny z tarasem",
  },
  {
    image: "HomePreview.jpeg",
    title: "Dom w Stylu Dworkowym",
    description:
      "Pełna realizacja domu w stylu dworkowym z podcieniem i charakterystycznym dachem czterospadowym.",
    area: "210",
    features: "4 sypialnie, salon z kominkiem, ogród",
    imageAlt: "Elegancki dom w stylu dworkowym z podcieniem",
  },
  {
    image: "HomePreview.jpeg",
    title: "Dom Pasywny",
    description:
      "Innowacyjna realizacja domu energooszczędnego klasy A+ z rekuperacją i panelami fotowoltaicznymi.",
    area: "160",
    features: "3 sypialnie, pompa ciepła, wentylacja mechaniczna",
    imageAlt: "Nowoczesny dom pasywny z dużymi przeszkleniami",
  },
  {
    image: "HomePreview.jpeg",
    title: "Dom z Poddaszem",
    description:
      "Kompleksowa budowa domu z przestronnym poddaszem użytkowym i antresolą łączącą kondygnacje.",
    area: "185",
    features: "Sypialnia główna z garderobą, otwarta kuchnia",
    imageAlt: "Dom z poddaszem użytkowym i antresolą",
  },
  {
    image: "HomePreview.jpeg",
    title: "Dom na Trudnej Działce",
    description:
      "Specjalistyczna realizacja budynku na działce ze spadkiem terenu z tarasami wielopoziomowymi.",
    area: "175",
    features: "Taras widokowy, niestandardowa konstrukcja",
    imageAlt: "Dom na skarpie z tarasami na różnych poziomach",
  },
];
</script>
