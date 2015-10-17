var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: {
    	type: String,
    	require: true
    },
    content: {
    	type: String,
    	require: true
    },
    date: {
      type: Number,
      require: true
    }
});

var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
