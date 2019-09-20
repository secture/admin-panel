import { ActionTree } from 'vuex'
import { InfoPlayers } from '@/models/players'
import { RootState } from '@/models/rootState'

import * as types from '@/store/modules/players/types'
import PlayersService from '@/api/admin/playersService'

export const actions: ActionTree<InfoPlayers, RootState> = {
  async [types.GET_PLAYERS]({ commit }): Promise<InfoPlayers> {
    const data = await PlayersService.getPlayers()
    if (data !== null && typeof data !== 'undefined') {
      commit(types.SET_DATA, data)
    }
    return data
  },
}
