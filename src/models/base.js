const dbConfig = require('../config/dbConfig.js');

const { Sequelize,DataTypes } = require ('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PWD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        logging: false,
        pool : {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
.then(()=>{
    console.log('Database connected');
})
.catch(err => {
    console.log('Error ' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize,DataTypes)
db.categories = require('./categoryModel.js')(sequelize, DataTypes)
db.videos = require('./videoModel.js')(sequelize, DataTypes)
db.favoris = require('./favoriModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force:false })
.then( ()=> {
    console.log('re-sync done!')
})

module.exports = db