<template>
  <v-app>
    <ToolBar></ToolBar>
    <SideBar></SideBar>
    <v-content>
      <slot></slot>
    </v-content>
    <LanguageButton></LanguageButton>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import SideBar from '@/components/SideBar'
import LanguageButton from '@/components/LanguageButton'

export default {
  components: {
    SideBar,
    ToolBar,
    LanguageButton,
  },
}
</script>