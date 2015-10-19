var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require('./models');

app.set('view engine', 'ejs')
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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
  res.render('post', {posts:result})
  });
});
// A route to create a new blog post: POST /api/posts
app.post("/api/posts", function (req, res){
  var newPost = req.body;
  console.log(newPost);
  db.Post.create(newPost, function(err, newPost){
    if (err) { return console.log(err); }
    console.log(newPost);
  });
  res.json(newPost);
});

// A route to update a single blog post: PUT /api/posts/:id
app.put('/api/posts/:id', function (req, res) {
  var postID = req.params.id;

  // find list in db by id
  List.findOne({_id: postID}, function (err, currentpost) {
    // find todo embedded in list
    // update todo text and completed with data from request body
    currentpost.content = req.body.content;
    currentpost.save(function (err, currentpost) {
      res.json(currentpost);
    });
  });
});

// A route to delete a single blog post: DELETE /api/posts/:id
app.delete("/api/posts/:id", function (req, res){
  // set the value of the id
  var targetId = req.params.id;
  db.Post.findOneAndRemove({_id:targetId}, function(err,result){
    if (err) { return console.log(err); }
    res.json(result);
  });
});
