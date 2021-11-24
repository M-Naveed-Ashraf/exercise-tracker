const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        // required: [true, 'please add a title']
    },
    price: {
        type: String,
        trim: true,
        // required: [true, 'please add some price']
    },
    details: {
        type: String,
        trim: true,
        // required: [true, 'please add details']
    },
    image: {
        type: String,
        trim: true,
        // required: [true, 'please add an image of the product']
    }
});

module.exports = mongoose.model("first", ExerciseSchema);