import { Module } from 'vuex'
import { RootState } from '@/models/rootState'
import { InfoTeams } from '@/models/teams'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import state from './state'

export const teams: Module<InfoTeams, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
