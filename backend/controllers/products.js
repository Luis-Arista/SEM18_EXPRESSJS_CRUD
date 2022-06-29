const ProductModel = require('../models/products')

const getProducts = async () => {
    return ProductModel.find({})
}

const createProduct = async (body) => {
    const newProducto = new ProductModel(body)
    await newProducto.save()
    return newProducto
}

module.exports = {
    getProducts,
    createProduct
}