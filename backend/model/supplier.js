const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Book name is required'],
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
   
    contactNumber:{
        type:Number,
        required:[true,'Conatct number is required']
    },
    description:{
        type:String,
        required:[true,'Description is required']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('suppliers',supplierSchema)