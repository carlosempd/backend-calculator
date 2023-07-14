const mongoose  = require("mongoose");
const OPERATION_TYPE = require('../utils/operation')

const operationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: [
            OPERATION_TYPE.ADDITION,
            OPERATION_TYPE.SUBSTRACTION,
            OPERATION_TYPE.DIVISION,
            OPERATION_TYPE.MULTIPLICATION,
            OPERATION_TYPE.SQUARE_ROOT,
            OPERATION_TYPE.RANDOM_STRING
        ]
    },
    cost: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        defaul: new Date()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    result: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Operation', operationSchema)