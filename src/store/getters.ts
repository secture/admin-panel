import { GetterTree } from 'vuex'
import { RootState } from '@/models/rootState'
export const GET_LAYOUT = 'GET_LAYOUT'

export const getters: GetterTree<RootState, RootState> = {
  [GET_LAYOUT]: (state: any) => state.layout,
}
