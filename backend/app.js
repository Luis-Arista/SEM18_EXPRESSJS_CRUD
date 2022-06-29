const express = require('express');
const app = express();
const cors = require( 'cors' )


const router = require('./apis')

app.use(cors())
app.use( express.json() );


app.get ( '/' , ( req , res ) => {
    res.send(
        {
            message: 'Hola mundo desde una mini api',
        }
    );
});



app.use(router)



module.exports = app;