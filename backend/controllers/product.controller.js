const Product = require('../models/product.model')

exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(200).json({
        success: true,
        product
    })
}

exports.getAllProducts = async (req, res) => {

    const products = await Product.find()

    res.status(200).json({
        success: true,
        products
    })
}