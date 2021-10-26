const User = require('../model/user')
const {StatusCodes} = require('http-status-codes')

const getUsers = async (req,res)=>{
    const users = await User.find({})
    return res.json({users,count:users.length})
}

const getUser = async (req,res)=>{
    const user = await User.findById({_id:req.params.id})
    return res.json({user})
}

const deleteUser = async (req,res)=>{
    await User.findOneAndRemove({_id:req.params.id})
    return res.json("Deleted successfully")
}

const updateUser = async (req,res)=>{
    const user = await User.findById({_id:req.params.id})
    if(req.body.password === ""){
        req.body.password = user.password
        await User.findByIdAndUpdate({_id:req.params.id},req.body,{
            new:true,
            runValidators:true
        })
    }else{
        user.username = req.body.username
        user.password = req.body.password
        await user.save()
    }
    return res.json("updated successfully")
}

const loginUser = async (req,res)=> {
    
}

const registerUser = async (req,res)=> {
    const {username,email,password,confirmPassword} = req.body
    if(password !== confirmPassword)
    return 

    const user = await User.create({username,email,password})
    const token = user.createJWT()
    return res.status(StatusCodes.CREATED).json({user:{username:user.username}, token})
}

module.exports = {
    getUsers,
    getUser,
    deleteUser,
    loginUser,
    updateUser,
    registerUser
}