import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import cognitoAuth from '@/cognito'
import config from '@/config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(cognitoAuth, config)

app.mount('#app')
