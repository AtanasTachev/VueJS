import { createApp } from 'vue'
import { createPinia } from 'pinia'
import devtools from '@vue/devtools'
import BootstrapVue3 from "bootstrap-vue-3"

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(devtools)
app.use(BootstrapVue3)

app.mount('#app')
