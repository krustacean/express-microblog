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
  db.Post.find({}, function(err, posts){
     if (err) {
       console.log("Error: Could not find Food db: " + err);
       return res.sendStatus(400);
     }
   res.render('index', {posts: posts});
 });
});

// route to read all blog posts: GET /api/posts
app.get("/api/posts", function (req, res){
 // get blog posts
 db.Post.find({}, function(err, posts){
    if (err) {
      console.log("Error: Could not find Food db: " + err);
      return res.sendStatus(400);
    }

    res.json(posts);
  });
});

// A route to read one blog post: GET /api/posts/:id
app.get('/api/posts/:id', function(req, res){
  postID = req.params.id;
  db.Post.find({_id:postID}, function(err, result){
  res.json(result);
  });
});
// A route to create a new blog post: POST /api/posts

// A route to update a single blog post: PUT /api/posts/:id

// A route to delete a single blog post: DELETE /api/posts/:id
app.delete("/api/posts/:id", function (req, res){
  // set the value of the id
  var targetId = req.params.id;
  db.Post.findOneAndRemove({_id:targetId}, function(err,result){
  res.json(result);
  });
});
