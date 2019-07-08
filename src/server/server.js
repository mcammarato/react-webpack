const express       = require('express')
const app           = express()
const port          = 3000
const morgan        = require('morgan')

// HTTP Logs
app.use(morgan('short'))

// Api
app.get('/api', (req, res) => res.send('Hello, api!'))

// Server
app.listen(port, () => console.log(`listening on port ${port}`))
