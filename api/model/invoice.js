const mongoose = require('mongoose')

var InvoiceSchema = mongoose.Schema({
    fileName: String,
    invoiceNum: String,
    amount: Number, //the sum of the amount of those items
    team: String, //ATG vs IBI
    user: String
})

module.exports = mongoose.model('invoice', InvoiceSchema)