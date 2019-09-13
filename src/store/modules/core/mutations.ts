import { MutationTree } from 'vuex'
import { Core } from '@/models/core'
import * as types from '@/store/modules/core/types'

export const mutations: MutationTree<Core> = {
  [types.CLEAR_TOASTER](state: any, showToaster: any) {
    state.showToaster = showToaster
    state.message = {
      code: '',
      body: '',
      type: '',
    }
  },
  [types.SHOW_TOASTER_MESSAGE](state: any, { showToaster, message }: any) {
    state.showToaster = showToaster
    state.message = {
      code: message.code,
      body: message.body,
      type: message.type,
    }
  },
}
