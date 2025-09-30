// mongodb+srv://pritamcodeservir_db_user:HC3RwbsFH9zCaNro@plantseelingproject.cgru8ib.mongodb.net/
import express from "express";
import mongoose from "mongoose";

const app = express();

// Creating Shcema 
const addressSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, require: true },
  pincode: { type: Number },
  city: { type: String },
});

// Creating Modal
const Address = mongoose.model("addresses", addressSchema);


mongoose
  .connect(
    "mongodb+srv://pritamcodeservir_db_user:HC3RwbsFH9zCaNro@plantseelingproject.cgru8ib.mongodb.net/plantdatabase"
  )
  .then(() => {
    console.log("data base connect ho gaya hai");
    // sendDataToDatabase();
    fetchDataFromDatabase();
  })
  .catch((e) => {
    console.log("kuchh error hai database ke connection me " + e);
  });

// CRUD OPERATIONS

// async function sendDataToDatabase() {
//   // creating schema (a database structure or user created variable )
//   const addressSchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String, require: true },
//     pincode: { type: Number },
//     city: { type: String },
//   });
//   // creating colleciton in database
//   const Address = mongoose.model("addresses", addressSchema);

//   //   fill data to custom variable
//   const newAddress = new Address({
//     name: "pritam",
//     email: "hello@gmail.com",
//     pincode: 34343,
//     city: "lucknow",
//   });

//   await newAddress
//     .save()
//     .then(() => console.log("data saved ho gaya hai"))
//     .catch((e) => {
//       console.log(e);
//     });
// }

async function fetchDataFromDatabase() {
  const userdata = await Address.find()
    .then((userdata) => {
      console.log("data aa gaya hai"+userdata);
    })
    .catch((e) => console.log(e));

//   console.log(userdata);
}

app.listen(3000, () => {
  console.log("server is running now");
});
