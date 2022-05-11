const db = require ('../models/base.js')

const User = db.users

const addUser = async (req , res) => {

    let info = {
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    }

    const user = await User.create(info)
    res.status(200).send(user)
}

const getAllUsers = async (req , res) => {
    let users = await User.findAll({
        attributes :[
            'id',
            'name',
            'username',
            'email'
        ]
    })
    res.status(200).send(users)
}

const getOneUser  = async (req , res) => {
    let id = req.params.id
    let user = await User.findOne({ where :{id : id} })
    res.status(200).send(user)
}

const getOneUserByUsername  = async (req , res) => {
    //console.log(req.body.username);
    let username = req.body.username;
    let user = await User.findOne({ where :{username : username} })
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
    const username = req.body.username;
    const password = req.body.password;
    let user = await User.findOne({ where :{username : username , password : password} })
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
    getOneUserByUsername,
    authenticateUser,

}