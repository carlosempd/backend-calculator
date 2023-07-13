const mongoose = require("mongoose");
require('dotenv').config()

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: process.env.INITIAL_BALANCE
    }
})



module.exports = mongoose.model('User', userSchema)