const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index')

app.use(bodyParser.urlencoded( { extended: true }));

app.listen(3000, () => {
  console.log('App listening on Port 3000')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

module.exports = app;
