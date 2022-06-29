const app = require('./app')


require('./db/mongodb')


const PORT = 4000;


app.listen( PORT , ( req , res )=>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);    
})