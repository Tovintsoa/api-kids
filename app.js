const express = require("express");
const cors =  require("cors");
const flash = require("connect-flash");
const bodyParser = require("body-parser") ;
const request = require('request')
const initUserRoute = require ('./src/routes/userRouter.js');
const initCategoryRoute = require("./src/routes/categoryRouter.js");
const initVideoRoute = require("./src/routes/videoRouter.js");
const initFavoriRoute = require("./src/routes/favoriRouter.js");

const categoryController = require ('./src/controllers/categoryController.js');
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