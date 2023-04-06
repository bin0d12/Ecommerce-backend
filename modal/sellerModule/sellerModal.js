const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 const sellerSignUpSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
 },{timestamps: true})

 module.exports = sellerSignUpData = mongoose.model('sellerSignUpData', sellerSignUpSchema)