const mongoose = require("mongoose")
var schema = mongoose.Schema;
var userSchema = new schema({
   
    pwd: String,
    verify:Boolean
})

var userModel = mongoose.model("user",userSchema)
module.exports= userModel;