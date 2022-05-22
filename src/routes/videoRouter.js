const videoController = require ('../controllers/videoController.js')

const router = require('express').Router()

let initVideoRoute = (app) => {
    router.post('/video/addVideo', videoController.addVideo)

    router.get('/video/allVideos', videoController.getAllVideos)


    router.get('/video/allVideosV2', videoController.getAllVideosV2)


    router.get('/video/allVideosByCategory/:vIdCategory', videoController.getAllVideosByCategory)

    router.get('/video/searchVideo/:search', videoController.searchVideo)

    router.get('/video/getOne/:id', videoController.getOneVideo)

    router.put('/video/updateVideo/:id', videoController.updateVideo)

    router.delete('/video/deleteVideo/:id', videoController.deleteVideo)

    router.post('/video/submitVideo',videoController.addVideoView)

    return app.use("/", router);
}


module.exports = initVideoRoute
