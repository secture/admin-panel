<template>
  <v-app>
    <v-toolbar flat dark class="primary_dark">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>title prueba</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-flex>
            <v-avatar size="32px" class="ma-1">
              <img
                v-if="userLoged"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="Avatar"
              />
              <!--<v-icon v-else :color="message.color" v-text="message.icon"></v-icon>-->
            </v-avatar>
          </v-flex>
          <v-flex>
            <strong v-html="email"></strong>
          </v-flex>
        </v-btn>
        <v-btn flat @click="signOut()">
          <span>Cerrar sesión</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute dark class="primary_dark">
      <v-list class="pt-0 pb-0">
        <v-list-tile class="banner pt-2 pb-2">
          <v-avatar class="secondary ma-2">
            <span class="white--text headline">F</span>
          </v-avatar>
          <v-list-tile-content class="banner-title">
            <v-list-tile-title>Admin Fantasy LaLiga</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <hr class="v-divider theme--dark" />
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content :class="($vuetify.breakpoint.mdAndDown) ? 'ml-0' : 'ml-300'">
      <slot></slot>
    </v-content>
    <LanguageButton></LanguageButton>
    <SnackBar></SnackBar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from '@/store/modules/auth'
import * as actions from '@/store/modules/auth/types'
import * as authGet from '@/store/modules/auth/getters'
import router from '@/router'

import LanguageButton from '@/components/LanguageButton'
import SnackBar from '@/components/SnackBar'

export default {
  components: {
    LanguageButton,
    SnackBar,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Inicio', icon: 'dashboard' },
        { title: 'Equipos', icon: 'videogame_asset' },
        { title: 'Jugadores', icon: 'people' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      email: authGet.GET_EMAIL,
      userLoged: authGet.GET_LOGIN,
    }),
  },
  methods: {
    ...mapActions({
      signOutUser: actions.LOGOUT,
    }),
    signOut() {
      this.signOutUser()
      router.push({ path: '/login' })
    },
  },
}
</script>
<style lang="scss">
.ml-300 {
  margin-left: 300px;
}
</style>

