app.service('BookSrv',BookSrv);

function BookSrv($state,api) {
	//dependencies
	this.api = api;
	this.state = $state;
	this.books=[];
	this.bookDetails= {};
}

BookSrv.prototype.getbooks = function() {
	var _this = this;
	return this.api.request('/api/books/',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.books = res.data.books;
		return _this.books;
	},function(err){
		//error promise
		console.log(err);
		return;

	});
}

BookSrv.prototype.getbook = function(bookId) {
		// console.log('in getshop');
		var _this = this;
		return this.api.request('/api/books/' + bookId,{},'GET')
		.then(function(res){
			//success promise
			console.log(res);
			return res;
		},function(err){
			//error promise
			console.log(err);
			return;
		});
}


