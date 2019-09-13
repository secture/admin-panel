import * as types from '@/store/modules/players/types'

export default {
  [types.SET_PLAYERS]({ commit }: any, players: any) {
    commit(players.SET_PLAYERS, players)
  },
  [types.SET_CURRENT_PLAYER]({ commit }: any, player: any) {
    if (player !== null || typeof player !== 'undefined') {
      commit(types.SET_CURRENT_PLAYER, player)
    }
    return player
  },
}
