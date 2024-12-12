const express = require('express')

const indexRouter = require('./routes/index')

// making  a new application server
const app = express()

// everything sent to indexRouter to be handled
app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on port 3000 ', server.address().port)
})