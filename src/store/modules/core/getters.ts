import { GetterTree } from 'vuex'
import { RootState } from '@/models/rootState'
import { Core } from '@/models/core'

export const GET_TOASTER = 'GET_TOASTER'
export const GET_MESSAGE = 'GET_CODE_MESSAGE'

export const getters: GetterTree<Core, RootState> = {
  [GET_TOASTER]: (state: any) => state.showToaster,
  [GET_MESSAGE]: (state: any) => state.message,
}
