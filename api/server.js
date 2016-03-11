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

// var newBook = Book(
// 	{
// 		book_title: "Lullabies For Little Criminals: A Novel",
// 		image: "https://upload.wikimedia.org/wikipedia/en/5/5d/LullabiesForLittleCriminals.jpg",
// 		reviews_title: "Creepy yet oddly riveting",
// 		reviews_rating: 4,
// 		review:'I felt so gross reading this but I couldnt put it down.',
// 		reviews:[
// 			{'review':'A troubling coming of age story for a little girl',
// 			'user_name':'Phyllis'},
// 			{'review': 'I agree with you. This book was disturbingly good.',
// 			'user_name':'Stanley'}
// 			],
// 		author: "Heather O'Neill",
// 		genres: "Fiction",
// 		description: "Baby, all of thirteen years old, is lost in the gangly, coltish moment between childhood and the strange pulls and temptations of the adult world. Her mother is dead; her father, Jules, is scarcely more than a child himself and is always on the lookout for his next score. Baby knows that “chocolate milk” is Jules’ slang for heroin and sees a lot more of that in her house than the real thing. But she takes vivid delight in the scrappy bits of happiness and beauty that find their way to her, and moves through the threat of the streets as if she’s been choreographed in a dance. Soon, though, a hazard emerges that is bigger than even her hard-won survival skills can handle. Alphonse, the local pimp, has his eye on her for his new girl—and what the johns don’t take he covets for himself. If Baby cannot learn to become her own salvation, his dark world threatens to claim her, body and soul.",
// 		pages: 352,  
// 		publisher: "Harper Perennial",
// 		pubdate: 2006,
				
// 	}


// );

// newBook.save(function(err) {
//     if (err) {
//         console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
//     } else {
//         console.log('Book created!');
//     }
// });

// Book.findOne({"_id":'56e1bf6266055164106cb7b2'}, function(err,book){
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




