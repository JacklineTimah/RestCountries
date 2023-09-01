<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import TheCardsComponent from './components/TheCardsComponent.vue';
import HomeViewVue from './views/HomeView.vue';
import DetailView from './views/DetailView.vue';

</script>

<template>
  <HeaderComponent />
  <TheCardsComponent />
  <HomeViewVue />
  <DetailView />
  <RouterView />
</template>

<style scoped>

</style>
