const express = require('express')
const cors = require ('cors')
const dbConnect = require('./db/db.js')
require('dotenv').config()
const priceModel =require('./model/price.model.js')


const app = express();
app.use(cors())

app.use(express.json());

dbConnect();

app.listen(process.env.PORT||5000,()=>console.log(`Server is runnning at 5000`))


app.get('/get-price',async(req,res)=>{
    const prices = await priceModel.find();
    res.json(prices)
    console.log(prices)
    })

    app.post('/create-price',async(req,res)=>{
        const price = priceModel(req.body)
        await price.save();
    
        res.sendStatus(202);  
        })
