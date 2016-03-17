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
		book_title: "Console Wars: Sega, Nintendo, and the Battle that Defined a Generation",
		image: "http://cdn.gamer-network.net/2014/usgamer/original.jpg",
		reviews_title: "Story of my life.",
		reviews_rating: 4,
		review:"First things first. I am team Sega.",
		reviews:[
			{'review':"You suck. Team Nintendo, all the way!",
			'user_name':"Roy"},
			{'review': 'Meh, I might just watch the movie, then.',
			'user_name':'Daryl'}
			],
		author: "Blake J. Harris",
		genres: "Tech",
		description: "In 1990, Nintendo had a virtual monopoly on the videogame industry. Sega, on the other hand, was just a faltering arcade company with big aspirations and even bigger personalities. But all that would change with the arrival of Tom Kalinske, a former Mattel executive who knew nothing about videogames and everything about fighting uphill battles. His unconventional tactics, combined with the blood, sweat, and bold ideas of his renegade employees, completely transformed Sega and led to a ruthless, David-and-Goliath showdown with Nintendo. Little did he realize that Sega's success would create many new enemies and, most important, make Nintendo stronger than ever.",
		pages: 320,  
		publisher: "Dey Street Books",
		pubdate: 2014,
				
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




