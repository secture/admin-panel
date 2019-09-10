import { httpClient } from '../../services/http-common'
import MessageService from '@/services/messageServices'

const TeamsService = {
  getTeams: async function() {
    let teams: any = null
    try {
      teams = await httpClient.get('api/v1/teams/admin/team-master')
    } catch (error) {
      MessageService.dispatchError(
        error,
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
    return teams.data
  },
  updateTeam: async function(team: any) {
    let teamUpdated = null
    try {
      teamUpdated = await httpClient.put(
        `api/v1/teams/admin/team-master/${team.id}`,
        {
          dspId: team.dspId,
          store: team.store,
        }
      )
    } catch (error) {
      MessageService.dispatchError(
        'UpdateTeamMaster',
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
    return teamUpdated
  },
  addTeam: function() {},
  deleteTeam: function() {},
}

export default TeamsService
