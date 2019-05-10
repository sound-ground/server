const route = require('express').Router()
const MusicController = require('../controllers/MusicController')
const gscKey = require('../middlewares/gcsKey')

route.get('/', MusicController.find)
route.post('/', gscKey.multer.single('music'), gscKey.sendUploadToGCS, MusicController.create)

module.exports = route