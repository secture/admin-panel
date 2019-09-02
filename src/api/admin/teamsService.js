import { httpClient } from '../../services/http-common'
import MessageService from '@/services/messageServices'

const TeamsService = {
  getTeams: async function() {
    let teams = null
    try {
      teams = await httpClient.get('api/v1/teams/admin/team-master')
    } catch (error) {
      console.log(error)
      MessageService.dispatchError(
        'GetTeamsMaster',
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
    return teams.data
  },
  addTeam: function() {},
  updateTeam: function(dspId, store) {},
  deleteTeam: function() {},
}

export default TeamsService
