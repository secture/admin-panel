import * as core from '@/store/modules/core/types'

export default {
  [core.SHOW_TOASTER](state, showToaster) {
    state.showToaster = showToaster
  },
}
