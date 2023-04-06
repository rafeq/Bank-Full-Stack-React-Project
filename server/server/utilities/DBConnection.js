const mongoose = require("mongoose");

const connectToDataBase = function (){
  mongoose.connect("mongodb://localhost/bank", { useNewUrlParser: true })

}

module.exports = {connectToDataBase}