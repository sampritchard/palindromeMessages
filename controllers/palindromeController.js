exports.indexPage = (req, res) => {
  res.render('indexPage')
}

exports.newPalindrome = (req, res) => {
  const word = req.body.palindrome;
  const removePunctuation = word.replace(/[^A-Za-z]+/g,'').toLowerCase();
  const reverseWord = removePunctuation.split('').reverse().join('');
  if (word.length === 0) {
    res.render('errorPage')
  } else if(removePunctuation === reverseWord) {
    res.render('truePage')
    console.log(req.body)
  } else {
    res.render('falsePage')
  }
}

exports.showPalindromes = (req, res) => {
  res.render('palindromes')
}
