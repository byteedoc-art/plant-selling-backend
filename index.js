
import express, { json } from "express";
import handleLogin from "./controllers/login.js";
import authRouter from './routes/authRoutes.js';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(json());

// v1/auth/login


app.use("/auth",authRouter);



// app.get("/login",(req,res)=>{
//   res.send("you have hit the demo route");
//   res.send("you have hit the demo route");
//   res.send("you have hit the demo route");
//   res.send("you have hit the demo route");
// })


app.listen(process.env.PORT, () => {
  console.log("server is running now" , process.env.PORT);
});
