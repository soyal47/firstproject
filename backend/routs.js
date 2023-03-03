const express = require('express');
const mongodb=require('mongodb')
const { ObjectId } = require('mongodb');
const app= express();
app.use(express.json());
const db = require('./config');

app.get('/',async(req,res)=>{
const data = await db()
const result = await data.find({}).toArray();
res.send(result);
});


app.post('/',async(req,res)=>{
    const data = await db()
    const result = await data.insertOne(req.body);
    res.send(result);
    });

app.put('/:_id',async(req,res)=>{
    const data = await db()
    const result = await data.updateOne({_id :new mongodb.ObjectId(req.params._id)},{$set:req.body});
    res.send(result);
    console.log(result);
    });

app.delete('/:_id',async(req,res)=>{
    const data = await db()
    const result = await data.deleteOne({_id :new mongodb.ObjectId(req.params._id)});
    res.send(result);
    });
app.listen(7000);