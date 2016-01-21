var express = require( 'express' );
var bodyParser = require('body-parser');
var app = express();
var swig = require( 'swig' );
var routes = require('./routes/');
var socketio = require('socket.io');


// app.listen(3000, function(){
//   console.log('server listening 3000');
//   console.log('server listening 3000 again');
// })


var server = app.listen(3000);
var io = socketio.listen(server);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use( '/', routes(io) );

//app.use(routes);
app.use(express.static('public'));

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({ cache: false });