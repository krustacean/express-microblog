var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog");

module.exports.Blog = require("./microblog.js");
