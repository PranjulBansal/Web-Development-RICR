import jwt from "jsonwebtoken";
export const getAuthToken=async(user,res)=>{
    try {
        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
        res.cookie("Loginkey",token,{
            maxAge: 1000 * 60 * 60 * 24,
            strict:false,
            httpOnly:true,
            sameSite:"lax",
          });
          return true;
    } catch (error) {
        console.log("Error in Cookie Creation",error);
        return false;
    }
}