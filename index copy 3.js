
import express from "express";
import jwt from 'jsonwebtoken';
const app = express();

function generateToken()
{
  const token =  jwt.sign({data:"Surendra"},"key123",{expiresIn:"10m"});
  console.log("Token = ",token);
}
function readToken()
{
  const data =  jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiU3VyZW5kcmEiLCJpYXQiOjE3NTkyNDE1MDUsImV4cCI6MTc1OTI0MjEwNX0.oweZpxpMTtClv2ISy2Zm113SRnPciXTqsq-X7eFDGkE","key123");
  console.log("Token = ",data);
}

// generateToken();
readToken();


app.listen(3000, () => {
  console.log("server is running now");
});
