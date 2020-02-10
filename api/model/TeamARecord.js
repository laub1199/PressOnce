const mongoose = require('mongoose')

var TeamARecordSchema = mongoose.Schema({
    FileName: String,
    UserName: String,
    Name: String,
    Date: String,
    TelNum: String,
    InvNum: String
})

module.exports = mongoose.model('Team_A_Record', TeamARecordSchema)