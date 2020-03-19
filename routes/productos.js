var express = require('express');
var router = express.Router();
var productosControllers= require ('../controllers/productosControllers');

router.get('/', productosControllers.index);


module.exports = router;