const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Book name is required'],
    },
    author:{
        type:String,
        required:[true,'Author name is required']
    },
    genres:{
        type:Array
    },
    availability:{
        type:Boolean,
        default:true
    },
    availableNumber:{
        type:Number,
        required:[true,'Please mention available number']
    },
    description:{
        type:String,
        required:[true,'Description is required']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('books',bookSchema)