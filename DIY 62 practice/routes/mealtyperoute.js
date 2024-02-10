const express=require('express');
const Controllers=require('../controllers/mealtypeController')

const router=express.Router();

router.get('/Allmeal',Controllers.getAllMealTypes)

module.exports=router
