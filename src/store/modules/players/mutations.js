import * as players from '@/store/modules/players/types'

export default {
  [players.SET_DATA](state, data) {
    state.data = data
  }
}
