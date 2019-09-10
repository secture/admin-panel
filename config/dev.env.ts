'use strict'
import merge from 'webpack-merge'
import prodEnv from './prod.env'

export default merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true, // this overrides the DEBUG_MODE value of prod.env
})
