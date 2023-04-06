const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transactionSchema = new schema({
    amount:Number ,
    category:String,
    vendor:String,
})


module.exports  = mongoose.model('Transaction', transactionSchema);

