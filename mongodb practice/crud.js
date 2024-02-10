const express=require('express');
const app=express();


const mongoose=require('mongoose');

 mongoose.connect("mongodb://localhost:27017/databasetut").then(()=>{
    console.log('db connected')
});
const schema1=mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type:Number
    }
})


const main=async()=>{
    const model1=mongoose.model('table',schema1);
    let data=new model1({
        name:'zeenath',
        age:"78"
    });
    let result=await data.save();
    console.log(result)
}
// main()

const  updatefunc=async()=>{
    const model1=mongoose.model('table',schema1);
    let data=  await model1.updateOne(
        {name:"radha"},
        {
            $set:{age:56, name:"radhika"}
        }
    )
    console.log(data)

}
// updatefunc()

const deletefunc=async()=>{
    const model1=mongoose.model('table',schema1);

    let data=await model1.deleteOne({name:"america"})
    console.log(data)

}
// deletefunc()

const findfunc=async()=>{
    const model1=mongoose.model('table',schema1);

    let data=await model1.find();
    console.log(data)

}
// findfunc()

const findfunc2=async()=>{
    const model1=mongoose.model('table',schema1);

    let data=await model1.find({name:'radhika'});
    console.log(data)

}
findfunc2()


app.listen(3000,()=>{
    console.log('server started')
})

