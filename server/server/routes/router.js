const express = require('express')
const router = express.Router()
const axios = require('axios');
const DBConnection = require ('/Users/rafeqabufiad/Desktop/home/code/bootcamp/projects/server/server/utilities/DBConnection.js')
const MonogDB = require("../model/DBschema");
DBConnection.connectToDataBase()

router.get('/transactions', function (req, res) {

    MonogDB.find({})
    .then(function (cat) {
      res.send(cat);
    });
})

router.post('/transactions',function(req,res){
    let db=new MonogDB(
        {
            amount:req.body.amount,
            category:req.body.category,
            vendor:req.body.vendor,
        }).save().then((res) => {
            console.log("succ")
        })
        res.end()
})

router.delete('/transactions/:transact', function (req, res) {
    let transact = req.params.transact
    MonogDB.deleteMany({vendor:transact}).then(()=>{
        console.log("deleted");
    })
    MonogDB.find({})
    .then(function (cat) {
      res.send(cat);
    });
})

router.get('/amountSum', function (req, res) {
    let breakDown={}
    MonogDB.find({})
    .then(function (transactions) {
        for (const transact of transactions) {
            breakDown[transact.category] = 0
        }
        for (const transact of transactions) {
            breakDown[transact.category] += transact.amount
        }

    }).then(function(){
      let newJson=JSON.stringify(breakDown)
    res.end(newJson);
  }
  )
})


module.exports = router
