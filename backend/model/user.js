const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const validateEmail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'User name is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
},{
    timestamps:true
})

userSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
        this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.createJWT= function(){
    return jwt.sign(
        {username:this.username, userId:this._id},
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:process.env.JWT_LIFETIME
        }
    )
}

module.exports = mongoose.model('users',userSchema)