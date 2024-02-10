const express = require('express');
const controllers = require('../controllers/restaurantController')
const router= express.Router();
router
    .get('/Allrest', controllers.getAllRestaurants)
    .get('/id/:id', controllers.getById)
    .get('/city/:city', controllers.getbyCity)
    .get('/mealtype/:mealtype', controllers.getbyMealType)
    .get('/location/:location', controllers.getBylocation)
    .get('/cuisine/:cuisine', controllers.getbyCuisine)
    .get('/lowCost/:lowCost', controllers.getBylowCost)
    .get('/highCost/:highCost', controllers.getByhighCost)
    .get('/sort/low', controllers.sortLow)
    .get('/sort/high', controllers.sortHigh)

module.exports = router
