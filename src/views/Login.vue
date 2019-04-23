<template>
  <v-app>
    <slot></slot>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  mounted() {
    this.$validator.localize('en', this.dictionary)
  },
}
</script>
