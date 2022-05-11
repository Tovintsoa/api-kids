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

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
}