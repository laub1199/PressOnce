const mongoose = require('mongoose')

var UnitPriceATGSchema = mongoose.Schema({
    workItem: String,
    description: String,
    unit: String,
    price: Number
})

module.exports = mongoose.model('unitPriceATG', UnitPriceATGSchema)
