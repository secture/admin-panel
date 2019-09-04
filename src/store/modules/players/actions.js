import * as players from '@/store/modules/players/types'
import PlayersService from '@/api/admin/playersService'

export default {
  [players.GET_PLAYERS]({ commit }, players) {
    const data = await PlayersService.getPlayers()
    if (data !== null && typeof data !== 'undefined') {
      commit(players.GET_PLAYERS, players)
    }
    return data
  },
  [players.SET_CURRENT_PLAYER]({ commit }, player) {
    if (player !== null || typeof player !== 'undefined') {
      commit(players.SET_CURRENT_PLAYER, player)
    }
  },
}
