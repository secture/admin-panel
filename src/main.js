import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Dashboard from '@/layouts/Dashboard'
import Default from '@/layouts/Default'

Vue.config.productionTip = false

Vue.component('dashboard-layout', Dashboard)
Vue.component('default-layout', Default)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
