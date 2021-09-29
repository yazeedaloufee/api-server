'use strict';
const mongoose = require('mongoose');
const server = require('./src/server.js')
require('dotenv').config();
mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING_FOOD,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{server.start(process.env.PORT)})
.catch((e)=>{
    console.log('connection error',e.message);

}

)

