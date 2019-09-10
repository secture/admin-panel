import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#37464f',
    primary_light: '#62717b',
    primary_dark: '#101f27',
    secondary: '#1de8b5',
    secondary_light: '#6dffe7',
    secondary_dark: '#00b585',
  },
})
