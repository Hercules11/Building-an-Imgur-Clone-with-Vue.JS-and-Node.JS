<template>
  <div class="login-box center-align">
      <h4>Confirm Signup</h4>
      <div class="card-panel red darken-2" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
      <p>Enter the verification code you should have recieved via email</p>
      <form class="form">
          <div class="input-field">
              <label for="username">Username</label>
              <input id="username" type="text" class="validate" v-model="username" required>
          </div>
          <div class="input-field">
              <label for="confirmcode">Confirmation Code</label>
              <input id="confirmcode" type="text" class="validate" v-model="confirmcode" required>
          </div>
          <div class="center-align">
              <button v-on:click="confirm()" class="btn btn-default btn-large">Verify Now</button>
          </div>
      </form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const username = ref('')
const confirmcode = ref('')
const error = ref(null)

const confirm = () => {
  /*eslint: no-unused-vars: "off"*/
  this.$cognitoAuth.confirmRegistration(this.username, this.confirmcode, (err, result) => {
    if (err) {
      this.error = err
    } else {
      this.$router.push('/profile')
    }
  })
}
</script>
<style scoped>
h4 {
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 18px;
}
p {
  text-align: center;
  font-size: 14px;
  padding-bottom: 10px;
}
.login-box {
  width: 400px;
  height: auto;
  background-color: white;
  margin-top: 60px;
  border-radius: 5px;
  padding: 40px;
  margin: auto;
  border: 1px solid #e4e6e7;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}
button {
  margin: auto;
  background-color: #fa3254;
  margin: 0;
  padding: 0px 40px;
}
button i {
  font-size: 18px;
}
</style>
