import * as teams from '@/store/modules/teams/types'

export default {
  [teams.SET_TEAMS](state, teams) {
    state.teams = teams
  },
  [teams.SET_CURRENT_TEAM](state, team) {
    state.currentTeam = team
  },
}
