const mongoose = require("mongoose")

const Schema = mongoose.Schema

const boolSchema = new(Schema({
    bookName: {
        type: String,
        required: true
    },
    ID: {
        type: Number,
        required: true
    },
    auther: {
        type: String,
        required: true
    },
    reservations: {
        type: String,
        required: true
    }
}), { timestamps : true })


module.exports = mongoose.model("book", boolSchema)