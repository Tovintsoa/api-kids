const categoryController = require ('../controllers/categoryController.js')

const router = require('express').Router()

let initCategoryRoute = (app) => {
    router.post('/category/addCategory', categoryController.addCategory)

    router.get('/category/allCategories', categoryController.getAllCategories)

    router.get('/category/getOne/:id', categoryController.getOneCategory)

    router.put('/category/updateCategory/:id', categoryController.updateCategory)

    router.delete('/category/deleteCategory/:id', categoryController.deleteCategory)


    return app.use("/", router);
}


module.exports = initCategoryRoute