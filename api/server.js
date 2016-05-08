//initializes Express in project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Book = require('./models/Book');
//app config
app.use(express.static(__dirname + './../app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//route configuration
var book_route = require('./routes/book_routes.js')
var review_route = require('./routes/review_routes.js')

//set Routes
app.use('/api/books', book_route);
app.use('/api/reviews', review_route);




//database connect
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');

// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

var newBook = Book(
	{
		book_title: "The Hero's Walk",
		image: "https://images-na.ssl-images-amazon.com/images/I/51-f%2B2MWq4L._SX322_BO1,204,203,200_.jpg",
		reviews_title: "Like Being in a Vacuum",
		reviews_rating: 5,
		review: "It's been years since I read The Hero's Walk yet it has stuck with me. I can't wait to re-read it!", 
		reviews:[
			{'review':"So sad. Could not put it down.",
			'user_name':"Lindsey"},
			{'review': "So powerful.",
			'user_name':"Maureen"}
			],
		author: "Anita Rau Badami",
		genres: "Literary Fiction",
		description: "Set in the dusty seaside town of Toturpuram on the Bay of Bengal, The Hero's Walk traces the terrain of family and forgiveness through the lives of an exuberant cast of characters bewildered by the rapid pace of change in today's India. Each member of the Rao family pits his or her chance at personal fulfillment against the conventions of a crumbling caste and class system.",
		pages: 368, 
		publisher: "Vintage Canada",
		pubdate: 2000,
				
	}

);

newBook.save(function(err) {
    if (err) {
        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
    } else {
        console.log('Book created!');
    }
});

// Book.findOne({"_id":"570335f62768cc67054ca264"}, function(err,book){
// 		book.remove(function(err){
// 			if(err){
// 				// console.log(err);
// 				// res.status(400);
// 				// 	.json({err:err})
// 			}
// 			else {
// 				//res.json({deleted:true})
// 				console.log('deleted');
// 			}

// 		})

// 	});

//start Express on port 8080
app.listen(8080, function(){
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});


//When you're making changes to deployed site
// app.listen(80, function(){
// 	console.log('Server Started on http://localhost:80');
// 	console.log('Press CTRL + C to stop server');
// });




