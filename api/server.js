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
		book_title: "A Man Without a Country",
		image: "https://images-na.ssl-images-amazon.com/images/I/51O6iGQSscL.jpg",
		reviews_title: "Another Instant Classic",
		reviews_rating: 3,
		review:"Sardonic authors are my favourite.", 
		reviews:[
			{'review':"Vonnegut’s the best.",
			'user_name':"Elaine"},
			{'review': 'No soup for you!',
			'user_name':'Soup Nazi'}
			],
		author: "Kurt Vonnegut",
		genres: "Essays",
		description: "In a volume that is penetrating, introspective, incisive, and laugh-out-loud funny, one of the great men of letters of this age–or any age–holds forth on life, art, sex, politics, and the state of America’s soul. From his coming of age in America, to his formative war experiences, to his life as an artist, this is Vonnegut doing what he does best: Being himself. Whimsically illustrated by the author, A Man Without a Country is intimate, tender, and brimming with the scope of Kurt Vonnegut’s passions.",
		pages: 160,  
		publisher: "Random House",
		pubdate: 2007,
				
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




