const express=require('express');
const app=express();

const restRoute=require('./routes/restaurantroute');
const mealRoute=require('./routes/mealtyperoute');
const locationroute=require('./routes/locationroute');

const { connectMongoDb }= require('./connection');

connectMongoDb('mongodb://localhost:27017/dbtest1');



app.use('/',restRoute);
app.use('/',mealRoute);
app.use('/',locationroute);

app.listen(5000, () => {
    console.log("server running on port 5000")
})
