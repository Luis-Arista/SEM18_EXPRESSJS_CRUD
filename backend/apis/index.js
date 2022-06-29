const express = require('express')
const router = express.Router()

const productsRouter = require('./products')
const musicaRouter = require('./musica')

router.use( '/products' , productsRouter)
router.use( '/musica' , musicaRouter)

module.exports = router