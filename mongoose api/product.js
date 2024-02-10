const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name: String,
    price:Number,
    brand:String,
    category:String
})

// const ProductSchema=new mongoose.Schema({
//     name: {
//         type:String,
//         required: true
//     },
//     price: {
//         type:Number,
//         required: true
//     },
//     brand:{
//         type:String,
//         required: true
//     },
//     category:{
//         type:String,
//         required:true
//     }
// })

module.exports=mongoose.model('products',ProductSchema)