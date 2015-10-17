var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


app.set('view engine', 'ejs')
//start the server on port 8080
app.listen(8080, function (){
  console.log("listening on port 8080");
});

app.get('/', fucntion(request, response){
    response.send("we are running");
})
