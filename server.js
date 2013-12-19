var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('sam', {
		title:'Homepage',
		name:'Robin',
		age:25
	})
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

app.listen(3001);