var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require('./models');

app.set('view engine', 'ejs')
app.use("/static", express.static("public"));

//start the server on port 8080
app.listen(8080, function (){
  console.log("listening on port 8080");
});

//set up app routes
app.get("/", function (req, res){
  db.Blog.find({}, function(err, posts){
     if (err) {
       console.log("Error: Could not find Food db: " + err);
       return res.sendStatus(400);
     }
   res.render('index', {posts: posts});
 });
});

app.get("/api/posts", function (req, res){
 // get blog posts
 db.Blog.find({}, function(err, posts){
    if (err) {
      console.log("Error: Could not find Food db: " + err);
      return res.sendStatus(400);
    }

    res.send(posts);
  });
});
