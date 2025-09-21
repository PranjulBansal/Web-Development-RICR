import User from "../models/userModels.js";
export const Register=async (req,res) => {
    try {
        const{fullName,email,password}=req.body;
        if(!fullName || !email || !password)
        {
            console.log("404: All fields required");
            return;
        }
        const newUser=await User.create({
            fullName,
            email,
            password,
        });
    res.status(200).json({message:`welcome ${newUser.fullName}`});
    } catch (error) {
        
    }
}

export const Login=(req,res)=>{
    res.status(200).json({message:"Login Successfully"});
}

export const Logout=(req,res)=>{
    res.status(200).json({message:"Logout Successfully"});
}