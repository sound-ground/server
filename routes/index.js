const routes = require('express').Router()
const music = require('./music')

routes.use('/music', music)

// routes.use('/mixs', require('./mixs'))

module.exports = routes
