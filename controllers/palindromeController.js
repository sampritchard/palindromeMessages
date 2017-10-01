exports.indexPage = (req, res) => {
  res.render('indexPage')
}

exports.newPalindrome = (req, res) => {
  const word = req.body.palindrome;
  const removePunctuation = word.replace(/[^A-Za-z]+/g,'').toLowerCase();
  const reverseWord = removePunctuation.split('').reverse().join('')
  if (removePunctuation === reverseWord) {
    res.render('truePage')
  } else {
    res.render('falsePage')
  }
}
