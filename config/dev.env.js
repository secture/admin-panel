'use strict'
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG_MODE: true, // this overrides the DEBUG_MODE value of prod.env
})
