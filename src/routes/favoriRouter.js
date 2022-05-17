const favoriController = require ('../controllers/favoriController.js')

const router = require('express').Router()

let initFavoriRoute = (app) => {
    router.post('/favori/addFavori', favoriController.addFavori)

    router.get('/favori/allFavoris', favoriController.getAllFavoris)

    router.get('/favori/allFavorisV2', favoriController.getAllFavorisV2)

    router.get('/favori/allFavorisByUser/:fIdUser', favoriController.getAllFavorisByUser)
    
    router.get('/favori/allFavorisByUserV2/:fIdUser', favoriController.getAllFavorisByUserV2)
    
    router.get('/favori/getOne/:id', favoriController.getOneFavori)

    router.get('/favori/getOneV2/:id', favoriController.getOneFavoriV2)

    router.put('/favori/updateFavori/:id', favoriController.updateFavori)

    router.delete('/favori/deleteFavori/:id', favoriController.deleteFavori)
    
    return app.use("/", router);
}


module.exports = initFavoriRoute