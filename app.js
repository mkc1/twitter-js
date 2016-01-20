var express = require( 'express' );
var app = express();
var swig = require( 'swig' );


app.listen(3000, function(){
  console.log('server listening 3000');
  console.log('server listening 3000 again');
})


app.use(function(req, res, next){
  res.render('index');
})

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });