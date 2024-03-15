const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },

    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Enter valid email address"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter a password"]
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User