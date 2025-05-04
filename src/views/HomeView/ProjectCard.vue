<template>
  <div
    class="relative rounded-2xl shadow-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 group"
  >
    <div class="relative overflow-hidden h-64">
      <img
        :src="image"
        :alt="imageAlt || 'Realizacja budowlana'"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
      <div class="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h3 class="text-2xl font-semibold tracking-tight">Realizacja</h3>
      </div>
    </div>
    <div class="p-6 mb-12">
      <p class="text-gray-600 leading-relaxed">
        <span class="block text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">{{ title }}</span>
        {{ description }}
      </p>
      <div class="mt-6 flex justify-between items-center absolute bottom-4 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-0.5">
        <span class="text-sm font-medium text-gray-500">
          <span class="block text-gray-400">Powierzchnia</span>
          <span class="text-gray-800 font-semibold">{{ area }} m²</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  description: string
  area: string
  imageAlt?: string
}>()
</script>