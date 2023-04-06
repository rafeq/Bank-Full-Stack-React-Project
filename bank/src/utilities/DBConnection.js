const CONFIG ="mongodb://127.0.0.1:27017/bank"
import { connect } from "mongoose";
const connectToDataBase = function (){
    connect(CONFIG.mongoDB, {
      useNewUrlParser: true,
    });
}

export default {connectToDataBase}