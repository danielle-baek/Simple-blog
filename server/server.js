const path = require('path')
const express = require('express')

const journals = require('./routes/journals')

const server = express()
server.use('/v1/posts', journals)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
