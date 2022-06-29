const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const { musicaControles } = require('../controllers')

const { getMusica , createMusica } = musicaControles

router.get( '/', async( req,res) => {
    const musica = await getMusica()
    res.send(musica)
})

router.post( '/' , async( req , res)=>{
    const body = req.body
    console.log(body);

    try {

        const newMusica = await createMusica(body)
        res.status(200);
        res.send(newMusica);
        
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