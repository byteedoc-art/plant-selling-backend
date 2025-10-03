
import mongoose from "mongoose"
const loginSchema = new  mongoose.Schema({
    email:String,
    password:String,

})

const User =  mongoose.model("users",loginSchema);

export default User;