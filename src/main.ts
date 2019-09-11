import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import { Auth } from 'aws-amplify'
import CognitoConfig from '@/api/cognito/config'
Auth.configure(CognitoConfig)

import './registerServiceWorker'
import { i18n } from '@/plugins/i18n/main'

import Dashboard from '@/layouts/Dashboard.vue'
import Default from '@/layouts/Default.vue'

Vue.config.productionTip = false

Vue.component('dashboard-layout', Dashboard)
Vue.component('default-layout', Default)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
