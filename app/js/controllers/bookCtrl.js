app.controller('bookCtrl', bookCtrl);

function bookCtrl($state,books,BookSrv){
	var ctrl = this;
	ctrl.$state =$state;
	// ctrl.bookSrv = BookSrv;
	ctrl.books = books;

	ctrl.sortOptions = [
		{label: 'Title', sortField: 'book_title', reverse: false},
		{label: 'Author', sortField: 'author', reverse: false},
	]

}

bookCtrl.prototype.goToDetails = function(book) {
	var ctrl = this;
	BookSrv.bookDetails = book;
	
	//go to state
	console.log(book);
	ctrl.$state.go('bookDetails',{'bookId':book._id});
	

};

