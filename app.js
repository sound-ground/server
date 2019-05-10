require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const DB = process.env.MONGODB_CONNECTION_URI || 'mongodb://localhost:27017/sound-ground'
const routes = require('./routes')

mongoose.connect(DB, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`~~~Listening to port ${PORT} FM~~~`)
  console.log(`~~~SUARA MUSIK TERKINI~~~`);
})
