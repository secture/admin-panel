<template>
  <v-app>
    <slot></slot>
    <LanguageButton></LanguageButton>
    <SnackBar type="warning" text="Texto de prueba"></SnackBar>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import LanguageButton from '@/components/LanguageButton'
import SnackBar from '@/components/SnackBar'

Vue.use(VeeValidate)

export default {
  components: {
    LanguageButton,
    SnackBar,
  },
  mounted() {
    this.$validator.localize('en', this.dictionary)
  },
}
</script>
