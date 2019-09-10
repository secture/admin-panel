<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="primary" dark fab>
        <v-icon>flag</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </template>
    <v-tooltip v-for="(language, i) in languages" :key="i" left color="primary">
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          @click="changeLanguage(language.locale)"
          class="flag"
          fab
          dark
          small
          color="secondary_light"
        >{{ $t('flags.' + language.locale) }}</v-btn>
      </template>
      <span>{{ language.value }}</span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script lang="ts">
import { i18n } from '@/plugins/i18n/main'

export default {
  data: () => ({
    direction: 'top',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-x-transition',
    languages: [
      { value: 'Español', locale: 'es' },
      { value: 'Inglés', locale: 'en' },
    ],
  }),
  methods: {
    changeLanguage(locale: any) {
      i18n.locale = locale
    },
  },
}
</script>

<style lang="scss">
.v-speed-dial {
  position: absolute;
  .flag {
    font-size: 22px;
  }
}
</style>
