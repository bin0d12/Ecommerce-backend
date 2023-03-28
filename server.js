const express = require('express')
const cors = require('cors')
const mongoose= require('mongoose')
const morgan = require('morgan')
const dotEnv = require('dotenv')

const app = express()

app.use('/', (req, res) => {
    res.send({
        message: "server created successfully"
    })
})

app.listen(3005, () => {
    console.log(`port listenning to port 3005`);
})