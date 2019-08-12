import * as teams from '@/store/modules/teams/types'

export default {
  [teams.SET_TEAMS](state, teams) {
    state.page = teams.page
    state.pageSize = teams.pageSize
    state.results = teams.results
    state.totalResults = teams.totalResults
  },
  [teams.SET_CURRENT_TEAM](state, team) {
    state.currentTeam = team
  },
}
