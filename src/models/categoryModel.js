

module.exports = (sequelize, DataTypes) => {
    
    const Category = sequelize.define("category",{
        cName :{
            type:DataTypes.STRING,
            allowNull : false
        },
        cDescription: {
            type:DataTypes.STRING,
            allowNull : false
        },
        cImage: {
            type:DataTypes.STRING,
            allowNull : false
        },
        
    })
    return Category
}