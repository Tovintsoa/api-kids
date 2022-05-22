var mysql = require('mysql');
const db = require ('../models/base.js')
const dbConfig = require('../config/dbConfig.js');
var admin = require("firebase-admin");

var serviceAccount = require("../../service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



const Video = db.videos

const con = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PWD,
    database: dbConfig.DB
  });

  con.connect(function(err) {
	if (err) throw err
});

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

const addVideoView =  async (req , res) => {

    let info = {
        vIdCategory : req.body.vIdCategory,
        vName : req.body.vName,
        vUrl : req.body.vUrl,
    }
    try {
        const video = await Video.create(info)
        var tokenregistr = ["cdAz6oh7SMKv_geNDcRofI:APA91bEHsKYQXw_eAoV5G6eNkwRwxRe8X3-CUcObQcT579osagTRDAwzGXy8A07SXYCZ4T9IKTdYzupKZocV7GSaeMLOLG8LY09fQ4geL_zJDnwgLy3q1K9WoHOIIxyM4yL9st4suWGB"
        ,"eujxxqELScW_0QbhGwjGuD:APA91bF6x2soF2vWDHgRmg_pv5-iKta7K8RtumUMtlPSVHL37n8yP2QQF1JznuohyV5cOv-zQNEGX"];
        var payload = {
            notification: {
                title: "yoo",
                body: "New Video Added"
            }
        };
        var options = {
            priority :"high",
            timeToLive: 60*60*24
        };
        admin.messaging().sendToDevice(tokenregistr,payload,options).then(function(response){
            console.log("message sent :"+ response );
        })
        .catch(function(error){
            console.log("Error : "+ error);
        });
        res.redirect('/video/getVideoView');

    } catch (error) {
        //res.status(400).send("Category not existed")
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

const getAllVideosV2 = async (req , res) => {
    con.query("select videos.id,videos.vIdCategory,categories.cName,videos.vName,videos.vUrl from videos,categories where videos.vIdCategory = categories.id", function(err,fields,rows){
        res.status(200).send(fields)
    })
}

const getAllVideosByCategory = async (req , res) => {
    let vIdCategory = req.params.vIdCategory
    let videos = await Video.findAll({
        where :{vIdCategory : vIdCategory},
        attributes :[
            'id',
            'vIdCategory',
            'vName',
            'vUrl'
        ]
    })
    res.status(200).send(videos)
}

const searchVideo = async(req,res) => {

      let search = req.params.search
      con.query("select videos.id,videos.vIdCategory,categories.cName,videos.vName,videos.vUrl from videos,categories where videos.vIdCategory = categories.id and videos.vName LIKE '%"+search+"%' ", function(err,fields,rows){
        if(fields){
            res.status(200).send(fields)
        }else{
          res.status(400).send('No video found')
        }
      })
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
    getAllVideosV2,
    getOneVideo,
    updateVideo,
    deleteVideo,
    getAllVideosByCategory,
    addVideoView,
    searchVideo
}
