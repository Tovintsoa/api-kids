const db = require ('../models/base.js')

const Video = db.videos

const addVideo = async (req , res) => {

    let info = {
        vIdCategory : req.body.vIdCategory,
        vName : req.body.vName,
        vUrl : req.body.vUrl,
    }
    try {
        const video = await Video.create(info)
        res.status(200).send(video)
    } catch (error) {
        res.status(400).send("Category not existed")
    }
}

const getAllVideos = async (req , res) => {
    let videos = await Video.findAll({
        attributes :[
            'id',
            'vIdCategory',
            'vName',
            'vUrl'
        ]
    })
    res.status(200).send(videos)
}

const getOneVideo  = async (req , res) => {
    let id = req.params.id
    let video = await Video.findOne({ where :{id : id} })
    res.status(200).send(video)
}



const updateVideo  = async (req , res) => {
    let id = req.params.id

    const video = await Video.update(req.body , {where : {id : id}})

    res.status(200).send(video)
}

const deleteVideo = async (req , res) => {
    let id = req.params.id

    await Video.destroy({where : {id : id}})

    res.status(200).send('Video is deleted');
}



module.exports = {
    addVideo,
    getAllVideos,
    getOneVideo,
    updateVideo,
    deleteVideo,

}