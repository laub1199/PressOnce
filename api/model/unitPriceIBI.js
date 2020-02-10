const mongoose = require('mongoose')

var UnitPriceIBISchema = mongoose.Schema({
    workItem: String,
    description: String,
    unit: String,
    type: String,
    price: Number
})

module.exports = mongoose.model('unitPriceIBI', UnitPriceIBISchema)
