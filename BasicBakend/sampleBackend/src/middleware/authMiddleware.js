export const LoginCheck=(req,res,next)=>{
    try {
        console.log("login checked");
        next();
    } catch (error) {
        res.status(401).json({message:"Please check your login details"})
    }
}