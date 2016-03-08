var bookSchema = new Schema ({
	book:{
		_id: Number,
		title: String,
		image: String,
		author: String,
		description: String,
		pages: Number,
		publisher: String,
		pubdate: Date,
		reviews:[reviewsobject]
	},
		// type: String,
		// rating: Number,
	
	
