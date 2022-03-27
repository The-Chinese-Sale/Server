const mongoose=require("mongoose");
const express=require("express");

mongoose.connect("mongodb://localhost:27017/bookShop").
then(()=>{console.log("mongo db connected")})
.catch(er=>{console.log("eeeeeerorrrr")})

const app=express();
app.use(express.json());
app.listen(4500,()=>{console.log("waiting")});