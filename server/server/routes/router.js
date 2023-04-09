const express = require('express')
const router = express.Router()
const axios = require('axios');
const DBConnection = require('../utilities/DBConnection')
const MonogDB = require("../model/DBschema");
DBConnection.connectToDataBase()

router.get('/transactions', function (req, res) {

    MonogDB.find({})
        .then(function (result) {
            res.send(result);
        });
})

router.post('/transactions', function (req, res) {
    let db = new MonogDB(
        {
            amount: req.body.amount,
            category: req.body.category,
            vendor: req.body.vendor,
        }).save().then(() => {
            res.status(201).end()
        }).catch(()=>{
            res.end("Something went wrong.")
        });
})

router.delete('/transactions/:transact', function (req, res) {
    let transact = req.params.transact
    MonogDB.deleteMany({ vendor: transact }).then(() => {
        console.log("deleted");
    }).catch(()=>{
        res.end("Something went wrong.")
    });
    MonogDB.find({})
        .then(function (result) {
            res.status(204).send(result);
        }).catch(()=>{
            res.end("Something went wrong.")
        });
})

router.get('/sumOfTransactionsPerCategory', function (req, res) {
    let breakDown = {}
    MonogDB.find({})
        .then(function (transactions) {
            for (const transact of transactions) {
                breakDown[transact.category] = 0
            }
            for (const transact of transactions) {
                breakDown[transact.category] += transact.amount
            }

        }).then(function () {
            let newJson = JSON.stringify(breakDown)
            res.status(201).end(newJson);
        }
        )
})
module.exports = router