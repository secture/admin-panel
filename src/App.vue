<template>
  <v-app>
    <ToolBar></ToolBar>
    <SideBar></SideBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/global.scss';
</style>

<script>
import ToolBar from '@/components/ToolBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'App',
  components: {
    SideBar,
    ToolBar,
  },
  data() {
    return {
      //
    }
  },
}
</script>
