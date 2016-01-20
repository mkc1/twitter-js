var express = require( 'express' );
var app = express();
var swig = require( 'swig' );
var routes = require('./routes/');

app.listen(3000, function(){
  console.log('server listening 3000');
  console.log('server listening 3000 again');
})


// app.use(function(req, res, next){
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

app.use('/', routes);
app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });