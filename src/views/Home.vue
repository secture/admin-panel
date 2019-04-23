<template>
  <v-app>
    <ToolBar></ToolBar>
    <SideBar></SideBar>
    <v-content>
      <slot></slot>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import SideBar from '@/components/SideBar'

export default {
  components: {
    SideBar,
    ToolBar,
  },
}
</script>
