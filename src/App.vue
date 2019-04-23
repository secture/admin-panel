<template>
  <transition name="fade" mode="out-in">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </transition>
</template>
<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
}
</script>
<style lang="scss">
@import '@/styles/global.scss';

.v-content {
  padding-left: 300px !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
