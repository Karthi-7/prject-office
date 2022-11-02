const {Profile}=require('../models/index');

const profileCreate=async(req,res)=>{
    try{
        const response=Profile.create({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            photo:req.file.filename
    
        })
        return response
    }
catch(err){
    console.log(err)
}
}
module.exports={
    profileCreate
}
