var express = require('express');
var router = express.Router();
let bolsonesControllers= require ('../controllers/bolsonesControllers');

router.get('/', bolsonesControllers.index);


module.exports = router;