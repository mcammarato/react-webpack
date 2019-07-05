const express = require('express')
const app = express()
const port = 6300
const morgan = require('morgan')
const path = require('path')

// HTTP Logs
app.use(morgan('short'))

// Static Route Tree
app.use('/dist', express.static(__dirname + '/dist'));


// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))


// Server
app.listen(port, () => console.log(`listening on port ${port}`))

