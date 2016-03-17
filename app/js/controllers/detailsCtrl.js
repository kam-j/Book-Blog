app.controller('detailsCtrl',detailsCtrl);

function detailsCtrl($stateParams, api, BookSrv, $state,ReviewSrv) {
	
	// console.log($stateParams.bookId);
	var ctrl = this;
	ctrl.api = api;
	ctrl.$stateParams = $stateParams;
	ctrl.state = $state;
	ctrl.BookSrv = BookSrv;
	ctrl.ReviewSrv = ReviewSrv;

	//Capture resolved products for view
	ctrl.book = {};

	if($stateParams.bookId != undefined){
		ctrl.BookSrv.getbook($stateParams.bookId).then(function(res){
			ctrl.book = res.data.book;

			ctrl.ReviewSrv.getReviews($stateParams.bookId).then(function(res){
				ctrl.reviews = res;
				ctrl.reviews.reverse();
				console.log(res);
			});

		});
	}	

}

detailsCtrl.prototype.addReview = function() {
	var ctrl = this;
	console.log(ctrl.review);
	console.log(ctrl.$stateParams.bookId);

	var payload = {
		book_id:ctrl.$stateParams.bookId,
		review:ctrl.review
	}

	ctrl.ReviewSrv.addReview(payload).then(function(res){
		ctrl.reviews.unshift(res.data.review);
		// ctrl.reviews.splice(0,0,res.data.review);
		// ctrl.reviews.splice(0,)
	});
		//$(ctrl.reviews).prependTo(res.data.review);

};
