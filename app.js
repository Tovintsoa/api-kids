const express = require("express");
const cors =  require("cors");
const { Sequelize } = require('sequelize');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const sequelize = new Sequelize('tsiky_kids', 'tsiky', 'tsikynacks06', {
    host: 'mysql-tsiky.alwaysdata.net',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
/* var con = mysql.createConnection({
    host: "mysql-tsiky.alwaysdata.net",
    user: "tsiky",
    password: "tsikynacks06"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    }); */


app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Hello, Server!');
});