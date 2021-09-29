'use strict';
class DataMnger{// data access lyer (DA)
constructor(model){
    this.model=model;
}

read(id){
    if(id){
        return this.model.find({_id:id});

    }else{
        return this.model.find({});
    }
}

create(obj){
    const doc = new this.model(obj);
    return doc.save();
}

delete(id){
    let deleted=this.model.findByIdAndDelete(id);
    console.log(deleted,'deleteddddddddddddddd')
    return deleted;
}

update(id,obj){
    return this.model.findByIdAndUpdate(id,obj,{new:true})
}

}

module.exports = DataMnger;