import { Module } from 'vuex'
import { RootState } from '@/models/rootState'
import { InfoPlayers } from '@/models/players'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import state from './state'

export const players: Module<InfoPlayers, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
