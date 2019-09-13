import { ActionTree } from 'vuex'
import { InfoTeams, Team } from '@/models/teams'
import { RootState } from '@/models/rootState'

import * as types from '@/store/modules/teams/types'
import TeamsService from '@/api/admin/teamsService'
import MessageService from '@/services/messageServices'

export const actions: ActionTree<InfoTeams, RootState> = {
  async [types.GET_TEAMS]({ commit }: any): Promise<InfoTeams> {
    const data: InfoTeams = await TeamsService.getTeams()
    if (data !== null && typeof data !== 'undefined') {
      commit(types.SET_DATA, data)
    }
    return data
  },
  async [types.UPDATE_TEAM]({ commit }: any, team: Team): Promise<Team> {
    const teamUpdated: Team = await TeamsService.updateTeam(team)
    if (teamUpdated !== null && typeof teamUpdated !== 'undefined') {
      commit(types.SET_CURRENT_TEAM, teamUpdated)
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
  [types.SET_CURRENT_TEAM]({ commit }: any, team: Team): void {
    if (team !== null || typeof team !== 'undefined') {
      commit(types.SET_CURRENT_TEAM, team)
    }
  },
}
