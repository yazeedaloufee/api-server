const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const errorhandler= require('./error-handlers/500.js');
const notFoundHandler= require('./error-handlers/404');
const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js')




app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


//routes
app.use('/api/v1/food',foodRoutes);
app.use('/api/v1/clothes',clothesRoutes);
app.use('*',notFoundHandler);
app.use(errorhandler);


function start(port){

    app.listen(port,()=>{
        console.log(`port is up and running on port ${port}`)
        
    })
}


module.exports = {
    server:app,
    start:start,
};