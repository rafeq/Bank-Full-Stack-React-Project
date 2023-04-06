const bodyParser=require('body-parser')
const express = require('express')

const app = express()
const mongoose = require("mongoose");
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
const router=require('./server/routes/router')
app.use('/',router)

const port = 4000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
