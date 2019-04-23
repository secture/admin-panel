import * as layouts from './types'

export default {
  [layouts.SET_LAYOUT]({ commit }, newLayout) {
    commit(layouts.SET_LAYOUT, newLayout)
  },
}
