import * as teams from '@/store/modules/teams/types'
import TeamsService from '@/api/admin/teamsService'

export default {
  async [teams.GET_TEAMS]({ commit }) {
    const data = await TeamsService.getTeams()
    if (data !== null && typeof data !== 'undefined') {
      commit(teams.SET_DATA, data)
    }
    return data
  },
  [teams.SET_CURRENT_TEAM]({ commit }, team) {
    if (team !== null || typeof team !== 'undefined') {
      commit(teams.SET_CURRENT_TEAM, team)
    }
  },
}
