import { MutationTree } from 'vuex'
import { InfoPlayers } from '@/models/players'
import * as types from '@/store/modules/players/types'

export const mutations: MutationTree<InfoPlayers> = {
  [types.SET_DATA](state, data) {
    state.data = data
  },
}
