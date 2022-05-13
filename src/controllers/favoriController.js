const db = require ('../models/base.js')

const Favori = db.favoris

const addFavori = async (req , res) => {

    let info = {
        fIdVideo : req.body.fIdVideo,
        fIdUser : req.body.fIdUser,
    }
    try {
        let favoris = await Favori.findOne({
            where :{fIdUser : fIdUser , fIdVideo : fIdVideo}
        })
        if(!favoris){
            const favori = await Favori.create(info)
            res.status(200).send(favori)
        }
        else{
            res.status(400).send("already favori")
        }
    } catch (error) {
        res.status(400).send("user or video not existed")
    }
}

const getAllFavoris = async (req , res) => {
    let favoris = await Favori.findAll({
        attributes :[
            'id',
            'fIdVideo',
            'fIdUser',
        ]
    })
    res.status(200).send(favoris)
}

const getAllFavorisByUser = async (req , res) => {
    let fIdUser = req.params.fIdUser
    let favoris = await Favori.findAll({
        where :{fIdUser : fIdUser},
        attributes :[
            'id',
            'fIdVideo',
            'fIdUser',
        ]
    })
    res.status(200).send(favoris)
}


const getOneFavori  = async (req , res) => {
    let id = req.params.id
    let favori = await Favori.findOne({ where :{id : id} })
    res.status(200).send(favori)
}



const updateFavori  = async (req , res) => {
    let id = req.params.id

    const favori = await Favori.update(req.body , {where : {id : id}})

    res.status(200).send(favori)
}

const deleteFavori = async (req , res) => {
    let id = req.params.id

    await Favori.destroy({where : {id : id}})

    res.status(200).send('Favori is deleted');
}



module.exports = {
    addFavori,
    getAllFavoris,
    getOneFavori,
    updateFavori,
    deleteFavori,
    getAllFavorisByUser,
}