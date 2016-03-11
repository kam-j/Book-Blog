app.controller('bookCtrl', bookCtrl);

function bookCtrl($state,books,BookSrv){
	var ctrl = this;
	ctrl.$state =$state;
	ctrl.bookSrv = BookSrv;
	ctrl.books = books;
}

bookCtrl.prototype.goToDetails = function(book) {
	var ctrl = this;
	ctrl.bookSrv.bookDetails = book;
	//go to state
	console.log(book);
	ctrl.$state.go('bookDetails',{'bookId':book._id});
	

};