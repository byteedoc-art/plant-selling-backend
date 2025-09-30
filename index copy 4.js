
import express from "express";
import bcrypt from 'bcrypt';

const app = express();

bcrypt.hash("Surendra",10,(err,hashdata)=>{
  if(err) console.log(err);
  console.log(hashdata);
// $2b$10$SSd/8uyNw/M6psQfzLz/ZuvzGYohOTqzJo.QvNiGGMzAhQ.yHRy1C

})

bcrypt.compare("Surendrfa","$2b$10$SSd/8uyNw/M6psQfzLz/ZuvzGYohOTqzJo.QvNiGGMzAhQ.yHRy1C",(err,result)=>{

  if(err)console.log(err);
  console.log(result)
  
})


app.listen(3000, () => {
  console.log("server is running now");
});
