import * as teams from '@/store/modules/teams/types'
import TeamsService from '@/api/admin/teamsService'

export default {
  [teams.GET_TEAMS]({ commit }) {
    const teams = TeamsService.getTeams()
    if (teams !== null && typeof teams !== 'undefined') {
      commit(teams.SET_TEAMS, teams)
    }
    return teams
  },
  [teams.SET_TEAMS]({ commit }, teams) {
    commit(teams.SET_TEAMS, teams)
  },
  [teams.SET_CURRENT_TEAM]({ commit }, team) {
    if (team !== null || typeof team !== 'undefined') {
      commit(teams.SET_CURRENT_TEAM, team)
    }
  },
}
