const mongoose = require('mongoose')

var OrderRecordSchema = mongoose.Schema({
    FileName: String,
    UserName: String
})

module.exports = mongoose.model('Order_Record', OrderRecordSchema)