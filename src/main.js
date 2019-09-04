import Vue from 'vue'
import './plugins/vuetify/main'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import { i18n } from '@/plugins/i18n/main'

import Dashboard from '@/layouts/Dashboard'
import Default from '@/layouts/Default'

import Amplify, * as AmplifyModules from 'aws-amplify'
import CognitoConfig from '@/api/cognito/config'

Amplify.configure(CognitoConfig)
Vue.use(AmplifyModules)

Vue.config.productionTip = false

Vue.component('dashboard-layout', Dashboard)
Vue.component('default-layout', Default)

new Vue({
  router,
  store,
  axios,
  i18n,
  render: h => h(App),
}).$mount('#app')
