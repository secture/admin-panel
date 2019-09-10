import * as layouts from './types'

export default {
  [layouts.SET_LAYOUT]({ commit }: any, newLayout: any) {
    commit(layouts.SET_LAYOUT, newLayout)
  },
}
