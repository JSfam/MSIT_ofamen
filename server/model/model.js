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
    dateadmited: Date ,
    referal : String,
    gender : String,
    status : String
})

const Userdb = mongoose.model('derectorylists', schema);

module.exports = Userdb;