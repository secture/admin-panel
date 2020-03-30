import { MutationTree } from 'vuex'
import * as types from './types'
import { RootState } from '@/models/rootState'

export const mutations: MutationTree<RootState> = {
  [types.SET_LAYOUT](state: any, newLayout: any) {
    state.layout = newLayout
  },
}
