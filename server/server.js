const express = require('express')
const config = require('config')
const PORT = config.get('port') || 5000

const app = express()
app.use('/', require('./routes/takeHoroscope'))
app.listen(PORT, ()=>{ console.log(`I'm alive on port ${PORT}`) })