var Review = require('./../models/Review');
var express = require('express');
var router = express.Router();


//get all reviews
router.get('/:bookid',function(req,res){
	console.log('find!');

	Review.find({"book_id": req.params.bookid}, function(err, reviews) {
	    if (err) {
	        console.log(err);
	    } else {
	        console.log(reviews);
	        res.json({
	        	reviews:reviews
	        })
	    }
	});

});

router.post('/', function(req,res){
	console.log('Adding new review');
	var review = req.body.data;
	console.log(review);
	var newReview = Review(review);

		newReview.save(function(err) {
	    	if (err) {
	        console.log('ERROR FROM TRYING TO SAVE COFFE SHOP: \n'+err)
	    	} 
	    	else {
	    		res.json({review:newReview})
	    	}	
	      
	    })
});
module.exports = router;

