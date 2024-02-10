const express=require('express')
const locModel=require('../models/locationmodel')

const Controllers=require('../controllers/locationController')

const router=express.Router();

router.get('/Allloc',Controllers.getAllLocations)


module.exports=router
