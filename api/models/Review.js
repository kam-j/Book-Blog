// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// //Create a schema.
// var reviewsSchema = new Schema ([
// 	book_id: {
// 		type: Number,
// 		required: true,
// 		unique: true,
// 	},
// 	title: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 	},
// 	author: {
// 		type: String,
// 		required: true,
// 	},
// 	review: {
// 		type: String,
// 		required: true,
// 	},
// 	pages: {
// 		type: Number,
// 		required: true,
// 	}
// 	rating: {
// 		type: Number,
// 		required: true,
// 	},
// 	created_at: Date,
// 	updated_at: Date

// ]);

// reviewsSchema.pre('save', function(next){
// 	// Get the current date.
// 	var currentDate = new Date();
// 	// Change the updated_at field to current date.
// 	this.updated_at = currentDate;
// 	// If created_at doesn't exist, add to that field
// 	if (!this.created_at) {
// 		this.created_at = currentDate;
// 	}
// 	// Continue.
// 	next();
// });

// // Create a model using schema.
// var Reviews = mongoose.model('Reviews', reviewsSchema);

// // Make this available to our Node applications
// module.exports = Reviews;

// // Custon Method
// reviewsSchema.methods.summary = function() {
// 	// Construct and return summary.
// 	var summary = this.book_id + "\n" + this.title + "\n" + this.author + "\n" + this.review + "\n" + this.pages + "\n" + this.pages + "\n" + this.rating;
// 	return summary;
// 	};  
// }
