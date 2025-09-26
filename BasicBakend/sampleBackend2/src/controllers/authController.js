import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import { getAuthToken } from "../utils/token.js";
export const Register=async (req,res,next) => {
    try {
        const{fullName,email,password}=req.body;
        if(!fullName || !email || !password)
        {
            // console.log("404: All fields required");
            //we are creating error default handler function by which we can see what error we are getting instead of showing processing on page without this we cant see the error and its only processing 
            const error=new Error("All Fields Required");
            error.statusCode=400;
            return next(error);
        }
        //this is query to check the email is found or not
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            const error=new Error("User Already Registered");
            error.statusCode=409;
            return next(error);
        }
        //it is converting password into hash code and then save the password in mongodb
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await User.create({
            fullName,
            email,
            password:hashedPassword,
        });
    res.status(200).json({message:`welcome ${newUser.fullName}`});
    } catch (error) {
        next(error);
    }
}

export const Login=async(req,res,next)=>{
    try {
        const{email,password}=req.body;
        if(!email || !password)
        {
            const error=new Error("All Fields Required");
            error.statusCode=400;
            return next(error);
        }
        const existingUser= await User.findOne({email});
        if(!existingUser)
        {
            const error=new Error("User not registered");
            error.statusCode=401;
            return next(error);
        }
        const isVerified=await bcrypt.compare(password,existingUser.password)
        if(!isVerified)
        {
            const error=new Error("Invalid Password");
            error.statusCode=401;
            return next(error);

        }
        await getAuthToken(existingUser,res);
    } catch (error) {
        next(error);
    }




    res.status(200).json({message:"Login Successfully"});
}

export const Logout=(req,res)=>{
    res.status(200).json({message:"Logout Successfully"});
}