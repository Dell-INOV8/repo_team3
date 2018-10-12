var express = require('express')
var path = require('path')
var bodyParser = require('body-parser'); // to read body for POST requests
var mongo = require('mongodb');
var mongoose = require('mongoose');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var mongoUrl = "mongodb://user:12345a@ds113853.mlab.com:13853/dell-h2h"
var route = require('./routes/routes');

//connect to database
mongoose.connect(mongoUrl, { useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to databse')
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', route);


var port = (process.env.Port||8080)
app.listen(port, function(){
    console.log("listening on " + port)
})