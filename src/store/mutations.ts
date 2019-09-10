import * as layouts from './types'

export default {
  [layouts.SET_LAYOUT](state: any, newLayout: any) {
    state.layout = newLayout
  },
}
