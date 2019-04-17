<template>
  <v-app>
    <ToolBar></ToolBar>
    <SideBar></SideBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'

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
