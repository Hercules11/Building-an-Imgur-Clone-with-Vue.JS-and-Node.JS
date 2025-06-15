<template>
  <div id="app">
    <Navbar />
    <router-view v-slot="{ HomePage }" />
  </div>
</template>

<script setup lang="ts">
import HomePage from './components/HomePage.vue'
import Navbar from './components/Navbar.vue'
import router from './router/index'
</script>

<style scoped></style>
