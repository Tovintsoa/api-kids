const db = require ('../models/base.js')

const Category = db.categories

const addCategory = async (req , res) => {

    let info = {
        cName : req.body.cName,
        cDescription : req.body.cDescription,
        cImage : req.body.cImage,
    }

    const category = await Category.create(info)
    res.status(200).send(category)
}

const getAllCategories = async (req , res) => {
    let categories = await Category.findAll({
        attributes :[
            'id',
            'cName',
            'cDescription',
            'cImage'
        ]
    })
    res.status(200).send(categories)
}

const getOneCategory  = async (req , res) => {
    let id = req.params.id
    let category = await Category.findOne({ where :{id : id} })
    res.status(200).send(category)
}



const updateCategory  = async (req , res) => {
    let id = req.params.id

    const category = await Category.update(req.body , {where : {id : id}})

    res.status(200).send(category)
}

const deleteCategory = async (req , res) => {
    let id = req.params.id

    await Category.destroy({where : {id : id}})

    res.status(200).send('Category is deleted');
}



module.exports = {
    addCategory,
    getAllCategories,
    getOneCategory,
    updateCategory,
    deleteCategory,

}