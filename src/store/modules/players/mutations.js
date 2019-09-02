import * as players from '@/store/modules/players/types'

export default {
  [players.SET_PLAYERS](state, players) {
    state.players = players
  },
  [players.SET_CURRENT_PLAYER](state, player) {
    state.currentPlayer = player
  },
}
