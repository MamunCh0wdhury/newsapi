const express = require("express");
const News = require("../models/newsmodel");
const { model } = require("mongoose");
const router = new express.Router(); 

// Post Request using async and wait

router.post("/news", async(req,res)=>{
    try{
       const user= new News(req.body);
       const createUpload= await user.save();
       res.status(201).send(createUpload);
    }catch(e){ res.status(400).send(e)}
})


// Get Request using Async and Wait

router.get("/news", async(req,res)=>{

   try{
       const newsData= await News.find().sort({_id:-1});
       res.status(200).send(newsData);
   }catch(e){
       res.status(500).send(e);
   }
})

// Get Request Individual Data against Id 

router.get("/news/:id",async(req,res)=>{

try{
   const _id = req.params.id;
   const newsRequest= await News.findById(_id);
   if(!newsRequest){
       res.status(400).send();
   }else{
       res.status(200).send(newsRequest)
   }
}catch(e){
   res.status(500).send(e);
}

})


module.exports=router;
