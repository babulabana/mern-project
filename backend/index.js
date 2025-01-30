const express = require("express")
const app = express();
const db = require("./config/dbconfig")

const cors = require("cors")

const eventRouter = require("./router/eventRouter")
const upload = require("./forMulter")
// enabling CORS for some specific origins only.
let corsOptions = {
    origin : ['http://localhost:8080',
    'http://localhost:5173'],
 }
 
 app.use(cors(corsOptions))
 app.use("/uploads",express.static(__dirname + '/uploads'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/event",eventRouter)
app.get("/",(req,res)=>
{
    res.send("use /event for task");

})
app.listen(8080,()=>console.log("server running"))