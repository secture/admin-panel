<template>
  <v-app>
    <v-toolbar flat dark class="primary_dark">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>XXX</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-flex>
            <v-avatar size="32px" class="ma-1">
              <img
                v-if="userLogged"
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
        <v-btn @click="signOut()" flat>
          <span>Cerrar sesión</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      absolute
      dark
      width="275"
      class="primary_dark"
    >
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
        <v-list-tile v-for="item in items" :key="item.title" v-ripple @click="navigateTo(item.url)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content :class="($vuetify.breakpoint.mdAndDown) ? 'ml-0' : 'ml-275'">
      <transition name="fade" mode="out-in">
        <slot></slot>
      </transition>
    </v-content>
    <LanguageButton></LanguageButton>
    <SnackBar></SnackBar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as types from '@/store/modules/auth/types'
import * as getters from '@/store/modules/auth/getters'
import router from '@/router'

import { Action, Getter } from 'vuex-class'
const namespace: string = types.namespace

import LanguageButton from '@/components/LanguageButton.vue'
import SnackBar from '@/components/SnackBar.vue'

@Component({
  components: {
    LanguageButton,
    SnackBar,
  },
})
export default class Dashboard extends Vue {
  @Action(types.LOGOUT, { namespace }) signOutUser: any
  @Action(types.GET_AUTHENTICATED_USER, { namespace }) authenticatedUser: any

  @Getter(getters.GET_EMAIL, { namespace }) email!: string
  @Getter(getters.GET_USER_LOGGED, { namespace }) userLogged!: boolean
  @Getter(getters.GET_COGNITO_USER, { namespace }) cognitoUser!: any

  public drawer: any = null
  public user: any = null
  public items: Array<any> = [
    { title: 'dashboard.home', icon: 'dashboard', url: '/' },
    { title: 'dashboard.teams', icon: 'shield', url: '/teams' },
    { title: 'dashboard.players', icon: 'people', url: '/players' },
  ]
  mounted() {
    if (this.cognitoUser !== null) {
      this.user = this.cognitoUser
    } else {
      this.authenticatedUser().then((authenticatedUser: any) => {
        this.user = authenticatedUser
      })
    }
  }
  navigateTo(url: any) {
    router.push({ path: url })
  }
  signOut() {
    this.signOutUser().then(() => {
      router.push({ path: '/login' })
    })
  }
}
</script>
<style lang="scss">
.ml-275 {
  margin-left: 275px;
}
</style>

