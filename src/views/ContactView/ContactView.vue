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

    <form class="space-y-6 max-w-3xl mx-auto">
      <div class="form-group">
        <label for="name" class="block text-lg font-medium text-gray-700 mb-2"
          >Imię i nazwisko</label
        >
        <input
          type="text"
          id="name"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź imię i nazwisko"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="block text-lg font-medium text-gray-700 mb-2"
          >Adres e-mail</label
        >
        <input
          type="email"
          id="email"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none"
          placeholder="Wprowadź adres e-mail"
          required
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
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] focus:ring focus:ring-[var(--secondary-color)] focus:ring-opacity-30 transition duration-200 outline-none min-h-[150px]"
          placeholder="Opisz swoje pytanie lub projekt"
          required
        ></textarea>
      </div>

      <div class="mt-6 flex justify-center">
        <button
          type="submit"
          class="px-8 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition duration-300 font-medium text-lg cursor-pointer"
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts"></script>
