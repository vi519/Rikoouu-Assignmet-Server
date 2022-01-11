const mongoose = require('mongoose')

const PriceSchema = mongoose.Schema({
    price:{type:String}
})

const priceModel = mongoose.model('PriceData',PriceSchema)

module.exports= priceModel;