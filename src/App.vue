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
