import * as players from '@/store/modules/players/types'
import PlayersService from '@/api/admin/playersService'

export default {
  async [players.GET_PLAYERS]({ commit }) {
    const data = await PlayersService.getPlayers()
    if (data !== null && typeof data !== 'undefined') {
      commit(players.SET_DATA, data)
    }
    return data
  },
}
