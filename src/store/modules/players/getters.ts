import { GetterTree } from 'vuex'
import { RootState } from '@/models/rootState'
import { InfoPlayers } from '@/models/players'

export const GET_DATA = 'GET_DATA'

export const getters: GetterTree<InfoPlayers, RootState> = {
  [GET_DATA]: state => state.data,
}
