<template>
  <v-app>
    <slot></slot>
    <LanguageButton></LanguageButton>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import LanguageButton from '@/components/LanguageButton'

Vue.use(VeeValidate)

export default {
  components: {
    LanguageButton,
  },
  mounted() {
    this.$validator.localize('en', this.dictionary)
  },
}
</script>
