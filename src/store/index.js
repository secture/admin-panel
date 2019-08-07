import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

//modules
import authModule from './modules/auth'
import coreModule from './modules/core'
import teamsModule from './modules/teams'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    auth: authModule,
    core: coreModule,
    teams: teamsModule,
  },
})
