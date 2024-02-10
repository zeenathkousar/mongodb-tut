const mongoose=require('mongoose');

async function connectMongoDb(url){
    return  await mongoose.connect(url)
        .then(()=> console.log('mongodb connected'))
        .catch((e)=> console.log('mongo err in connection',e));
    
}

module.exports={
    connectMongoDb
}