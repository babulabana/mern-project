const mongoose = require("mongoose")
const schema = mongoose.Schema({
    eventname:String,
    place:String,
    date:String,
    time:String, 
    maxlimit:String, 
    category:String,
    imgpath:String
})

const event = new mongoose.model("event",schema);
module.exports = event;