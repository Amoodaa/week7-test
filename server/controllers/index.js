const express = require('express');
const getCities = require('./getCities');
const addCity = require('./addCity.js');

const router = express.Router();

router.get('/cities', getCities);

router.post('/add-city', addCity);

module.exports = router;
