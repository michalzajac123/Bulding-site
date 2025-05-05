<template>
  <div
    id="calculator-section"
    class="calculator-container mx-auto w-[100%] lg:w-[75%] md:w-[90%] p-6 md:p-10 lg:p-16 bg-white"
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

    <div class="input-container space-y-6 max-w-3xl">
      <div class="form-group">
        <label
          for="area"
          class="block text-lg font-medium text-gray-700 mb-2 text-left"
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

      <div class="form-group flex flex-col">
        <label
          for="withoutMaterial"
          class="text-lg font-medium text-gray-700 mb-2"
        >
          <input
            type="radio"
            id="withoutMaterial"
            name="radioGroup"
            value="withoutMaterial"
            v-model="selectedOption"
            class="ml-2"
          />
          Wykonanie stanu surowego otartego bez materiałów + sprzęty - 750 zł/m²
        </label>
        <label
          for="shellCondition"
          class="text-lg font-medium text-gray-700 mb-2"
        >
          <input
            type="radio"
            id="shellCondition"
            name="radioGroup"
            value="shellCondition"
            v-model="selectedOption"
            class="ml-2"
          />
          Stan surowy otwarty z materiałami - 2000 zł/m²
        </label>
        <label
          for="developerCondition"
          class="text-lg font-medium text-gray-700 mb-2"
        >
          <input
            type="radio"
            id="developerCondition"
            name="radioGroup"
            value="developerCondition"
            v-model="selectedOption"
            class="ml-2"
          />
          Stan deweloperski z materiałami - 4200 zł/m²
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
          class="results-container bg-white p-6 rounded-xl border border-gray-100 shadow-lg min-w-[380px] transition-all duration-300 transform hover:shadow-xl"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const selectedOption = ref("withoutMaterial"); // Domyślna opcja
const area = ref(null);
const error = ref(false);
const result = ref("");

const calculateCost = () => {
  if (area.value && parseInt(area.value) > 0) {
    error.value = false;
    let costPerSquareMeter = 0;
    switch (selectedOption.value) {
      case "withoutMaterial":
        costPerSquareMeter = 750;
        break;
      case "shellCondition":
        costPerSquareMeter = 2000;
        break;
      case "developerCondition":
        costPerSquareMeter = 4200;
        break;
    }
    result.value = (parseInt(area.value) * costPerSquareMeter).toString();
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
