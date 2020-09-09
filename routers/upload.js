const express = require ('express');
const uploadRouter = express.Router();
const fileUpload = require('express-fileupload');
uploadRouter.use(fileUpload());
uploadRouter.post('/',(req,res)=>{ 
  if(!req.files){
    return res.status(400).send("No file selected!")
  }
  const file = req.files.file;
  const [name, type] = file.name.split('.');
  file.mv(`./fileStore/${name}.${type}`,(err,result)=>{
    if(err){
      throw err
    }
    res.status(200).send({
      message :"success",
      filePath:`./fileStore/${name}.${type}`
    })
  })
})
module.exports = uploadRouter;
