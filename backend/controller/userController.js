const userModel = require("../model/userModel")

exports.inserteUser = async(u)=>{
    var newUser = new userModel({
        username : u.username,
        email: u.email,
        contact: u.contact,
        pwd: u.pwd,
        verify:u.verify
    })
    let i = "failure";
    await newUser.save()
    .then(()=>i="success")
    .catch(()=>i="failure")
    return i ;

}



exports.checkLogin = async(u)=>{
    let condition = {email:u.email,pwd:u.pwd};
    let result = false;
    await userModel.find(condition)
    .then((d)=>
    {
        if(d.length>0){
            result =d
        }
    })
    .catch((e)=>console.log(e))
    return result;

}

exports.getAll = async()=>{
    let data = await userModel.find();
    return data;
}
exports.deleteAll = async()=>
    {
        let data = await userModel.deleteMany();
        return data;
    }