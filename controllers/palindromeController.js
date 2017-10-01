exports.indexPage = (req, res) => {
  res.render('indexPage')
}

exports.newPalindrome = (req, res) => {
  const word = req.body.palindrome;
  const reverseWord = word.split('').reverse().join('')
  if (word !== reverseWord) {
    res.render('falsePage')
  }
}
