const userController = require ('../controllers/userController.js')

const router = require('express').Router()

router.post('user/addUser', userController.addUser)

router.get('user/allUsers', userController.getAllUsers)

router.get('user/getOne/:id', userController.getOneUser)

router.put('user/updateUser/:id', userController.updateUser)

router.delete('user/deleteUser/:id', userController.deleteUser)