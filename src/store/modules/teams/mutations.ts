import * as teams from '@/store/modules/teams/types'

export default {
  [teams.SET_DATA](state: any, data: any) {
    state.data = data
  },
  [teams.SET_CURRENT_TEAM](state: any, team: any) {
    state.currentTeam = team
  },
}
