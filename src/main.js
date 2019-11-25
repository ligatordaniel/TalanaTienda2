import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue' //agregamos boostrap

Vue.config.productionTip = false
Vue.use(BootstrapVue) //agregamos boostrap

import 'bootstrap/dist/css/bootstrap.css'     //agregamos boostrap
import 'bootstrap-vue/dist/bootstrap-vue.css' //agregamos boostrap

import axios from 'axios'//agregamos axios
import VueAxios from 'vue-axios'//agregamos axios
 
Vue.use(VueAxios, axios)//agregamos axios

// Agregamos la URL base de nuestra API con https://cors-anywhere.herokuapp.com/ adelante para que funke
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://sva.talana.com:8000/api'; 
 //agregamos axios con nuestr ulr de la api


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
