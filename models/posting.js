var mongoose = require('mongoose');
 
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
	
module.exports = mongoose.model('Posting',{
    title: String,
    description: String,
    tags: [String],
	posting_data: Date,
    start_date: Date,
    end_date: Date,
	owner_email: String,
	developer_email: [String],
	status: String,
	rating: Number,
	comments: [ObjectId]
});