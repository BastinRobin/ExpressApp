
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.list = function(req, res){
  res.send("Hello this is a route define from index	s");
};

exports.rob = function(req, res){
	res.send('Hi robin this is your route');
}

exports.about = function(req, res) {
	res.render('about', {
		title: 'About',
		name: 'Bastin Robin'
	});
}
