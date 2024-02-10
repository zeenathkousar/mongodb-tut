const express=require('express');
const app=express();

require('./config');

const product=require('./product');

app.use(express.json())
// app.use(express.urlencoded({extended:false}));


// app.get('/',(req,res)=>{
//     res.send('hello page')
// })
// app.post('/create',async (req,res)=>{
//     //save method - done in 2 steps
//     // let data=new product(req.body);
//     //let result=await data.save()
//     //create method done in 1 step
//     let result=await product.create(req.body)

//     console.log(result)
//     res.send(result)
// })

// app.get('/lists',async (req,res)=>{
//     let data=await product.find();
//     res.send(data)
// })
// app.delete('/delete/:_id', async (req,res)=>{
    
//     console.log(req.params)
//     // let data=await product.find({id:'65bb70bc8d06b8a73s2868c81'});
//     let data=await product.deleteOne(req.params);

//     res.send(data)
// })

// app.put('/update/:_id',async (req,res)=>{
//     console.log(req.params);
//     // let data=await product.updateOne(condition, newsetting values)
//         // let data=await product.updateOne({name:"vivo 67" } ,{$set: {brand:"vivo"}})
//         let data=await product.updateOne(req.params,{$set: req.body})
//         res.send(data)


// })

app.get('/search/:field',async (req,res)=>{
    console.log(req.params.field)
    let data=await product.find( {"$or ":[
        {"name":{$regex:req.params.field}}
    ]})
    res.send("search done")

})
app.listen(3000,()=>{
    console.log('server started')
})