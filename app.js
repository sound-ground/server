require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
const DB = process.env.MONGODB_CONNECTION_URI || 'mongodb://localhost:27017/sound-ground'

mongoose.connect(DB, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
