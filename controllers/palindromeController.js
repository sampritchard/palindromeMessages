const array = [];

exports.indexPage = (req, res) => {
  res.render('indexPage')
}

exports.newPalindrome = (req, res) => {
  const word = req.body.palindrome;
  const removePunctuation = word.replace(/[^A-Za-z]+/g,'').toLowerCase();
  const reverseWord = removePunctuation.split('').reverse().join('');
  if (removePunctuation.length === 0) {
    res.render('errorPage')
  } else if(removePunctuation === reverseWord) {
      res.render('truePage')
        if (array.length < 10) {
          array.push(removePunctuation)
        } else {
        array.splice(0, 1, removePunctuation)
        }
  } else {
      res.render('falsePage')
  }
}

exports.showPalindromes = (req, res) => {
  res.render('palindromes', { array })
}
