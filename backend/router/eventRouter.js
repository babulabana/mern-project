const express = require("express")
const router = express.Router();
const eventController = require("../controller/eventController");
const upload = require("../forMulter")
router.post("/",upload.single('img'),async (req,res)=>
{
    console.log(req.file)
  let m =await eventController.insertevent(req.body,req.file.filename);
    res.send(m);
})


router.get("/", async (req,res)=>
{
    let d = await eventController.getallevents();
    res.send(d)
})


router.get("/:category",async(req,res)=>
    {
        let category = req.params.category;
        let data = await eventController.getEventsbyCategory(category)
        res.send(data)
    })
router.get("/getEventById/:eid",async(req,res)=>
        {
          let   eid = req.params.eid
        
          let data = await eventController.getEventById(eid)
          console.log(data)
          res.send(data)
        })

router.delete("/",async(req,res)=>
{   console.log(req.body)
    let msg = await eventController.deleteevent(req.body.id)
    res.send(msg);
})
router.put("/",async(req,res)=>
{
    try
    {
    let t = (req.body)
      let m =await eventController.updateevent(t);
      console.log(m)
        res.send(m);
    }
    catch(e)
    {
        console.log(e)
    }
})
module.exports = router;