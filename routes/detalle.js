var express = require('express');
var router = express.Router();
var detalleControllers= require ('../controllers/detalleControllers');

router.get('/', detalleControllers.index);


module.exports = router;