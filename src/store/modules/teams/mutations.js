import * as teams from '@/store/modules/teams/types'

export default {
  [teams.SET_TEAMS](state, data) {
    state.page = data.page
    state.pageSize = data.pageSize
    state.results = data.results
    state.totalResults = data.totalResults
  },
  [teams.SET_CURRENT_TEAM](state, team) {
    state.currentTeam = team
  },
}
