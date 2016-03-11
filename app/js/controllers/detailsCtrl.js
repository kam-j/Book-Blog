app.controller('detailsCtrl',detailsCtrl);

function detailsCtrl($stateParams, api, BookSrv, $state) {
	// console.log($stateParams.bookId);
	var ctrl = this;
	ctrl.api = api;
	ctrl.$stateParams = $stateParams;
	ctrl.state = $state;
	ctrl.BookSrv = BookSrv;

	//Capture resolved products for view
	ctrl.book = {};

	if($stateParams.bookId != undefined){
		ctrl.BookSrv.getbook($stateParams.bookId).then(function(res){
			ctrl.book = res.data.book;
		});
	}	

}

// detailsCtrl.prototype.deletebook = function(){
// 	var ctrl = this;
// 	var _id = ctrl.book._id;

// 	ctrl.BookSrv.deletebook(_id).then(function(res){
// 		ctrl.state.go('/booklist');
// 	});
// }