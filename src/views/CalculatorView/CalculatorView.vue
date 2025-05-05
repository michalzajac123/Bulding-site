<template>
  <div
    id="calculator-section"
    class="calculator-container mx-auto w-[100%] p-6 md:p-10 lg:p-16 bg-white shadow-2xl rounded-xl border border-gray-100"
  >
    <div class="calculator-header mb-10">
      <h1
        class="calculator-title mb-4 md:text-5xl lg:text-6xl font-extrabold text-3xl tracking-wider text-[var(--secondary-color)] uppercase"
      >
        Kalkulator kosztów budowy
      </h1>
      <p class="calculator-subtitle text-gray-600 max-w-2xl mb-8 text-lg">
        Wprowadź dane dotyczące projektu, aby uzyskać wstępną wycenę.
      </p>
      <div
        class="h-1 w-32 bg-[var(--secondary-color)] opacity-70 rounded-full mb-8"
      ></div>
    </div>

    <div class="input-container space-y-6">
      <div class="priceForMetr">
        Cena za metr: <span class="font-bold">{{ priceForMetr }} zł </span>
      </div>
      <div class="form-group">
        <label for="area" class="block text-lg font-medium text-gray-700 mb-2"
          >Powierzchnia (m²)</label
        >
        <input
          type="number"
          id="area"
          :class="error ? 'error' : ''"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź powierzchnię"
          v-model="area"
        />
      </div>

      <div class="form-group flex items-center">
        <label for="withMaterial" class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="withMaterial"
            class="form-checkbox h-5 w-5 text-[var(--secondary-color)] rounded border-gray-300 focus:ring-[var(--secondary-color)] transition duration-200"
            v-model="withMaterial"
          />
          <span class="ml-3 text-lg text-gray-700">Z własnym materiałem</span>
        </label>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        <button
          class="px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition duration-300 font-medium text-lg cursor-pointer"
          @click="calculateCost"
        >
          Oblicz koszt
        </button>
        <div></div>
        <div
          v-if="result"
          class="results-container bg-white p-6 rounded-xl border border-gray-100 shadow-lg min-w-[400px] transition-all duration-300 transform hover:shadow-xl"
        >
          <h3
            class="text-lg font-bold mb-2 tracking-wider text-[var(--secondary-color)] uppercase"
          >
            Twoja wycena:
          </h3>
          <p class="text-2xl font-extrabold flex items-baseline">
            <span class="text-gray-800">{{ result }}</span>
            <span class="ml-1 font-bold">zł</span>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const withMaterial = ref(false);
const area = ref(null);
const priceForMetr = ref(1000);
const error = ref(false);
const result = ref("");

const calculateCost = () => {
  if (area.value) {
    console.log(area.value);
    const areaValue = parseFloat(area.value);
    const cost = withMaterial.value
      ? areaValue * priceForMetr.value * 0.8
      : areaValue * priceForMetr.value;
    result.value = cost.toFixed(2);
    error.value = false;
  } else {
    error.value = true;
    result.value = "";
  }
};
</script>
<style>
.error {
  border: 3px solid red;
}
</style>
