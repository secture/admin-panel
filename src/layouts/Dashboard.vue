<template>
  <v-app>
    <ToolBar></ToolBar>
    <SideBar></SideBar>
    <v-content>
      <slot></slot>
    </v-content>
    <LanguageButton></LanguageButton>
    <SnackBar type="info" text="Texto de prueba"></SnackBar>
  </v-app>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import SideBar from '@/components/SideBar'
import LanguageButton from '@/components/LanguageButton'
import SnackBar from '@/components/SnackBar'

export default {
  components: {
    SideBar,
    ToolBar,
    LanguageButton,
    SnackBar,
  },
}
</script>