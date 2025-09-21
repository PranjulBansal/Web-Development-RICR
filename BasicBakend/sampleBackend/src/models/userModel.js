import mongoose from "mongoose";

//schema create
const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});
const User=mongoose.model("User",userSchema);//creating table User and assign a table to reference varible as User 
export default User;