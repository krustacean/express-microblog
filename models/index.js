var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/microblog");

module.exports.Food = require("./microblog.js");
