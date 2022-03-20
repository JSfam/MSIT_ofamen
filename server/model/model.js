const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    f_name : {
        type : String,
        required: true
    },
    l_name : {
        type : String,
        required: true
    },
    age : Number,
    relation : String,
    tribe : String,
    gender : String,
    status : String
})

const Userdb = mongoose.model('lgu_profile', schema);

module.exports = Userdb;