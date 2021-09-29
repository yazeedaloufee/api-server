'use strict';
const mongoose = require('mongoose');
require('dotenv').config();



const foodSchema= new mongoose.Schema({
    name:{type:String, required:true},
    origin:{type:String}
});

const FoodModel = mongoose.model('Food',foodSchema);
module.exports = FoodModel;