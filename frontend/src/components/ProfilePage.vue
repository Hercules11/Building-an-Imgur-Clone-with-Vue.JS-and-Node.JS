<template>
  <div class="container">
    <div class="profile-container">
        <h4>My Profile: {{ user.username }}</h4>

        <hr/>

        <button v-on:click="logout()" class="btn btn-danger">Logout</button>
    </div>
  </div>
  </template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const user = ref({ username: '' })
const accessToken = ref('');
const error = ref(null);

onMounted(() => {
  this.user = this.$cognitoAuth.getCurrentUser();
    this.$cognitoAuth.getIdToken((err, result) => {
      if (err) {
        this. error = err
      } else {
        this.accessToken = result
      }
    })
})

const logout = () => {
  this.$cognitoAuth.logout()
  this.$router.push({path: '/'})
}
</script>

<style scoped>
.profile-container{
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  margin-top: 60px;
  border: 1px solid #E4E6E7;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
}
.profile-container h4 {
  font-size: 22px;
  margin: 0;
  padding: 0;
}
</style>
