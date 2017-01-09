process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(8080 , function(){
  console.log('Sevidor ejecutándose en http://localhost:8080');
});

module.exports = app;

//luis alfonso
