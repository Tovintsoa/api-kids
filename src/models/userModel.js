

module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("user",{
        uName :{
            type:DataTypes.STRING,
            allowNull : false
        },
        uUsername: {
            type:DataTypes.STRING,
            allowNull : false
        },
        uEmail: {
            type:DataTypes.STRING,
            allowNull : false
        },
        uPassword: {
            type:DataTypes.STRING,
            allowNull : false
        },
    })
    return User
}