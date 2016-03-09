var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a schema.
var booksSchema = new Schema ({

		book_title: {
			type: String,
			required: true,
			unique: true
		},
		image: {
			type: String,
			required: true
		},
		reviews_title: {
			type: String,
			required: true
		},
		reviews: {
			type: Array,
		},
		review: {
			type: String,
			required: true
		},
		reviews_rating: {
			type: Number,
			required: true
		},
		author: {
			type: String,
			required: true

		}, 
		genres: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		pages: {
			type: Number,
			required: true
		},
		publisher: {
			type: String,
			required: true
		},
		pubdate: {
			type: Number,
			required: true
		},
		created_at: Date,
		updated_at: Date 
});

booksSchema.pre('save', function(next){
	// Get the current date.
	var currentDate = new Date();
	// Change the updated_at field to current date.
	this.updated_at = currentDate;
	// If created_at doesn't exist, add to that field
	if (!this.created_at) {
		this.created_at = currentDate;
	}
	// Continue.
	next();
});

// Create a model using schema.
var Books = mongoose.model('Books', booksSchema);

// Make this available to our Node applications
module.exports = Books;



	
