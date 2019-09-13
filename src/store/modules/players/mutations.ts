import * as types from '@/store/modules/players/types'

export default {
  [types.SET_PLAYERS](state: any, players: any) {
    state.players = players
  },
  [types.SET_CURRENT_PLAYER](state: any, player: any) {
    state.currentPlayer = player
  },
}
