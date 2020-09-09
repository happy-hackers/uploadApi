const express = require('express');
const app = express();
const uploadRouter = require('./routers/upload');
app.use('/api/upload', uploadRouter);

app.listen(3000,()=>{
  console.log('server start')
})