
import express, { json } from "express";

const app = express();
app.use(json());

// req = to take data from frontend or from postman 
// res = to give data to frontedn or to postman

app.get("/",(req,res)=>{
  res.send({data:"hello i am from server"})

})
app.get("/getParamasData/:id/changepaswordd/:changeid",(req,res)=>{
  const id = req.params.changeid;
  console.log(id);
  res.send({data:"hello i am from server"})

})

app.get("/getDatafromquery",(req,res)=>{
  const {name,mobnum} = req.query;
  console.log(name);
  console.log(mobnum);
  res.send({data:"hello i am from server"})
})

app.get("/getDataFromBody",(req,res)=>{
  const name = req.body.email;
  console.log(name);
  res.send({data:"we have got data "})

})
app.get("/getDataHeader",(req,res)=>{
  const name = req.headers["authorization"];
  console.log(name);
  res.send({data:"we have got data "})

})

app.listen(3000, () => {
  console.log("server is running now");
});
