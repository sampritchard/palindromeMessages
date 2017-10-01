const palindromeController = require('../controllers/palindromeController')
const express = require('express');
const router = express.Router();

router.get('/', palindromeController.indexPage)

module.exports = router;
