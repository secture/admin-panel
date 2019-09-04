import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { light, dark } from './theme'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    themes: {
      light,
      dark,
    },
  },
})
