
const DataMngr= require('../dataMngr/dataMngr.js');
const FoodModel = require('../models/food.js');
const dataMngr = new DataMngr(FoodModel);
const express= require('express');
const router = express.Router();




router.post('/',createFood);
router.get('/',getAllFood);
router.get('/:id/',getFoodWithId);
router.put('/:id/',updateFood);
router.delete('/:id/',deleteFood)



async function createFood(req,res,next){
try{
    foodObject= req.body;
const resObj=await dataMngr.create(foodObject);
res.status(201).json(resObj);
}
catch(error){
    next(error);

}

}

async function getAllFood(req,res,next){
    try{
     const resObj= await dataMngr.read();

    res.status(200).json(resObj);   
    }
   catch(error){ 
       next(error);
   }
}

async function getFoodWithId(req,res,next){
    try{
        const resObj= await dataMngr.read(req.params.id);
   
       res.status(200).json(resObj);   
       }
      catch(error){ 
          next(error);
      }
}

async function updateFood(req,res,next){
    try{   
    foodObj=req.body;
    const resObj= await dataMngr.update(req.params.id, foodObj);
    res.status(203).json(resObj);
    }
    catch(error){
        next(error);
    }
}

async function deleteFood(req,res){
    try{ 
    const resObj=await dataMngr.delete(req.params.id);
    
    res.status(200).json(resObj);}
    catch(error){
        next(error);
    }
}


module.exports = router;
