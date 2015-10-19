var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog");

module.exports.Post = require("./microblog.js");
