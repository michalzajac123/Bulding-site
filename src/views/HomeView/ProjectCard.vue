<template>
  <div
    class="relative rounded-2xl shadow-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100 group"
  >
    <div class="relative overflow-hidden h-64">
      <img
        :src="props.image"
        :alt="props.imageAlt || 'Ekskluzywna realizacja budowlana'"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-80"
      ></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white"
      >
        <h3 class="text-2xl font-semibold tracking-tight">{{ props.title }}</h3>
      </div>
    </div>
    <div class="p-6 mb-12">
      <p class="text-gray-600 leading-relaxed">
        {{ props.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span 
          v-for="(feature, index) in props.features" 
          :key="index"
          class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium"
        >
          {{ feature }}
        </span>
      </div>
      <div
        class="mt-6 flex justify-between items-center absolute bottom-4 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <span class="text-sm font-medium text-gray-500">
          <span class="block text-gray-400">Powierzchnia</span>
          <span class="text-blue-800 font-semibold">{{ props.area }} m²</span>
        </span>
        <button
          @click="openModal"
          class="px-3 py-3 sm:px-4 sm:py-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg transition-all duration-300 cursor-pointer hover:from-blue-700 hover:to-blue-900 text-xs sm:text-md font-medium shadow-md hover:shadow-lg active:scale-95 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span class="whitespace-nowrap">Zobacz więcej</span>
        </button>
      </div>
    </div>
    <!-- Add teleport to move modal to body to avoid z-index issues -->
    <Teleport to="body">
      <ProjectModal
        v-if="isModalOpen"
        :title="props.title"
        :description="props.detailedDescription || props.description"
        :area="props.area"
        :mainImage="props.image"
        :galleryImages="props.galleryImages"
        :year="props.year"
        :location="props.location"
        :materials="props.materials"
        :features="props.features"
        @close="closeModal"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';

const props = defineProps<{
  image: string;
  title: string;
  description: string;
  detailedDescription?: string;
  area: string;
  features: string[];
  imageAlt?: string;
  year?: string;
  location?: string;
  materials?: string;
  galleryImages?: string[];
}>();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>