const {resGenerator} = require("../helper/methods")
const userModel = require("../db/models/user.model")
const jwt = require("jsonwebtoken")

const checkUser = async(token)=>{
    const decoded = jwt.verify(token, process.env.JWTKEY)
    const user = await userModel.findOne({_id: decoded._id, "tokens.token": token})
    if(!user) throw new Error("user not found")
    return user
}
const auth = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user = await checkUser(token)
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized user")
    }
}

const authAdmin = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user = await checkUser(token)
        if(user.type != "admin") throw new Error("you are not admin")
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized admin")
    }
}

module.exports={auth, authAdmin}