import * as layouts from './types'

export default {
  [layouts.SET_LAYOUT](state, newLayout) {
    state.layout = newLayout
  },
}
