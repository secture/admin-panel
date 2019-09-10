import * as players from '@/store/modules/players/types'

export default {
  [players.SET_PLAYERS]({ commit } : any, players: any) {
    commit(players.SET_PLAYERS, players)
  },
  [players.SET_CURRENT_PLAYER]({ commit }: any, player: any) {
    if (player !== null || typeof player !== 'undefined') {
      commit(players.SET_CURRENT_PLAYER, player)
    }
  },
}
