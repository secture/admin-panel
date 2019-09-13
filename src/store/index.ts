import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/models/rootState'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import state from './state'

//modules
import { auth } from './modules/auth'
import { core } from './modules/core'
import { teams } from './modules/teams'
import { players } from './modules/players'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state,
  getters,
  actions,
  mutations,
  modules: {
    auth,
    core,
    teams,
    players,
  },
}

export default new Vuex.Store<RootState>(store)
