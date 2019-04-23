import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.config.productionTip = false

Vue.component('login-layout', Login)
Vue.component('home-layout', Home)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
