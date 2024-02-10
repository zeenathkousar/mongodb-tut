const express=require('express');
const app=express();

const mongoose=require('mongoose');

const main= async () =>{
    await mongoose.connect('mongodb://localhost:27017/ecom');
    
}   