<template>
  <v-snackbar
    v-model="snackBar"
    :color="message.type"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
  >
    {{$t(message.code)}}
    <v-btn dark flat @click="snackBar = false">{{$t('actions.close')}}</v-btn>
  </v-snackbar>
</template>
<script>
import store from '@/store'
import { mapActions as mapActionsCore, mapGetters } from '@/store/modules/core'
import * as coreGetters from '@/store/modules/core/getters'
import * as coreTypes from '@/store/modules/core/types'

export default {
  data: () => ({
    timeout: 3000,
    mode: '',
  }),
  methods: {
    ...mapActionsCore({
      clearSnackBarAction: coreTypes.CLEAR_TOASTER,
    }),
  },
  computed: {
    ...mapGetters({
      message: coreGetters.GET_MESSAGE,
    }),
    snackBar: {
      get() {
        return store.state.core.showToaster
      },
      set(snackBar) {
        this.clearSnackBarAction(snackBar)
      },
    },
  },
}
</script>

<style>
</style>
