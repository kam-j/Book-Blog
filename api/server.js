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

//set Routes
app.use('/api/books', book_route);

var newBook = Book(
	{
		book_title: "Without Their Permission: How the 21st Century Will Be Made, Not Managed",
		image: "http://ecx.images-amazon.com/images/I/31bQE-GAJCL.jpg",
		reviews_title: "Review 1",
		reviews_rating: 5,
		review:'Very good book! I loved it lots!',
		reviews:[
			{'review':'it was also very good',
			'user_name':'Johnny'},
			{'review':'it was also very good2',
			'user_name':'Johnny2'}
			],
		author: "Alexis Ohanian",
		genres: "Tech",
		description: "As Alexis Ohanian learned when he helped to co-found the immensely popular reddit.com, the internet is the most powerful and democratic tool for disseminating information in human history. And when that power is harnessed to create new communities, technologies, businesses or charities, the results can be absolutely stunning. In this book, Alexis will share his ideas, tips and even his own doodles about harnessing the power of the web for good, and along the way, he will share his philosophy with young entrepreneurs all over the globe",
		pages: 263,  
		publisher: "Hachette",
		pubdate: 2014
				
	}


);

newBook.save(function(err) {
    if (err) {
        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
    } else {
        console.log('Book created!');
    }
});

// Book.findOne({"_id":'56df4b0f7b1cb09e045efd58'}, function(err,book){
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
app.listen(8080, function(){
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});




