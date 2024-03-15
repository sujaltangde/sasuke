const mongoose = require('mongoose');

const surplusOrder = new mongoose.Schema({
    orgName: {
        type: String,
        required: [true, "Please enter organization name"]
    },
    description: {
        type: String,
        required: [true, "Please enter description"]
    },
    foodQuantityAsPerson: {
        type: Number,
        required: [true, "Please enter food quantity per person"]
    },
    cookingTime: {
        type: Date,
        required: [true, "Please enter cooking time"]
    },
    imgFood: {
        type: String 
    },
    addressPickup: {
        type: String,
        required: [true, "Please enter pickup address"]
    },
    eatByTime: {
        type: Date,
        required: true,
        default: function() {
            return new Date(this.cookingTime.getTime() + 15 * 60 * 60 * 1000);
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Surplus = mongoose.model('surplus', surplusOrder);
module.exports = Surplus;
