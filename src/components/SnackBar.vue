<template>
  <v-snackbar
    v-model="snackBar"
    :color="message.type"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
  >
    {{$t(message.code)}}
    <v-btn @click="snackBar = false" dark flat>{{$t('actions.close')}}</v-btn>
  </v-snackbar>
</template>
<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import { mapActions as mapActionsCore, mapGetters } from '@/store/modules/core'
import * as coreGetters from '@/store/modules/core/getters'
import * as coreTypes from '@/store/modules/core/types'

export default Vue.extend({
  data: () => ({
    timeout: 3000,
    mode: '',
  }),
  computed: {
    ...mapGetters({
      message: coreGetters.GET_MESSAGE,
    }),
    snackBar: {
      get() {
        return store.getters['core/GET_TOASTER']
      },
      set(snackBar) {
        this.clearSnackBarAction(snackBar)
      },
    },
  },
  methods: {
    ...mapActionsCore({
      clearSnackBarAction: coreTypes.CLEAR_TOASTER,
    }),
  },
})
</script>

<style>
</style>
