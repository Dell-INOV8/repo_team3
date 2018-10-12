const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
	name: String,
        skills: String
    },
    { timestampes: true}
);

module.exports = mongoose.model("Data", DataSchema)	
