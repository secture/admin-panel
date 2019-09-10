import * as players from '@/store/modules/players/types'

export default {
  [players.SET_PLAYERS](state: any, players: any) {
    state.players = players
  },
  [players.SET_CURRENT_PLAYER](state: any, player: any) {
    state.currentPlayer = player
  },
}
