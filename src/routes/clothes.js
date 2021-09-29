
const DataMngr= require('../dataMngr/dataMngr.js');
const ClothesModel = require('../models/clothes.js');
const dataMngr = new DataMngr(ClothesModel);
const express= require('express');
const router = express.Router();




router.post('/',create);
router.get('/',getAll);
router.get('/:id/',getWithId);
router.put('/:id/',update);
router.delete('/:id/',deleteItem)



async function create(req,res,next){
try{
    itemObject= req.body;
const resObj=await dataMngr.create(itemObject);
res.status(201).json(resObj);
}
catch(error){
    next(error);

}

}

async function getAll(req,res,next){
    try{
     const resObj= await dataMngr.read();

    res.status(200).json(resObj);   
    }
   catch(error){ 
       next(error);
   }
}

async function getWithId(req,res,next){
    try{
        const resObj= await dataMngr.read(req.params.id);
   
       res.status(200).json(resObj);   
       }
      catch(error){ 
          next(error);
      }
}

async function update(req,res,next){
    try{   
        itemObject=req.body;
    const resObj= await dataMngr.update(req.params.id, itemObject);
    res.status(203).json(resObj);
    }
    catch(error){
        next(error);
    }
}

async function deleteItem(req,res){
    try{ 
    const resObj=await dataMngr.delete(req.params.id);
    
    res.status(200).json(resObj);}
    catch(error){
        next(error);
    }
}


module.exports = router;