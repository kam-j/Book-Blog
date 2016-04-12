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
		book_title: "Wave",
		image: "http://i.gr-assets.com/images/S/photo.goodreads.com/books/1352422861i/15799387._UY200_.jpg",
		reviews_title: "Unbelievably Tragic",
		reviews_rating: 5,
		review: "This memoir is an extremely raw and unflinching account of the events experienced during and after the 2004 Boxing Day Tsunami by survivor, Sonali Deraniyagala. In this horrific natural disaster, Deraniyagala lost both her parents, husband and two young children in a matter of minutes. Do not expect to find an in-depth narrative of the tsunami itself, or a gutsy survivor's tale of redemption and closure. There is none of that in this book. In writing this memoir, it seems Deraniyagala is still trying to heal herself by keeping her memories alive through its' pages.", 
		reviews:[
			{'review':"I can't imagine what she's been through.",
			'user_name':"Christine"},
			{'review': "So emotional.",
			'user_name':"Val"}
			],
		author: "Sonali Deraniyagala",
		genres: "Memoir",
		description: "A brave, intimate, beautifully crafted memoir by a survivor of the tsunami that struck the Sri Lankan coast in 2004 and took her entire family.",
		pages: 256, 
		publisher: "McClelland & Stewart",
		pubdate: 2013,
				
	}

);

newBook.save(function(err) {
    if (err) {
        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
    } else {
        console.log('Book created!');
    }
});

// Book.findOne({"_id":"57032f843beaae550563d002"}, function(err,book){
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




