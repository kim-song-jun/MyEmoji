import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import store from './stores/store.js'

const app = createApp(App)

app.use(router).use(store)

app.mount('#app')
