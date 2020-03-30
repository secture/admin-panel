import { GetterTree } from 'vuex'
import { RootState } from '@/models/rootState'
import { InfoTeams } from '@/models/teams'

export const GET_DATA = 'GET_DATA'
export const GET_CURRENT_TEAM = 'GET_CURRENT_TEAM'

export const getters: GetterTree<InfoTeams, RootState> = {
  [GET_DATA]: (state: any) => state.data,
  [GET_CURRENT_TEAM]: (state: any) => state.data.currentTeam,
}
