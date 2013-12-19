
/*
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res) {
	res.render('index', {
		title: 'Home',
		data: 'Lorem ipsum and this a',
		num: [1,2,3,4,5,6]
	});
});

app.get('/about', function(req, res) {
	res.render('about', {
		title: 'About',
		name: 'Bastin Robin'
	});
});

app.get('/contact', function(req, res) {
	res.render('about', {
		title: 'Contact'
	});
});

app.get('/drop', function(req, res) {
	res.render('about', {
		title: 'Drop'
	})
});

app.post('/load', function(req, res) {
	res.send(req.query);
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
