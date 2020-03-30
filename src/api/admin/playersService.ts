import { httpClient } from '../../services/http-common'
import MessageService from '@/services/messageServices'

const PlayersService = {
  getPlayers: async function() {
    let players = null
    try {
      players = await httpClient.get('api/v1/teams/admin/player-master')
    } catch (error) {
      MessageService.dispatchError(
        error,
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
    return players.data
  },
  addPlayer: function() {},
  updatePlayer: function() {},
  deletePlayer: function() {},
}

export default PlayersService
