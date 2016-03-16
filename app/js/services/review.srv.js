app.service('ReviewSrv',ReviewSrv);

function ReviewSrv($state,api) {
	//dependencies
	this.api = api;
	this.state = $state;

}

ReviewSrv.prototype.getReviews = function(bookid) {
	var _this = this;
	return this.api.request('/api/reviews/'+bookid,{},'GET')
	.then(function(res){
		//success promise
		console.log(res);
		_this.reviews = res.data.reviews;
		return _this.reviews;
	},function(err){
		//err promise
		console.log(err);
		return;
	});
}
ReviewSrv.prototype.addReview = function(data) {
	var _this = this


	return this.api.request('/api/reviews/',{data},'POST')
	.then(function(res){
		//success promise
		console.log(res);
		return res;
	},function(err){
		//err promise
		console.log(err);
		return;
	});
}

