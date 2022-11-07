const mongoose = require("mongoose")

const Schema = mongoose.Schema

const accountSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model("account", accountSchema)