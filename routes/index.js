const palindromeController = require('../controllers/palindromeController')
const express = require('express');
const router = express.Router();

router.get('/', palindromeController.indexPage)
router.post('/', palindromeController.newPalindrome)
router.get('/palindromes', palindromeController.showPalindromes)

module.exports = router;
