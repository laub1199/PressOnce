const mongoose = require('mongoose')

var AOWSchema = mongoose.Schema({
    fileName: String,
    AOWNo: String,
    orderNo: String,
    BSN: String,
    amount: Number, //the sum of the amount of those items
    team: String, //ATG vs IBI
    user: String,
    includedInInvoice: String
})

module.exports = mongoose.model('AOWSchema', AOWSchema)