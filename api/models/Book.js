var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a schema.
var booksSchema = new Schema ({

		title: {
			type: String,
			required: true,
			unique: true,
		},
		image: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true;

		}, 
		genres: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		pages: {
			type: Number,
			required: true;
		},
		publisher: {
			type: String,
			required: true;
		},
		pubdate: {
			type: Date,
		}, 
});
	
