// const express=require('express');
// const mon=require('mongodb').MongoClient;
// const host='mongodb://localhost:27017/databse ';

// const app=express();
// // const database1='Akdb'
// // const client=new mon(host);
// function one(){
//     const var1=new mon(host).connect();//.connect is to connect host and MongoClient 
//     // const data=var1.db(database1);
//     console.log('database connected');
//     // const collect=data.collection('pandu');
//     // console.log(collect);
// }
// one();
// app.listen(3005, ()=>{
//     console.log("server started on ports");
// });



const express=require('express');
const mongoo=require('mongoose');

const app=express();


app.listen(3542, ()=>{
    console.log('server started on ports');
});

mongoo.connect('mongodb://localhost:27017/cloudconn')
    .then(()=>console.log('mongoose connected'))

    .catch((err)=>console.log('err:'+err));

