var Book = require('./../models/Book');
var express = require('express');
var router = express.Router();

//get all books
router.get('/',function(req,res){
	console.log('hit!');
	Book.find({}, function(err, books) {
		if(err) {
			console.log(err);
			res.status(400)
				.json({err:err});
		} else {
			res.json({
				books:books
			});	
		}
	});
});	

//get specific book
router.get('/:bookId', function(req,res){
	console.log('Getting Book with ID: ' +req.params.bookId);
	Book.findOne({"_id":req.params.bookId}, function(err,books){
		if(err){
			console.log(err);
			res.status(400)
				.json({err:err})
		}
		else{
			res.json({book:books})
		}
	})
});

//  //delete a book
// router.delete('/:bookId',function(req,res){
// 	console.log('Deleting Book with ID: ' +req.params.bookId);
// 	Book.findOne({"_id":req.params.bookId}, function(err,books){
// 		book.remove(function(err){
// 			if(err){
// 				console.log(err);
// 				res.status(400);
// 					.json({err:err})
// 			}
// 			else {
// 				res.json({deleted:true})
// 			}

// 		})

// 	});
// });	

module.exports = router;




// //add a book
// router.post('/', function(req, res){
// 	console.log('Adding new Book');
// 	var book = req.body;
// 	var newBook = Book(book);

// 	newBook.save(function(err) {
// 	    if (err) {
// 	        console.log('ERROR FROM TRYING TO SAVE BOOK: \n'+err)
// 	    } else {
// 	        res.json({book:newBook})
// 	    }
// 	})

// });

// //update a book
// router.put('/:bookId',function(req,res){
// 	console.log('Updating Book with ID: ' +req.params.bookId);
// 	var __book = req.body;
// 	var update = {
// 		book_title:__book.book_title; 
// 		image:__book.image;
// 		reviews_title:__book.reviews_title;
// 		reviews_rating:__book.reviews_rating;
// 		author:__book.author;
// 		genres:__book.genres;
// 		description:__book.description; 
// 		pages:__book.pages;  
// 		publisher:__book.publisher;
// 		pubdate:__book.pubdate;
// 	}

// 	var query = {'_id':req.params.bookId}
// 	Book.update(query,update,{},function(err,books){
// 		if(err) {
// 			console.log(err);
// 			res.status(400);
// 				.json({err:err})
// 		}
// 		else {
// 			res.json({books:books});
// 		}
// 	})
// });

	

		

	

