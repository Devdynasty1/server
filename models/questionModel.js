const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxLength: 50
    },
    question:
    {
        type:String,
    },
    answer: {
        type:String,
        maxLength: 30,
        trim: true
    },
    difficulty: {
        type:String,
    },
    date: {
        type: Date,
        maxLength: 20,
        trim: true
    },
}, {timestamps: true})

module.exports=mongoose.model('question', questionSchema)