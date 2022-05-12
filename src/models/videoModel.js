module.exports = (sequelize, DataTypes) => {
    
    const Video = sequelize.define("video",{

        vIdCategory:{
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        } ,
        vName:{
            type:DataTypes.STRING,
            allowNull : false
        },
        vUrl:{
            type:DataTypes.STRING,
            allowNull : false
        },
        
    })
    return Video
}