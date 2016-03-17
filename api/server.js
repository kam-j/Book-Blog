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

var newBook = Book(
	{
		book_title: "Things A Little Bird Told Me: Confessions of the Creative Mind",
		image: "http://thingsalittlebirdtoldme.com/img/book@2x.jpg",
		reviews_title: "Who can drop out of college and still get hired by Google? This guy.",
		reviews_rating: 4,
		review:"This book is a surprisingly easy, enlightening and important read for anyone working in a creative industry. Biz offers great advice about creating ideas, manufacturing opportunity and abandoning a linear of thinking. None of his advice is new and it is a bit over simplified, but It makes so much sense when you can compare his experiences to your everyday life.",
		reviews:[
			{'review':"Lucky guy",
			'user_name':"Jerry"},
			{'review': 'Not fair. My life is so hard.',
			'user_name':'Newman'}
			],
		author: "Biz Stone",
		genres: "Tech",
		description: "In this book, Biz addresses failure, the value of vulnerability, ambition, and corporate culture. Whether seeking behind-the-scenes stories, advice, or wisdom and principles from one of the most successful businessmen of the new century.",
		pages: 240,  
		publisher: "Hachette",
		pubdate: 2015,
				
	}


);

newBook.save(function(err) {
    if (err) {
        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
    } else {
        console.log('Book created!');
    }
});

// Book.findOne({"_id":"56e1b46ef4fc9bf40ff069e9"}, function(err,book){
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
app.listen(80, function(){
	console.log('Server Started on http://localhost:80');
	console.log('Press CTRL + C to stop server');
});




