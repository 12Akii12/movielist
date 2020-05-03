import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=2bcc47db&page=1&type=movie&Content-Type=application/json'
new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
