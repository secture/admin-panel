import * as core from '@/store/modules/core/types'

export default {
  [core.CLEAR_TOASTER](state: any, showToaster: any) {
    state.showToaster = showToaster
    state.message = {
      code: '',
      body: '',
      type: '',
    }
  },
  [core.SHOW_TOASTER_MESSAGE](state: any, { showToaster, message }: any) {
    state.showToaster = showToaster
    state.message = {
      code: message.code,
      body: message.body,
      type: message.type,
    }
  },
}
