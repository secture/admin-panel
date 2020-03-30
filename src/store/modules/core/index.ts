import { Module } from 'vuex'
import { RootState } from '@/models/rootState'
import { Core } from '@/models/core'

import state from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

export const core: Module<Core, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
