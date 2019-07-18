<template>
  <v-snackbar
    v-model="snackBar"
    :color="type"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
  >
    {{ text }}
    <v-btn dark flat @click="snackBar = false">{{$t('actions.close')}}</v-btn>
  </v-snackbar>
</template>

<script>
import store from '@/store'
import { mapActions as mapActionsCore } from '@/store/modules/core'
import * as core from '@/store/modules/core/types'

export default {
  props: {
    type: String,
    text: String,
  },
  data: () => ({
    timeout: 3000,
    mode: '',
  }),
  methods: {
    ...mapActionsCore({
      snackBarAction: core.SHOW_TOASTER,
    }),
  },
  computed: {
    snackBar: {
      get() {
        return store.state.core.showToaster
      },
      set(snackBar) {
        this.snackBarAction(snackBar)
      },
    },
  },
}
</script>

<style>
</style>
