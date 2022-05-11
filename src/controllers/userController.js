const db = require ('../models/base.js')

const User = db.users

const addUser = async (req , res) => {

    let info = {
        uName : req.body.uName,
        uUsername : req.body.uUsername,
        uEmail : req.body.uEmail,
        uPassword : req.body.uPassword
    }

    const user = await User.create(info)
    res.status(200).send(user)
}

const getAllUsers = async (req , res) => {
    let users = await User.findAll({
        attributes :[
            'id',
            'uName',
            'uUsername',
            'uEmail'
        ]
    })
    res.status(200).send(users)
}

const getOneUser  = async (req , res) => {
    let id = req.params.id
    let user = await User.findOne({ where :{id : id} })
    res.status(200).send(user)
}



const updateUser  = async (req , res) => {
    let id = req.params.id

    const user = await User.update(req.body , {where : {id : id}})

    res.status(200).send(user)
}

const deleteUser = async (req , res) => {
    let id = req.params.id

    await User.destroy({where : {id : id}})

    res.status(200).send('User is deleted');
}

const authenticateUser =async (req,res,next) => {
    const uUsername = req.body.uUsername;
    const uPassword = req.body.uPassword;
    let user = await User.findOne({ where :{uUsername : uUsername , uPassword : uPassword} })
    if(!user){
        res.status(401).send("Username or password wrong !")
    }else{
        res.status(200).send(user)
    }
    
    
    /* getOneUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
          return res.json({ success: false, msg: "User not found" });
        }
        try {   
            if(user.password === password){
                res.status(200).send(user)
            }
        } catch (error) {
            res.status(4014).send('Username or password invalid')
        }
    }) */
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    authenticateUser,

}