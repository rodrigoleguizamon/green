var express = require('express');
var router = express.Router();
var carritoControllers= require ('../controllers/carritoControllers');

router.get('/', carritoControllers.index);


module.exports = router;