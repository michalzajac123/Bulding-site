<template>
  <div
    class="services-container flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl p-6 mx-auto relative z-10"
  >
    <div
      class="services-block flex flex-col text-center items-center justify-center p-6 mb-8 md:mb-0"
      v-for="(service, index) in services"
      :key="index"
    >
      <div
        class="icon-circle mb-8 border-4 border-[#f7b633] rounded-full w-32 h-32 flex items-center justify-center"
      >
        <span v-html="service.icon" class="text-[#f7b633] text-4xl"></span>
      </div>
      <div class="title-container mb-4">
        <h2 class="text-2xl font-bold text-[#1a3c8d] uppercase">
          {{ service.title }}
        </h2>
      </div>
      <div class="text mb-4 text-gray-600 max-w-xs">
        <p>
          {{ service.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Wiele lat doświadczenia",
    text: "Mamy wieloletnie doświadczenie w branży budowlanej, co pozwala nam na skuteczne i profesjonalne podejście do każdego projektu.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
            <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>`,
  },
  {
    title: "Profesjonalne wykonanie",
    text: "Nasza firma gwarantuje wykonanie wszystkich prac budowlanych zgodnie z najwyższymi standardami jakości.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
          </svg>`,
  },
  {
    title: "Wiele skończonych projektów",
    text: "Zrealizowaliśmy wiele projektów budowlanych, które zyskały uznanie naszych klientów i pozytywne opinie.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
            <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
            <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clip-rule="evenodd" />
            <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
          </svg>`,
  },
];
</script>
