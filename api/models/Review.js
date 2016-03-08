var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create a schema.
var reviewSchema = new Schema ([
	book_id: {
		type: Number,
		required: true,
		unique: true,
	},
	title: {
		type: String,
		required: true,
		unique: true,
	},
	author: {
		type: String,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	pages: {
		type: Number,
		required: true,
	}
	rating: {
		type: Number,
		required: true,
	},
	created_at: Date,
	updated_at: Date

]);