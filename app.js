var express = require( 'express' );
var app = express();


app.listen(3000, function(){
  console.log('server listening 3000');
  console.log('server listening 3000 again');
})

app.use(function(req, res, next){
  res.send("welcome to the special area");
  next();
})

app.use(function(req, res, next){
  res.send("Welcome!");
})