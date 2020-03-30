import { ActionTree } from 'vuex'
import { RootState } from '@/models/rootState'
import { Core } from '@/models/core'
import * as types from '@/store/modules/core/types'

export const actions: ActionTree<Core, RootState> = {
  [types.CLEAR_TOASTER]({ commit }: any, showToaster: boolean): void {
    commit(types.CLEAR_TOASTER, showToaster)
  },
  [types.SHOW_TOASTER_MESSAGE](
    { commit }: any,
    { showToaster, message }: any
  ): void {
    if (message !== null || typeof message !== 'undefined') {
      commit(types.SHOW_TOASTER_MESSAGE, { showToaster, message })
    }
  },
}
