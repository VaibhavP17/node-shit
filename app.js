var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pagetitle = "Awesome Website";

app.get('/', function(req, res){
	res.render('default', {
		title : 'Home',
		classname : 'home',
		users : ['Vaibhav', 'Tushar', 'Daman', 'Prashant']});
});

app.get('/about', function(req, res){
	res.render('default', {
		title: 'About Us',
		classname: 'about'
	})
});

app.get('/who/:name?/:title?', function(req, res){
	var name = req.params.name;
	var title = req.params.title;
	res.send(name + ' was here' + 'title: '+title);
});

app.get('*', function(req, res){
	res.send('Bad route');
})
var server = app.listen(3000, function(){
	console.log('Listening on the port 3000');
});