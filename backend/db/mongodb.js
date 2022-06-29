const mongoose = require('mongoose')

const url = 'mongodb+srv://Luis:FFdZNswJLUNvSAEy@cluster0.5riaa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect( url , {} , () =>{
    console.log('----------------');
    console.log('----------------');
    console.log('coneccion a la BD exitosa');
    console.log('----------------');
})

module.exports = mongoose