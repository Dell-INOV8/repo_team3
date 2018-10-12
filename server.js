var express = require('express')
var path = require('path')
var bodyParser = require('body-parser'); // to read body for POST requests
var mongo = require('mongodb');
var mongoose = require('mongoose');
var app = express();
var mongoose = require('mongoose');
var Data = require("./dataModel");
var router = express.Router();

//connect to database
mongoose.connect('mongodb://localhost/dell-h2h', { useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to databse')
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if(err) return res.json({success: false, error: err});
    return res.json({success: true, data: data});
  });
});

router.post("/addData", (req, res) => {
  let data = new Data();

  const {id, name, skills} = req.body;

  if ((!id && id !== 0) || !skills) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.skills = skills;
  data.id = id
  data.save(err => {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true});
  });
});

app.use("/api", router);

var port = (process.env.Port||8080)
app.listen(port, function(){
    console.log("listening on " + port)
})