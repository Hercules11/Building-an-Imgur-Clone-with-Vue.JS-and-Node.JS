<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Imgur Clone</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li v-if="isLoggedIn()" class="nav-item">
          <router-link class="nav-link" to="profile">Profile</router-link>
        </li>
        <li v-if="isLoggedIn()" class="nav-item">
          <router-link class="nav-link" to="upload">Upload</router-link>
        </li>
        <li v-if="!isLoggedIn()" class="nav-item">
          <router-link class="nav-link" to="login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn()" class="nav-item">
          <router-link class="nav-link" to="register">Register</router-link>
        </li>
      </ul>
      <span class="navbar-text">@Elliot_F</span>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const isLoggedIn = function () {
  if (this.$cognitoAuth.getCurrentUser() === null) {
    return false
  } else {
    return true
  }
}
</script>

<style></style>
