// mongodb+srv://pritamcodeservir_db_user:HC3RwbsFH9zCaNro@plantseelingproject.cgru8ib.mongodb.net/
import express from "express";
import mongoose from "mongoose";

const app = express();

// async function fetchDataFromDatabase() {
//   const userdata = await Address.find()
//     .then((userdata) => {
//       console.log("data aa gaya hai" + userdata);
//     })
//     .catch((e) => console.log(e));
// }

async function db() {
  mongoose
    .connect(
      "mongodb+srv://pritamcodeservir_db_user:HC3RwbsFH9zCaNro@plantseelingproject.cgru8ib.mongodb.net/plantdatabase"
    )
    .then(() => {
      console.log("print number 2");
    });
}

console.log("print number 1");
await db();
console.log("print number 3");

app.listen(3000, () => {
  console.log("server is running now");
});
