app.service('BookSrv',BookSrv);

function BookSrv($state,api) {
	//dependencies
	this.api = api;
	this.state = $state;
	this.books[];
}

BookSrv.prototype.getbooks = function() {
	var _this = this;
	return this.api.request('/api/books/',{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.books = res.data.books;
	},function(err){
		//error promise
		console.log(err);
		return;

	});
}

BookSrv.prototype.getbook = function(bookId) {
		console.log('in getshop');
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

BookSrv.prototype.deletebook = function(id){
	var _this = this;
	return this.api.request('/api/books/'+id,{},'DEL')
	.then(function(res){
		console.log(res);
		if(res.status==200){
			//book was deleted successfully
			return res;
			//_this.removeshop(id);
			//_this.state.go('');
		}
	})
}

BookSrv.prototype.removeshop = function(id){
	for(index in this.books){
		if(this.books[index].id == id){
			delete this.books[index];

		}
	}
}

