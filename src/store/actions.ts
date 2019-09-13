import { ActionTree } from 'vuex'
import { RootState } from '@/models/rootState'
import * as layouts from './types'

export const actions: ActionTree<RootState, RootState> = {
  [layouts.SET_LAYOUT]({ commit }: any, newLayout: any): void {
    commit(layouts.SET_LAYOUT, newLayout)
  },
}
