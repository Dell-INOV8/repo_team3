var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema(
    {
        name: String,
        skills: String,
        personalDescription: String,
    },
);

module.exports = mongoose.model("Post", postSchema);	
