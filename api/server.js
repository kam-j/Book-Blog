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




//databasse connect
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
		book_title: "Outliers: The Story of Success",
		image: "http://liveyesand.com/wp-content/uploads/2015/07/outliers.jpg",
		reviews_title: "Nature vs. Nurture",
		reviews_rating: 4,
		review:"An incredibly insightful read. This is the first book I've read by Malcolm. It definitely won't be the last!",
		reviews:[
			{'review':"Nothing new. It's all been said before.",
			'user_name':"George"},
			{'review': 'These pretzels are making me thirsty.',
			'user_name':'Kramer'}
			],
		author: "Malcolm Gladwell",
		genres: "Psychology",
		description: "There is a story that is usually told about extremely successful people, a story that focuses on intelligence and ambition. Gladwell argues that the true story of success is very different, and that if we want to understand how some people thrive, we should spend more time looking around them-at such things as their family, their birthplace, or even their birth date. And in revealing that hidden logic, Gladwell presents a fascinating and provocative blueprint for making the most of human potential.",
		pages: 336,  
		publisher: "Hachette",
		pubdate: 2008,
				
	}


);

newBook.save(function(err) {
    if (err) {
        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
    } else {
        console.log('Book created!');
    }
});

// Book.findOne({"_id":"56eb2ee866c9a5e30735f42a"}, function(err,book){
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
app.listen(80, function(){
	console.log('Server Started on http://localhost:80');
	console.log('Press CTRL + C to stop server');
});




