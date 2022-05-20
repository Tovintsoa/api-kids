const tokenAndroidController = require ('../controllers/tokenAndroidController.js')

const router = require('express').Router()

let initTokenAndroidRoute = (app) => {

    router.post('/token/addTokenAndroid', tokenAndroidController.addToken)
    
    return app.use("/", router);
}


module.exports = initTokenAndroidRoute