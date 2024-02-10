const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/databasemongoose').then(()=>{
    console.log('database connected')
})