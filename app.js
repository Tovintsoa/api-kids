const express = require("express");
const cors =  require("cors");
const flash = require("connect-flash");
const bodyParser = require("body-parser") ;
const request = require('request')
const { getMessaging } = require("firebase/messaging")
const initUserRoute = require ('./src/routes/userRouter.js');
const initCategoryRoute = require("./src/routes/categoryRouter.js");
const initVideoRoute = require("./src/routes/videoRouter.js");
const initFavoriRoute = require("./src/routes/favoriRouter.js");
const initTokenAndroidRoute = require("./src/routes/tokenAndroidRouter.js");
/* var admin = require("firebase-admin");

var serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); */
const { response } = require("express");

const app = express();

app.set('view engine','ejs')
app.set('views', __dirname+'/src/views');

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(flash());

app.use(express.urlencoded({ extended: true }))

initUserRoute(app)
initCategoryRoute(app)
initVideoRoute(app)
initFavoriRoute(app)
initTokenAndroidRoute(app)


app.get('/video/addVideoView',(req,res)=>{
    request.get("https://api-kids.herokuapp.com/category/allCategories",  (error,response,body) =>{
        res.render('addVideo',{title:'Add Video Page',allCategories: JSON.parse(body)})
    })
});

app.get('/video/getVideoView',(req,res)=>{
    request.get("https://api-kids.herokuapp.com/video/allVideosV2",  (error,response,body) =>{
        res.render('getVideo',{title:'Get Video Page',allVideos: JSON.parse(body)})
    })
});


//var tokenregistr = "cdAz6oh7SMKv_geNDcRofI:APA91bEHsKYQXw_eAoV5G6eNkwRwxRe8X3-CUcObQcT579osagTRDAwzGXy8A07SXYCZ4T9IKTdYzupKZocV7GSaeMLOLG8LY09fQ4geL_zJDnwgLy3q1K9WoHOIIxyM4yL9st4suWGB";
/* var tokenregistr = ["cdAz6oh7SMKv_geNDcRofI:APA91bEHsKYQXw_eAoV5G6eNkwRwxRe8X3-CUcObQcT579osagTRDAwzGXy8A07SXYCZ4T9IKTdYzupKZocV7GSaeMLOLG8LY09fQ4geL_zJDnwgLy3q1K9WoHOIIxyM4yL9st4suWGB"
,"eujxxqELScW_0QbhGwjGuD:APA91bF6x2soF2vWDHgRmg_pv5-iKta7K8RtumUMtlPSVHL37n8yP2QQF1JznuohyV5cOv-zQNEGX"];
var payload = {
    notification: {
        title: "yoo",
        body: "broo"
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
});  */

/* const registrationToken = 'cdAz6oh7SMKv_geNDcRofI:APA91bEHsKYQXw_eAoV5G6eNkwRwxRe8X3-CUcObQcT579osagTRDAwzGXy8A07SXYCZ4T9IKTdYz';

const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
 */


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


/* var con = mysql.createConnection({
    host: "mysql-tsiky.alwaysdata.net",
    user: "tsiky",
    password: "tsikynacks06"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    }); */

/* 
app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
}); */