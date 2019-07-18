import * as core from '@/store/modules/core/types'

export default {
  [core.SHOW_TOASTER]({ commit }, showToaster) {
    debugger
    commit(core.SHOW_TOASTER, showToaster)
  },
}
