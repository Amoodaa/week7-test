const express = require('express');
const getCities = require('./getCities');
const addCity = require('./addCity.js');

const router = express.Router();
router.use('*', (req, res, next) => {
  console.log(req.method, req.url, req.body);
  next();
});
router.get('/cities', getCities);
router.post('/add-city', addCity);
module.exports = router;
