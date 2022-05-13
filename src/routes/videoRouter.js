const videoController = require ('../controllers/videoController.js')

const router = require('express').Router()

let initVideoRoute = (app) => {
    router.post('/video/addVideo', videoController.addVideo)

    router.get('/video/allVideos', videoController.getAllVideos)

    router.get('/video/allVideosByCategory/:vIdCategory', videoController.getAllVideosByCategory)
    
    router.get('/video/getOne/:id', videoController.getOneVideo)

    router.put('/video/updateVideo/:id', videoController.updateVideo)

    router.delete('/video/deleteVideo/:id', videoController.deleteVideo)


    return app.use("/", router);
}


module.exports = initVideoRoute