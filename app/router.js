const Router = require('koa-router')
const { health } = require('./services')

const noLogs = new Router() // exclude koa logger to not spam console logs

noLogs.get('/', health)

// const router = new Router()

// router.get('/signin', auth.signin)
// router.post('/callback', auth.callback)

module.exports = {
  noLogs
  // router
}
