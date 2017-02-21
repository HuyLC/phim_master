'use strict'

require('dotenv').config({silient: true})
require('now-logs')('phim.clgt.vn')

const server = require('./lib/server')

server.listen(5000,
    console.log('Listen port 3000!')
)
