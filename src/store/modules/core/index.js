import { createNamespacedHelpers } from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import { NAMESPACE } from './types'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE)

export { mapState, mapGetters, mapActions }
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
