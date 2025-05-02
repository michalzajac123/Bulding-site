<template>
  <div class="py-20 px-4 w-full relative">
    <div class="max-w-7xl p-6 mx-auto relative z-10">
      <h1
        class="mb-4 md:text-6xl font-bold text-4xl tracking-wider text-[var(--secondary-color)]"
      >
        KIM JESTEŚMY
      </h1>
      <span class="block w-20 h-[3px] bg-[var(--primary-color)] mb-12"></span>
      <div class="flex flex-col md:flex-row justify-between gap-10">
        <div class="flex-1 mb-8 md:mb-0">
          <h2
            class="text-[var(--secondary-color)] font-bold mb-6 text-xl md:text-2xl tracking-wide"
          >
            ZMIENIAMY TWOJE MARZENIA W RZECZYWISTOŚĆ
          </h2>
          <p class="text-lg leading-relaxed mb-5 text-gray-600">
            Nasza firma budowlana to zespół doświadczonych profesjonalistów,
            którzy z pasją i zaangażowaniem realizują projekty budowlane. Dzięki
            wieloletniemu doświadczeniu w branży, jesteśmy w stanie sprostać
            oczekiwaniom nawet najbardziej wymagających klientów. Nasza oferta
            obejmuje szeroki zakres usług budowlanych, w tym budowę domów,
            remonty, modernizacje oraz prace wykończeniowe.
          </p>
        </div>
        <div class="flex-1 mb-8 md:mb-0">
          <h2
            class="text-[var(--secondary-color)] font-bold mb-6 text-xl md:text-2xl tracking-wide"
          >
            PROFESJONALNA I RZETELNA PRACA
          </h2>
          <p class="text-lg leading-relaxed mb-5 text-gray-600">
            Gwarantujemy wysoką jakość naszych usług oraz terminowość realizacji
            projektów. Nasz zespół składa się z wykwalifikowanych specjalistów,
            którzy posiadają niezbędne umiejętności i wiedzę, aby sprostać
            wszelkim wyzwaniom budowlanym. Współpracujemy z najlepszymi
            dostawcami materiałów budowlanych, co pozwala nam zapewnić naszym
            klientom najwyższą jakość usług.
          </p>
        </div>
      </div>
    </div>
    <Services />
  </div>
</template>

<script setup lang="ts">
import Services from './Services.vue';
</script>
<style></style>
