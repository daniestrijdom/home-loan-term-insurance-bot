let env = process.env.NODE_ENV || 'development'

// istanbul ignore next
if (env !== 'test') {
  require('dotenv-safe').config({ silent: true }) // eslint-disable-line
  env = process.env.NODE_ENV || 'development'
}

const koa = require('koa')
const winston = require('winston') 
const koaLogger = require('koa-logger')
const { noLogs } = require('./router.js')

const app = (module.exports = koa())
const port = process.env.PORT || 8080

// istanbul ignore next
app.use(noLogs.middleware())

// istanbul ignore next
if (env !== 'test') {
  // only add koa logger for environments other than test
  app.use(koaLogger())
}

// app.use(unsecured.middleware());
// app.use(secured.middleware());

// istanbul ignore next
if (!module.parent) {
  app.listen(port)
  winston.log(
    'info',
    `App is running under env '${env}', listening on port ${port}`
  )
}
