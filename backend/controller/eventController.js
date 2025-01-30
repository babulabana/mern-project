// const event = require("../model/eventModel")
const eventModel = require("../model/eventModel")
exports.insertevent = async(t,imgurl)=>{
    let event = new eventModel(
        {
            eventname:t.eventname,
            place:t.place,
            date:t.date,
            time:t.time, 
            maxlimit:t.maxlimit, 
            category:t.category,
            imgpath:imgurl  
            
        }
   )

   let msg = "event not added";
   event.save()
   .then(async ()=>{
    let data = await eventModel.find();
    msg ={"message":"event added","eventdata":data}
   })   
   return msg


}
exports.deleteevent = async (name)=>
    {
        let t = {eventname:name}
        let msg = "event not delted"
    
        await eventModel.deleteOne(t).
        then(()=>msg = "event deleted ")
        return msg ;
    
    }
    exports.updateevent = async (name)=>
    {
        let t  = {eventname:name}
        let s = {status:'complete'}
    
        let msg = "event status not updated";
        await eventModel.updateOne(t,{$set:s})
        .then(()=>msg = "record updated")
        return msg
    }
    exports.getallevents =async ()=>
    {
    let data = await eventModel.find();
    return data;
    }