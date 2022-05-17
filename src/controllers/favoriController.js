var mysql = require('mysql');

const db = require ('../models/base.js')
const dbConfig = require('../config/dbConfig.js');

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PWD,
    database: dbConfig.DB
  });

  con.connect(function(err) {
	if (err) throw err
});
const Favori = db.favoris
const Video = db.videos

const addFavori = async (req , res) => {

    let info = {
        fIdVideo : req.body.fIdVideo,
        fIdUser : req.body.fIdUser,
    }
    try {
        let favoris = await Favori.findOne({
            where :{fIdUser : info.fIdUser , fIdVideo : info.fIdVideo}
        })
        if(!favoris){
            const favori = await Favori.create(info)
            res.status(200).send(favori)
        }
        else if(favoris){
            res.status(400).send("already favori")
        }
    } catch (error) {
        res.status(400).send("user or video not existed ")
    }
}

const getAllFavoris = async (req , res) => {
    let favoris = await Favori.findAll({
        attributes :[
            'id',
            'fIdVideo',
            'fIdUser',
        ],
    })
    res.status(200).send(favoris)
}


const getAllFavorisV2 = async (req , res) => {
    con.query("select favoris.id, favoris.fIdUser, users.uUsername, favoris.fIdVideo, videos.vName, videos.vUrl FROM favoris, users, videos WHERE favoris.fIdUser = users.id AND favoris.fIdVideo = videos.id", function(err,fields,rows){
        res.status(200).send(fields)
    })
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

const getAllFavorisByUserV2 = async (req , res) => {
    let fIdUser = req.params.fIdUser
    con.query("select favoris.id, favoris.fIdUser, users.uUsername, favoris.fIdVideo, videos.vName, videos.vUrl FROM favoris, users, videos WHERE favoris.fIdUser = users.id AND favoris.fIdVideo = videos.id AND favoris.fIdUser="+fIdUser, function(err,fields,rows){
        res.status(200).send(fields)
    })
}

const getOneFavori  = async (req , res) => {
    let id = req.params.id
    let favori = await Favori.findOne({ where :{id : id} })
    res.status(200).send(favori)
}

const getOneFavoriV2 = async (req , res) => {
    let id = req.params.id
    con.query("select favoris.id, favoris.fIdUser, users.uUsername, favoris.fIdVideo, videos.vName, videos.vUrl FROM favoris, users, videos WHERE favoris.fIdUser = users.id AND favoris.fIdVideo = videos.id AND favoris.id = "+id, function(err,fields,rows){
        res.status(200).send(fields)
    })
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
    getAllFavorisV2,
    getAllFavorisByUserV2,
    getOneFavoriV2
}