import { Module } from 'vuex'
import { RootState } from '@/models/rootState'
import { Auth } from '@/models/auth'

import state from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const auth: Module<Auth, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
