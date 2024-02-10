const express=require('express');
const app=express();


const mongoose=require('mongoose');
const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017",{
            dbName:"dbzeenath",
        })
        console.log("Connected to MongoDB")
    }
    catch(err){
        throw new Error("Couldn't connect to MongoDB")
    }
}
connectdb();

const locSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city_id:{
        type:Number,
        required:true,
        unique:true
    },
    location_id:{
        type:Number,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true
    },
    country_name:{
        type:String,
        required:true
    }
})

const locModel=mongoose.model('location',locSchema)



app.listen(3000,()=>{
    console.log('server started')
})