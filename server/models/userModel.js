const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },

    orgName : {
        type: String,
        required: [false, "Please enter  your organization name"]
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
    
    address: {
        type: String,
        required: true,
    },

    number: {
        type: Number,
        required:true,
        unique: true
    },

    role: {
        type:String ,
        required:true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User