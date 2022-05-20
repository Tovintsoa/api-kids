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

const addToken = async (req , res) => {
    console.log("tafiditra")
    if(req.body.Token){
        var sql = "INSERT INTO TokenAndroid (token) VALUES ('"+req.body.Token+"') ON DUPLICATE KEY UPDATE TOKEN = '"+req.body.Token+"' ";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.status(200).send('Token added or replaced');
            //console.log("1 token inserted");
          });
    }else{

    }
}

module.exports = {
    addToken,

}