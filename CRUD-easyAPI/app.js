const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/config')

const app = express()

const PORT = process.env.PORT || 3000

const join = require('./routes/join')
const login = require('./routes/login')

app.listen(PORT, () => {
    console.log('listening on port :' + PORT)
})

mongoose.connect(config.mongodburi)

const db = mongoose.connection;
db.on('error', err => {
    console.error(err);
    console.log('db connection error')
    process.exit()
});

db.once('open', () => {
    console.log('db connection success')
})

app.use("/", join)
app.use("/", login)

app.get('/', (req, res) => {
    res.send("sasdf")
})