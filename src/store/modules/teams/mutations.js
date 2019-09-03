import * as teams from '@/store/modules/teams/types'

export default {
  [teams.SET_DATA](state, data) {
    state.data = data
  },
  [teams.SET_CURRENT_TEAM](state, team) {
    state.currentTeam = team
  },
}
