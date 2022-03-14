const mongoose = require('mongodb');

const drinksSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: 'This fild is required',
    },
    name: {
        type: String,
        required: 'This fild is required',
    },
    image: {
        type: String,
        required: 'This fild is required',
    },
    price: {
        type: Number,
        required: 'This fild is required',
    },
})

module.exports = mongoose.model('Drinks', drinksSchema)