<template>
  <HeaderView msg="sdadad" />
  <router-view />
  <FooterView />
</template>
<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
</script>
