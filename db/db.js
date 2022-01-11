const mongoose = require('mongoose')

const dbConnect =async ()=>{
    try{
        const URL=`mongodb://admin:admin123@reduxreactprice-shard-00-00.w34xi.mongodb.net:27017,reduxreactprice-shard-00-01.w34xi.mongodb.net:27017,reduxreactprice-shard-00-02.w34xi.mongodb.net:27017/ReduxReactPrice?ssl=true&replicaSet=atlas-j6lq8n-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await mongoose.connect(URL, { useUnifiedTopology:true, useNewURLParser:true })
        console.log("Database is connected")
    }
    catch(error){
console.log("Please Try Again",error)
    }
}

module.exports= dbConnect;