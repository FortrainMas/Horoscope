const express = require('express')
const config = require('config')
const PORT = config.get('port') || 5000
const {cleanPredictions} =require('./logic/dailyPredictionWorkers');

const app = express()

//Clean daily prediction once per day
setInterval( ()=>{cleanPredictions() }, 86400)
app.use('/', require('./routes/takeHoroscope'))
app.listen(PORT, ()=>{ console.log(`I'm alive on port ${PORT}`) })