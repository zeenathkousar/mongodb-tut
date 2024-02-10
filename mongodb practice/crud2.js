const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/databasetut").then(()=>{
    console.log('db connected')
})

const schema2=mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String,

    },
    brand:{
        type:String
    },
    category:{
        type:String
    }
})

const model2=mongoose.model('collection1',schema2)