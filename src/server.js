'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middlewares/logger');
const validator =require('./middlewares/validator')
function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}
app.use(logger);

app.get('/', (req, res)=> {
    res.send('WORKING FINE !!!')
});

app.get('/status', (req, res)=> {
    res.json({
        status: "running",
        port:process.env.PORT,
        domain:"https://basic-express-s.herokuapp.com/"
    });
});

app.get('/person', validator(),(req,res)=>{
   const userName = req.query.userName
    res.json({
        name: userName
    })
})


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}