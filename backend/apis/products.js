const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const { productsControler } = require('../controllers')

const { getProducts , createProduct } = productsControler

router.get( '/', async( req,res) => {
    const products = await getProducts()
    res.send(products)
})

router.post( '/' , async( req , res)=>{
    const body = req.body
    console.log(body);

    try {

        const newProducto = await createProduct(body)
        res.status(200);
        res.send(newProducto);
        
    } catch (error) {
        console.log(error);
        if(error instanceof mongoose.Error.ValidationError){
            res.status(400)
            res.send({
                mensaje:'error de validacion',
                reason: error.message
            })
            res.status(500)
            return res.send({
                error: error.message
            })
        }
    }

})

module.exports = router