import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
export const LoginCheck=async(req,res,next)=>{
    try {
        const token=req.cookies?.HideAndSeek || req.headers.authorization?.split(" ")[1];
        console.log("token:", token);

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decode);

        const verifiedUser= await User.findById(decode.id);
        console.log(verifiedUser);
        if(!verifiedUser)
        {
            const error=new Error("Session Expired.Please Login Agian");
            error.statusCode=401;
            return next(error);
        }
        req.user=verifiedUser;
        next();
    } catch (error) {
        res.status(401).json({message:"Please Check Login Details"})
    }
}