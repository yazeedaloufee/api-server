'use strict';

const {server}=require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server);
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING_TEST,{useNewUrlParser:true,
useUnifiedTopology:true}
    // , async ()=>{ await mongoose.connection.db.dropDatabase();}
);

let id;
describe('api server food',()=>{
  
it('should create new food using post request',async()=>{
    let food = {
        name:'testfood',
        origin:'testcountry',
    };
    const response = await request.post('/api/v1/food').send(food);
    expect(response.status).toBe(201);
    expect (response.body.name).toBe('testfood');
    expect (response.body.origin).toBe('testcountry');
    expect (response.body._id.length).toBeGreaterThan(0);
    id=response.body._id;
 
})

it('should update food with specific id', async()=>{
    let testfood = {
        name:'testfood2',
        origin:'testcountry2',
    };

    const response = await request.put(`/api/v1/food/${id}`).send(testfood);
    console.log(response.body,"for updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    
    expect(response.status).toBe(203);
    expect (response.body.name).toBe('testfood2');
    expect (response.body.origin).toBe('testcountry2');
    
})

it('should GET food in database with specific id', async()=>{
    

    const response = await request.get(`/api/v1/food/${id}`);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect (response.body[0].name).toBe('testfood2');
    expect (response.body[0].origin).toBe('testcountry2');
    // await mongoose.connection.db.dropDatabase();
    console.log('2');
    
})

it('should GET all food in database', async()=>{
    

    const response = await request.get(`/api/v1/food/`);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect (response.body[0].name).toBe('testfood2');
    expect (response.body[0].origin).toBe('testcountry2');
    await mongoose.connection.db.dropDatabase();
    console.log('2');
    
})

it('should delete  food with specific id', async()=>{
    

    const response = await request.delete(`/api/v1/food/${id}`);
    console.log(response.body);
    expect(response.status).toBe(200);
    // expect (response.body[0].name).toBe('testfood2');
    // expect (response.body[0].origin).toBe('testcountry2');
    console.log('2');
    
})
});
let id2;
describe('api server clothes',()=>{
    afterAll(async()=>{
        await mongoose.connection.db.dropDatabase();

        mongoose.connection.close();
    });

it('should create new clothes using post request',async()=>{
    let clothes = {
        name:'testclothes',
        fabric:'testfabric',
    };
    const response = await request.post('/api/v1/clothes').send(clothes);
    expect(response.status).toBe(201);
    expect (response.body.name).toBe('testclothes');
    expect (response.body.fabric).toBe('testfabric');
    expect (response.body._id.length).toBeGreaterThan(0);
    id2=response.body._id;
    console.log(id2)
})

it('should update clothes with specific id', async()=>{
    let testclothes = {
        name:'testclothes2',
        fabric:'testfabric2',
    };

    const response = await request.put(`/api/v1/clothes/${id2}`).send(testclothes);
  
    
    expect(response.status).toBe(203);
    expect (response.body.name).toBe('testclothes2');
    expect (response.body.fabric).toBe('testfabric2');
    
})

it('should GET food in database with specific id', async()=>{
    

    const response = await request.get(`/api/v1/clothes/${id2}`);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect (response.body[0].name).toBe('testclothes2');
    expect (response.body[0].fabric).toBe('testfabric2');
    // await mongoose.connection.db.dropDatabase();
  
    
    
})

it('should GET all clothes in database', async()=>{
    

    const response = await request.get(`/api/v1/clothes/`);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect (response.body[0].name).toBe('testclothes2');
    expect (response.body[0].fabric).toBe('testfabric2');
    await mongoose.connection.db.dropDatabase();
    
    
    
})

it('should delete  food with specific id', async()=>{
    

    const response = await request.delete(`/api/v1/clothes/${id2}`);
    console.log(response.body);
    expect(response.status).toBe(200);

   
    
    
})

});
