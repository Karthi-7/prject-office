const profileService=require('../service/profile.service');

 
const createProfile=async(req,res)=>{
    const profileCreate=await profileService.profileCreate(req);
    console.log(req.file)
    return res.json({
        message:"succefully created profile",
        code:201,
        data:profileCreate
    })
}

module.exports={
    createProfile
}





