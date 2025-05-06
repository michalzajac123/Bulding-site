<template>
  <div
    id="contact-form"
    class="mx-auto w-[100%] md:w-[80%] p-6 md:p-10 lg:p-16 bg-white"
  >
    <div class="mb-10 text-center">
      <h1
        class="mb-4 md:text-5xl lg:text-6xl font-extrabold text-3xl tracking-wider text-[var(--secondary-color)] uppercase"
      >
        Skontaktuj się z nami
      </h1>
      <p class="text-gray-600 max-w-2xl mb-8 text-lg mx-auto">
        Jesteśmy tu, aby odpowiedzieć na Twoje pytania i pomóc w realizacji
        Twojego projektu budowlanego. Skontaktuj się z nami, a my postaramy się
        odpowiedzieć jak najszybciej.
      </p>
      <div
        class="h-1 w-32 bg-[var(--secondary-color)] opacity-70 rounded-full mb-8 mx-auto"
      ></div>
    </div>

    <!-- Formularz kontaktowy - pokazuje się tylko gdy formularz NIE jest wysłany -->
    <form
      v-if="!formSubmitted"
      @submit.prevent
      class="space-y-6 max-w-3xl mx-auto"
    >
      <div class="form-group">
        <label for="name" class="block text-lg font-medium text-gray-700 mb-2"
          >Imię</label
        >
        <input
          type="text"
          id="name"
          :class="errorName ? 'error' : ''"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź imię"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label
          for="surname"
          class="block text-lg font-medium text-gray-700 mb-2"
          >Nazwisko</label
        >
        <input
          type="text"
          id="surname"
          :class="errorSurname ? 'error' : ''"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź nazwisko"
          v-model="surname"
        />
      </div>
      <div class="form-group">
        <label for="email" class="block text-lg font-medium text-gray-700 mb-2"
          >Adres e-mail</label
        >
        <input
          type="email"
          id="email"
          :class="errorEmail ? 'error' : ''"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź adres e-mail"
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label
          for="message"
          class="block text-lg font-medium text-gray-700 mb-2"
          >Wiadomość</label
        >
        <textarea
          id="message"
          :class="errorMessage ? 'error' : ''"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none min-h-[150px]"
          placeholder="Opisz swoje pytanie lub projekt"
          v-model="message"
        ></textarea>
      </div>

      <div class="mt-6 flex justify-center">
        <button
          type="button"
          @click="validateForm"
          class="px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition duration-300 font-medium text-lg cursor-pointer"
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>

    <!-- Komunikat potwierdzający wysłanie - pokazuje się po pomyślnym wysłaniu -->
    <div 
      v-if="formSubmitted" 
      class="confirmation-message space-y-6 max-w-3xl mx-auto text-center"
    >
      <div class="success-icon mx-auto">
        <div class="rounded-full bg-green-100 p-6 w-24 h-24 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <h2 class="text-2xl font-bold text-gray-800 mt-6">Dziękujemy za wiadomość!</h2>
      <p class="text-lg text-gray-600 mb-8">
        Twoja wiadomość została pomyślnie wysłana. Skontaktujemy się z Tobą najszybciej jak to możliwe.
      </p>
      
      <div class="mt-8">
        <button 
          @click="resetForm" 
          class="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition duration-300 font-medium text-lg cursor-pointer"
        >
          Wyślij nową wiadomość
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createItem } from "@directus/sdk";
import { client } from "../../utils/directusClient";
import { onMounted } from "vue";

const name = ref(""),
  surname = ref(""),
  email = ref(""),
  message = ref("");

const errorName = ref(false),
  errorSurname = ref(false),
  errorEmail = ref(false),
  errorMessage = ref(false);

const formSubmitted = ref(false);

const validateForm = () => {
  // Reset błędów
  errorName.value = name.value === "";
  errorSurname.value = surname.value === "";

  // Sprawdzenie email z użyciem prostego regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorEmail.value = !emailRegex.test(email.value);

  errorMessage.value = message.value === "";

  // Sprawdzenie czy wszystkie pola są prawidłowe
  const isFormValid =
    !errorName.value &&
    !errorSurname.value &&
    !errorEmail.value &&
    !errorMessage.value;

  // Jeśli formularz jest poprawny, wysyłamy dane
  if (isFormValid) {
    sendContactForm();
  }
};
onMounted(() => {
  // Inicjalizacja pól formularza
  name.value = "";
  surname.value = "";
  email.value = "";
  message.value = "";
});
// Dodanie funkcji wysyłającej dane do API
const sendContactForm = async () => {
  try {
    const response = await client.request(
      createItem("Messages", {
        name: name.value,
        surname: surname.value,
        email: email.value,
        message: message.value,
      })
    );
    
    // Ustawienie flagi, że formularz został wysłany - to spowoduje pokazanie komunikatu
    formSubmitted.value = true;
    
    console.log("Message sent successfully:", response);

    // Czyszczenie formularza po wysłaniu
    name.value = "";
    surname.value = "";
    email.value = "";
    message.value = "";

  } catch (error) {
    console.error("Error sending message:", error);
    // Jeśli wystąpił błąd, nadal pokazujemy formularz
    formSubmitted.value = false;
  }
};

// Funkcja resetująca formularz, aby użytkownik mógł wysłać nową wiadomość
const resetForm = () => {
  formSubmitted.value = false;
  name.value = "";
  surname.value = "";
  email.value = "";
  message.value = "";
  errorName.value = false;
  errorSurname.value = false;
  errorEmail.value = false;
  errorMessage.value = false;
};
</script>

<style>
.error {
  border: 2px solid red;
}

.confirmation-message {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
