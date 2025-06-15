<template>
  <div>
    <h2>Home Page</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <ImageCard />
        </div>
        <div class="col-lg-3">
          <ImageCard />
        </div>
        <div class="col-lg-3">
          <ImageCard />
        </div>
        <div class="col-lg-3">
          <ImageCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageCard from './ImageCard.vue'

</script>

<style>
body {
  background-color: #f4f4f4;
}
</style>
