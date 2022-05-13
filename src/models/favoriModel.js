module.exports = (sequelize, DataTypes) => {
    
    const Favori = sequelize.define("favori",{

        fIdVideo:{
            type: DataTypes.INTEGER,
            references: {
                model: 'videos',
                key: 'id'
            },
            allowNull : false
        } ,
        fIdUser:{
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull : false
        },
    })
    return Favori
}