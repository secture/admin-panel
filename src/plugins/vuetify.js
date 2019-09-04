import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: {
      base: '#0F202A',
      darken1: '#0B1216',
      lighten1: '#254150',
    },
    secondary: '#92DAEC',
    tertiary: '#FEF9CE',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
})
