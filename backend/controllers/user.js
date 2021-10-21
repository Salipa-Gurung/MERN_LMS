const User = require('../model/user')
const {StatusCodes} = require('http-status-codes')

const getUsers = async (req,res)=>{
    const Users = await User.find({})
    return res.json({Users,count:Users.length})
}

const getUser = async (req,res)=>{
    const User = await User.findById({_id:req.params.id})
    return res.json({User})
}

const deleteUser = async (req,res)=>{
    await User.findOneAndRemove({_id:req.params.id})
    return res.json("Deleted successfully")
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
    registerUser
}