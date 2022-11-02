const express=require("express");
const app=express();
const port=3000;
const profileRoutes=require("./routes/profile.routes")
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
profileRoutes(app)



 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })