var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username: String,
        password: String
    },
);

module.exports = ('User', userSchema);