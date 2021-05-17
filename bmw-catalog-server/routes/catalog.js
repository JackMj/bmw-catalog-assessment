const express = require('express')
const router = express.Router();
const { catalog } = require('../controllers/catalog');

router.get('/car-catalog/', catalog)

module.exports = router