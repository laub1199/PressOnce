const mongoose = require('mongoose')

var OrderSchema = mongoose.Schema({
    orderNo: Number,
    BSN: Number,
    team: String, //ATG vs IBI
    address: String,
    fiberLength: Number,
    splitter: String,
    plateIDCable: String,
    SCCoupler1Port: String,
    SCCoupler6Port: String,
    AVCTieMount: String
})

module.exports = mongoose.model('order', OrderSchema)