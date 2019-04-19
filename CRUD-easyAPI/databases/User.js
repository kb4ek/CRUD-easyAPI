const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    pw: {
        type: String,
        require: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('user', UserSchema)