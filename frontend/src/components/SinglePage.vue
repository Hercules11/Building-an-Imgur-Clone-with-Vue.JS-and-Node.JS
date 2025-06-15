<template>
  <div>
    <h2>Single Image: {{ route.params.id }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params.id);
</script>

<style scoped>

</style>
