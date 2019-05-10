const Music = require('../models/Music')

class MusicController {
    static create(req, res) {
        let url = null
        if (req.file) url = req.file.cloudStoragePublicUrl
        Music.create({
            title: req.body.title,
            url,
            createdAt: new Date()
        })
            .then(createdMusic => {
                res.status(200).json(createdMusic)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static find(req, res) {
        Music.find().sort({ createdAt: -1 })
            .then(music => {
                res.status(200).json(music)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = MusicController