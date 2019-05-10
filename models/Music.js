const mongoose = require('mongoose')
const Schema = mongoose.Schema

let musicSchema = new Schema({
    title: String,
    url: String,
    createdAt: Date
})

let Music = mongoose.model("Music", musicSchema)

module.exports = Music