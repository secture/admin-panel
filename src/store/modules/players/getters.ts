export const GET_PLAYERS = 'GET_PLAYERS'
export const GET_CURRENT_PLAYER = 'GET_CURRENT_PLAYER'

export default {
  [GET_PLAYERS]: (state: any) => state.players,
  [GET_CURRENT_PLAYER]: (state: any) => state.currentPlayer,
}
