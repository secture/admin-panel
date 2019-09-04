import * as teams from '@/store/modules/teams/types'
import TeamsService from '@/api/admin/teamsService'
import MessageService from '@/services/messageServices'

export default {
  async [teams.GET_TEAMS]({ commit }) {
    const data = await TeamsService.getTeams()
    if (data !== null && typeof data !== 'undefined') {
      commit(teams.SET_DATA, data)
    }
    return data
  },
  async [teams.UPDATE_TEAM]({ commit }, team) {
    const teamUpdated = await TeamsService.updateTeam(team)
    if (teamUpdated !== null && typeof teamUpdated !== 'undefined') {
      commit(teams.SET_CURRENT_TEAM, teamUpdated)
      MessageService.dispatchSuccess(
        'teamUpdated',
        'core/SHOW_TOASTER_MESSAGE',
        'teams.'
      )
      return teamUpdated
    } else {
      return null
    }
  },
  [teams.SET_CURRENT_TEAM]({ commit }, team) {
    if (team !== null || typeof team !== 'undefined') {
      commit(teams.SET_CURRENT_TEAM, team)
    }
  },
}
