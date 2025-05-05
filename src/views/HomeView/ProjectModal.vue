<template>
  <div
    class="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-100"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900">{{ props.title }}</h3>
          <button
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Slider -->
        <div class="relative mb-6">
          <div class="overflow-hidden rounded-lg">
            <div
              class="flex transition-transform duration-300"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(image, index) in displayImages"
                :key="index"
                class="w-full flex-shrink-0"
              >
                <img
                  :src="image"
                  :alt="`Zdjęcie ${index + 1} realizacji ${props.title}`"
                  class="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <button
            @click="prevSlide"
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(_, index) in displayImages"
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
              :class="{
                'bg-blue-600': currentSlide === index,
                'bg-gray-300': currentSlide !== index,
              }"
            ></button>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold mb-2">Opis projektu</h4>
            <p class="text-gray-600">
              {{ props.description }}
            </p>
            <div class="mt-6">
              <h4 class="text-lg font-semibold mb-2">Cechy</h4>
              <div class="flex flex-wrap gap-2 mt-2">
                <span 
                  v-for="(feature, index) in props.features" 
                  :key="index"
                  class="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-md font-medium"
                >
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-2">Szczegóły</h4>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Powierzchnia: <strong>{{ props.area }} m²</strong></span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Rok realizacji: <strong>{{ props.year }}</strong></span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Lokalizacja: <strong>{{ props.location }}</strong></span>
              </li>
              <li class="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Materiały: <strong>{{ props.materials }}</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps<{
  title: string;
  description: string;
  area: string;
  mainImage: string;
  galleryImages?: string[];
  year?: string;
  location?: string;
  materials?: string;
  features?: string[];
}>();

const emit = defineEmits(['close']);

const currentSlide = ref(0);

// Use provided gallery images or fallback to a gallery with the main image
const displayImages = computed(() => {
  if (props.galleryImages && props.galleryImages.length > 0) {
    return props.galleryImages;
  }
  
  // Fallback gallery images if none are provided
  return [
    props.mainImage,
  ];
});

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % displayImages.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + displayImages.value.length) % displayImages.value.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// Add scroll lock when the modal is mounted
onMounted(() => {
  // Store original body overflow style
  const originalStyle = window.getComputedStyle(document.body).overflow;
  
  // Prevent scrolling on the body
  document.body.style.overflow = 'hidden';
  
  // Restore original body overflow style when component is unmounted
  onBeforeUnmount(() => {
    document.body.style.overflow = originalStyle;
  });
});
</script>