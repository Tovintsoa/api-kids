const express = require("express");
const cors =  require("cors");
const bodyParser = require("body-parser") ;
const { Sequelize } = require('sequelize');
const initUserRoute = require ('./src/routes/userRouter.js');
const initCategoryRoute = require("./src/routes/categoryRouter.js");
const initVideoRoute = require("./src/routes/videoRouter.js");
const initFavoriRoute = require("./src/routes/favoriRouter.js");

const app = express();

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

initUserRoute(app)
initCategoryRoute(app)
initVideoRoute(app)
initFavoriRoute(app)

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