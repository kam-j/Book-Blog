//initializes Express in project
var express = require('express');
var app = express();
app.use(express.static(__dirname + './../public'));

//ROUTES
//http://localhost:8080/books
app.get('/books', function(req,res){
	res.send('GET Endpoint Reached');

});

//only reachable by post request
app.post('/books', function(req, res){
	res.json({msg:'Post Endpoint reached'})
});


//databasse connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');

// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


//start Express on port 8080
app.listen(8080, function(){
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});




