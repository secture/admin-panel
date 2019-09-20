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
import { Component, Vue } from 'vue-property-decorator'
import store from '@/store'
import * as getters from '@/store/modules/core/getters'
import * as types from '@/store/modules/core/types'

import { Action, Getter } from 'vuex-class'
import { Core, Message } from '@/models/core'
const namespace: string = types.namespace

@Component
export default class SnachBar extends Vue {
  @Action(types.CLEAR_TOASTER, { namespace }) clearSnackBarAction: any
  @Getter(getters.GET_MESSAGE, { namespace }) message!: Message

  public timeout: number = 3000
  public mode: string = ''

  get snackBar() {
    return store.getters['core/GET_TOASTER']
  }

  set snackBar(snackBar) {
    this.clearSnackBarAction(snackBar)
  }
}
</script>

<style>
</style>
