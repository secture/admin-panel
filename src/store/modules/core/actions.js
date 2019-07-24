import * as core from '@/store/modules/core/types'

export default {
  [core.CLEAR_TOASTER]({ commit }, showToaster) {
    commit(core.CLEAR_TOASTER, showToaster)
  },
  [core.SHOW_TOASTER_MESSAGE]({ commit }, { showToaster, message }) {
    if (message !== null || typeof message !== 'undefined') {
      commit(core.SHOW_TOASTER_MESSAGE, { showToaster, message })
    }
  },
}
