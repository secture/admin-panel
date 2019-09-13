import { MutationTree } from 'vuex'
import { InfoTeams, Team } from '@/models/team'
import * as types from '@/store/modules/teams/types'

export const mutations: MutationTree<InfoTeams> = {
  [types.SET_DATA](state: any, data: InfoTeams) {
    state.data = data
  },
  [types.SET_CURRENT_TEAM](state: any, team: Team) {
    state.currentTeam = team
  },
}
