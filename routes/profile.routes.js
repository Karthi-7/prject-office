const profileController=require('../controller/profile.controller');
const multer = require('multer')
const path = require('path')


//multer middleware for uploading images
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

//routes
const Routes=(app)=>{
    app.post('/api/profile/create',upload.single('photo'),profileController.createProfile);
}

module.exports=Routes