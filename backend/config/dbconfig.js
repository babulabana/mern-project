var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{
    console.log("database connected")

})
.catch(()=>{
    console.log("err")
})